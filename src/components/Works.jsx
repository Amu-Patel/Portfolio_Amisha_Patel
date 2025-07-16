export default function Works() {
  return (
    <section id="works" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Portfolio
      </h2>

      {/* Nav */}
      <ul className="flex gap-6 mb-8 text-sm font-medium">
        <li className="text-blue-600 cursor-pointer">All</li>
        <li className="cursor-pointer hover:text-blue-600">Web Designing</li>
        <li className="cursor-pointer hover:text-blue-600">Graphic Design</li>
      </ul>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          img="/works/1.png"
          title="HotStar Clone"
          link="https://amu-patel.github.io/Hotstar-Clone/"
          bg="bg-blue-50"
        />
        <PortfolioCard
          img="/works/9.png"
          title="Flyer (Shas Foundation)"
          link="https://www.canva.com/design/DAE22fd72fM/HopsK9-UoYYrSvhP5uMdOQ/edit"
          bg="bg-green-50"
        />
        <PortfolioCard
          img="/works/4.png"
          title="My Bank Website"
          link="https://amu-patel.github.io/Home_veiw_my_bank/"
          bg="bg-purple-50"
        />
        <PortfolioCard
          img="/works/5.png"
          title="Arvind Portfolio"
          link="https://amu-patel.github.io/Porfolio_site/"
          bg="bg-blue-50"
        />
        <PortfolioCard
          img="/works/6.png"
          title="Ameesha Portfolio"
          link="https://amu-patel.github.io/Portfolio-site/"
          bg="bg-rose-50"
        />
        <PortfolioCard
          img="/works/11.png"
          title="Post"
          link="https://urlis.net/tp3mr5z3"
          bg="bg-rose-50"
        />
        <PortfolioCard
          img="/works/7.png"
          title="Mobile Interface"
          link="https://amu-patel.github.io/Mobile-interface/"
          bg="bg-rose-50"
        />
        <PortfolioCard
          img="/works/8.png"
          title="Flyer (Cyber Club)"
          link="https://www.canva.com/design/DAFwT0251ow/Le6leMGuEeW0Wx6LYlkscg/edit"
          bg="bg-purple-50"
        />
        <PortfolioCard
          img="/works/2.png"
          title="Hero Page"
          link="https://amu-patel.github.io/Portfolio-website-interface/"
          bg="bg-green-50"
        />
        <PortfolioCard
          img="/works/3.png"
          title="E-Commerce Website"
          link="https://amu-patel.github.io/E-commerce/"
          bg="bg-yellow-50"
        />
        <PortfolioCard
          img="/works/10.png"
          title="Flyer (Cyber Club)"
          link="https://www.canva.com/design/DAFzgqq0y3E/qFEza-_ttD3yGkMFQM4_4g/edit"
          bg="bg-blue-50"
        />
      </div>
    </section>
  );
}

function PortfolioCard({ img, title, link, bg }) {
  return (
    <div
      className={`rounded-xl p-4 border border-blue-100 shadow hover:shadow-lg transition ${bg} flex flex-col items-center`}
    >
      <div className="w-full overflow-hidden rounded-lg mb-4">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-base font-bold mb-2 text-center">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-600 underline"
      >
        View Project
      </a>
    </div>
  );
}
