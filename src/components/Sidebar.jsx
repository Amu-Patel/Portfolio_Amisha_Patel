export default function Sidebar() {
  return (
    <aside className="bg-primary rounded-2xl shadow-lg p-6 w-full md:w-72 flex flex-col items-center sticky top-4">
      <img 
        src="./profile/passport-photo.jpg"
        alt="Amisha Patel" 
        className="w-32 h-32 object-cover mb-4" 
      />
      <h2 className="text-2xl font-bold mb-1">Amisha Patel</h2>
      <p className="text-xl text-gray-500 mb-4">Front-end Developer</p>

      {/* Social */}
      <div className="flex gap-4 mb-4 text-xl text-gray-700">
        <a href="https://www.linkedin.com/in/amisha-patel-47179028b" target="_blank" rel="noopener noreferrer"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gradient-to-r from-blue-500 to-purple-500">
          <i className="bx bxl-linkedin hover:text-white text-xl "></i>
        </a>
        <a href="https://github.com/Amu-Patel" target="_blank" rel="noopener noreferrer"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gradient-to-r from-blue-500 to-purple-500">
          <i className="bx bxl-github hover:text-white text-xl "></i>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gradient-to-r from-blue-500 to-purple-500">
          <i className="bx bxl-instagram hover:text-white text-xl "></i>
        </a>
        <div className="relative group">
          <button className="text-2xl bg-white p-1 rounded-md shadow-md hover:bg-gradient-to-r from-blue-500 to-purple-500">
            <i className="bx bx-code  hover:text-white text-xl "></i>
          </button>
          <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-white border rounded shadow p-2 text-xs">
            <a href="https://www.codechef.com/users/amisha_patel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500">
              <i className="bx bx-code size-2"></i> CodeChef
            </a>
            <a href="https://leetcode.com/u/amisha_patel_0024/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500">
              <i className="bx bxs-bug size-2"></i> LeetCode
            </a>
            <a href="https://www.geeksforgeeks.org/user/amu013ik5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-600">
              <i className="bx bx-book size-2"></i> GFG
            </a>
          </div>
        </div>
      </div>

      {/* Contact Box */}
      <div className="bg-gray-200 rounded-xl p-4 w-full text-left space-y-2 text-sm shadow-md">
        <p className="flex items-center gap-2">
          <i className="bx bx-envelope"></i> amishaatel@gmail.com
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-phone"></i> +91 7898763132
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-map"></i> Rewa, MP
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-calendar"></i> 01/01/2003
        </p>
      </div>

      <a
        href="/downloads/amisha_Patel_Resume.pdf"
        download
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:shadow-lg"
      >
        <i className="bx bx-download"></i> Download CV
      </a>

    </aside>
  );
}

