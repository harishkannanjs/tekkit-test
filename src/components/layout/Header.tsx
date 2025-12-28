import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/constants/routes'
import { Button } from '@/components/common'
import { cn } from '@/utils/helpers'

export function Header() {
  const { isAuthenticated, logout, user } = useAuth()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-sm font-medium transition-colors hover:text-primary-600',
      isActive ? 'text-primary-600' : 'text-gray-600'
    )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={ROUTES.HOME} className="text-xl font-bold text-gray-900">
            Tekkit
          </Link>
          <nav className="hidden md:flex items-center gap-6">
                <NavLink to="https://tekkit.netlify.app/pages/courses" className={navLinkClass}>
      Courses
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/courses/catalyst" className={navLinkClass}>
      Web Catalyst Bootcamp
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/pricing" className={navLinkClass}>
      Pricing
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/courses" className={navLinkClass}>
      Courses
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/courses/catalyst" className={navLinkClass}>
      Web Catalyst Bootcamp
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/pricing" className={navLinkClass}>
      Pricing
    </NavLink>
    <NavLink to="https://tekkit.netlify.app/pages/apply-now" className={navLinkClass}>
      Apply Now
    </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600">Hi, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to={ROUTES.REGISTER}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
