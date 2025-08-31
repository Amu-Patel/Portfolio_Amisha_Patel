import { useState } from "react";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    {
      img: "./works/2.png",
      title: "Hero Page",
      link: "https://amu-patel.github.io/Portfolio-website-interface/",
      bg: "bg-green-50",
      category: "Web",
    },
    {
      img: "./works/1.png",
      title: "HotStar Clone",
      link: "https://amu-patel.github.io/Hotstar-Clone/",
      bg: "bg-blue-50",
      category: "Web",
    },
    {
      img: "./works/9.png",
      title: "Flyer (Shas Foundation)",
      link: "https://www.canva.com/design/DAE22fd72fM/HopsK9-UoYYrSvhP5uMdOQ/edit",
      bg: "bg-green-50",
      category: "Graphic",
    },
    {
      img: "./works/4.png",
      title: "My Bank Website",
      link: "https://amu-patel.github.io/Home_veiw_my_bank/",
      bg: "bg-purple-50",
      category: "Web",
    },
    {
      img: "./works/5.png",
      title: "Arvind Portfolio",
      link: "https://amu-patel.github.io/Porfolio_site/",
      bg: "bg-blue-50",
      category: "Web",
    },
    {
      img: "./works/3.png",
      title: "E-Commerce Website",
      link: "https://amu-patel.github.io/E-commerce/",
      bg: "bg-yellow-50",
      category: "Web",
    },
    {
      img: "./works/7.png",
      title: "Mobile Interface",
      link: "https://amu-patel.github.io/Mobile-interface/",
      bg: "bg-rose-50",
      category: "Web",
    },
    {
      img: "./works/8.png",
      title: "Flyer (Cyber Club)",
      link: "https://www.canva.com/design/DAFwT0251ow/Le6leMGuEeW0Wx6LYlkscg/edit",
      bg: "bg-purple-50",
      category: "Graphic",
    },
    {
      img: "./works/10.png",
      title: "Flyer (Cyber Club)",
      link: "https://www.canva.com/design/DAFzgqq0y3E/qFEza-_ttD3yGkMFQM4_4g/edit",
      bg: "bg-blue-50",
      category: "Graphic",
    },
    {
      img: "./works/11.png",
      title: "Post",
      link: "https://urlis.net/tp3mr5z3",
      bg: "bg-rose-50",
      category: "Graphic",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          selectedCategory === "Web" ? item.category === "Web" : item.category === "Graphic"
        );

  return (
    <section id="works" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Portfolio
      </h2>

      
      <ul className="flex gap-6 mb-8 text-sm font-medium">
        {["All", "Web Designing", "Graphic Design"].map((cat) => (
          <li
            key={cat}
            onClick={() =>
              setSelectedCategory(cat === "All" ? "All" : cat === "Web Designing" ? "Web" : "Graphic")
            }
            className={`cursor-pointer ${
              (cat === "All" && selectedCategory === "All") ||
              (cat === "Web Designing" && selectedCategory === "Web") ||
              (cat === "Graphic Design" && selectedCategory === "Graphic")
                ? "text-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredItems.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({ img, title, link, bg }) {
  return (
    <div
      className={`rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition duration-300 ease-in-out ${bg}`}
      style={{
        boxShadow: "5px 5px 15px #80B3FF, -2px -2px 15px #B6FFFA",
        width: "fit-content",
        padding: "8px",
        margin: "10px",
        lineHeight: 1,
      }}
    >
      <img
        src={img}
        alt={title}
        className="object-contain rounded-xl w-full h-auto max-w-[360px]"
        style={{
          display: "block",
          margin: 0,
        }}
      />
      <div className="pt-1 pb-0 px-1 m-0 text-center">
        <h3 className="text-sm font-bold text-gray-800 my-1 leading-tight">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm underline hover:text-blue-800 m-0"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
