import { useState, useCallback } from 'react'
import type { Status } from '@/types'

interface UseApiOptions<T, P extends unknown[]> {
  fn: (...args: P) => Promise<T>
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

export function useApi<T, P extends unknown[] = []>({
  fn,
  onSuccess,
  onError,
}: UseApiOptions<T, P>) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [status, setStatus] = useState<Status>('idle')

  const execute = useCallback(async (...args: P) => {
    setStatus('loading')
    setError(null)
    
    try {
      const result = await fn(...args)
      setData(result)
      setStatus('success')
      onSuccess?.(result)
      return result
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      setStatus('error')
      onError?.(error)
      throw error
    }
  }, [fn, onSuccess, onError])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setStatus('idle')
  }, [])

  return {
    data,
    error,
    status,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    execute,
    reset,
  }
}
