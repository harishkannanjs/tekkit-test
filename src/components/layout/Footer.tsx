import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Tekkit</h3>
            <p className="mt-2 text-sm text-gray-600">
              From curious learner to confident tech creator—Tekkit’s bootcamps guide you from concept to deployment with real projects.
            </p>
          </div>
                    <div>
            <h4 className="font-medium text-gray-900">Join Our Newsletter</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="https://tekkit.netlify.app/pages/courses/catalyst" className="text-sm text-gray-600 hover:text-primary-600">Web Catalyst
                        Bootcamp</a></li>
              <li><a href="https://tekkit.netlify.app/pages/contact" className="text-sm text-gray-600 hover:text-primary-600">Contact</a></li>
              <li><a href="https://tekkit.netlify.app/pages/privacy_policy" className="text-sm text-gray-600 hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="https://tekkit.netlify.app/pages/terms_and_conditions" className="text-sm text-gray-600 hover:text-primary-600">Terms &
                     Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Join Our Newsletter</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="https://tekkit.netlify.app/pages/courses/catalyst" className="text-sm text-gray-600 hover:text-primary-600">Web Catalyst
                        Bootcamp</a></li>
              <li><a href="https://tekkit.netlify.app/pages/contact" className="text-sm text-gray-600 hover:text-primary-600">Contact</a></li>
              <li><a href="https://tekkit.netlify.app/pages/privacy_policy" className="text-sm text-gray-600 hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="https://tekkit.netlify.app/pages/terms_and_conditions" className="text-sm text-gray-600 hover:text-primary-600">Terms &
                     Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Tekkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
