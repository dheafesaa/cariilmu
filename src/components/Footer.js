export default function footer() {
  return (
    <footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
      <p className="text-gray-700 mb-6 lg:mb-0 flex flex-col">
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://www.linkedin.com/in/dheafesa/" className="text-light-blue-500 hover:text-light-blue-700">
          Dhea Fesa Athallah
        </a>
      </p>
      <ul className="list-unstyled flex">
        <li className="mr-6">
          <div className="text-gray-700 hover:text-gray-900 font-medium block text-sm">
            About Us
          </div>
        </li>
        <li className="mr-6">
          <div className="text-gray-700 hover:text-gray-900 font-medium block text-sm">
            Blog
          </div>
        </li>
        <li className="mr-6">
          <div className="text-gray-700 hover:text-gray-900 font-medium block text-sm">
            MIT License
          </div>
        </li>
        <li>
          <div className="text-gray-700 hover:text-gray-900 font-medium block text-sm">
            Contact Us
          </div>
        </li>
      </ul>
    </footer>
  );
}
