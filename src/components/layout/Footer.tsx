export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">${parsedContent.title || 'Site'}</h3>
            <p className="mt-2 text-sm text-gray-600">
              ${parsedContent.description || 'Building amazing experiences with TypeScript and React.'}
            </p>
          </div>
          ${sectionsCode || `<div>
            <h4 className="font-medium text-gray-900">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary-600">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary-600">About</a></li>
            </ul>
          </div>`}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} ${parsedContent.title || 'Site'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
