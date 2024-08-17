export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-semibold text-white">Company Name</h2>
              <p className="mt-2 text-gray-400">
                Leading the way in providing the best news coverage across the globe.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.413c0-2.506 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.482h-1.26c-1.242 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.252 11.675-11.675 0-.177 0-.355-.012-.532A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.116 4.116 0 001.804-2.27 8.248 8.248 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.652 11.652 0 013.179 4.62a4.107 4.107 0 001.27 5.475A4.072 4.072 0 012.8 9.713v.052a4.106 4.106 0 003.292 4.022 4.09 4.09 0 01-1.852.07 4.107 4.107 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 00-6 6v8h-3v-8a3 3 0 113 0v8h3v-8a6 6 0 00-6-6zM2 9h3v12H2zM3.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19.5 9c-3.281 0-4.5 2.195-4.5 4v7h3v-7c0-1.586 0-4 4.5-4s4.5 2.414 4.5 4v7h3v-7c0-1.805-.799-4-4.5-4z" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h2 className="text-xl font-semibold text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    World
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Sport
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              <p className="mt-4 text-gray-400">
                123 News Avenue, Suite 100<br />
                City, State, 12345<br />
                Email: <a href="mailto:info@newswebsite.com" className="text-blue-500 hover:underline">info@newswebsite.com</a><br />
                Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
              </p>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  