export default function Tabs({ active, setActive }) {
  const tabs = [
    { name: "about", icon: "bx bx-user" },
    { name: "resume", icon: "bx bxs-file" },
    { name: "works", icon: "bx bx-briefcase" },
    { name: "contact", icon: "bx bx-envelope" },
  ];

  return (
    <div className="bg-primary rounded-full shadow-md flex gap-4 px-4 py-2 ml-8 ">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActive(tab.name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            active === tab.name
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg"
              : "bg-gray-100"
          }`}
        >
          <i className={`${tab.icon} text-lg`}></i> {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
        </button>
      ))}
    </div>
  );
}