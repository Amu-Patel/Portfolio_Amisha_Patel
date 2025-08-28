import Skill from "./skills";
export default function Resume() {
  return (
    <section className="bg-primary/30 backdrop-blur-sm p-6 rounded-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
      {/* LEFT COLUMN */}
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Resume
        </h2>

        <h3 className="font-semibold mb-2">Education</h3>
        <div className="bg-gradient-to-r from-pink-400 to-yellow-400 p-4 rounded mb-4 text-xs">
          <h6 className="font-bold mb-1">2024–2026</h6>
          <p>Vellore Institute of Technology(VIT), Bhopal</p>
          <p>Masters of Computer Applications (MCA)</p>
          <p>8.0 CGPA till "II Semester"</p>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-4 rounded mb-4 text-xs">
          <h6 className="font-bold mb-1">2021–2024</h6>
          <p>The Bhopal School of Social Sciences, Bhopal</p>
          <p>Bachelor of Computer Applications (BCA)</p>
          <p>8.8 CGPA</p>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-yellow-400 p-4 rounded mb-4 text-xs">
          <h6 className="font-bold mb-1">2020–2021</h6>
          <p>Kendriya Vidyalaya Babina Cantt, Jhansi</p>
          <p>Computer Science (PCM, Computer)</p>
          <p>78.5%</p>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-4 rounded mb-4 text-xs">
          <h6 className="font-bold mb-1">2018–2019</h6>
          <p>Kendriya Vidyalaya Babina Cantt, Jhansi</p>
          <p>Higher Education</p>
          <p>82.2%</p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <h3 className="font-semibold mb-2">Experience</h3>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded mb-4 text-xs">
          <h6 className="font-bold mb-1">Web Designer</h6>
          <p>MurphTech Software Solution | IT Products & Services</p>
          <p>2 Oct 2024 – 31 Oct 2023</p>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-yellow-400 p-4 rounded mb-6 text-xs">
          <h6 className="font-bold mb-1">Graphic Designer</h6>
          <p>SHAS Foundation | NGO</p>
          <p>1 Jun 2022 – 31 Jul 2022</p>
        </div>

        <h3 className="font-semibold mb-2">Working Skills</h3>
        <div className="space-y-4 mb-6">
          <Skill name="HTML5" percent="95%" icon="bx bxl-html5 text-orange-600" />
          <Skill name="Tailwind" percent="85%" icon="bx bxl-css3 text-sky-400" />
          <Skill name="ReactJs" percent="75%" icon="bx bxl-react text-blue-500" />
          <Skill name="C++" percent="80%" icon="bx bxl-c-plus-plus text-blue-700" />
          <Skill name="Python" percent="85%" icon="bx bxl-python text-yellow-500" />
          <Skill name="SQL" percent="75%" icon="bx bx-data text-indigo-500" />
          <Skill name="DSA" percent="70%" icon="bx bx-code-block text-green-600" />
        </div>


        <h3 className="font-semibold mb-2">Knowledge</h3>
        <div className="flex flex-wrap gap-2">
          <Tag name="Front-end Development" />
          <Tag name="Data Analysis" />
          <Tag name="PostgreSql" />
          <Tag name="Docker" />
          <Tag name="Communication" />
          <Tag name="Time Management" />
          <Tag name="Flexibility" />
        </div>
      </div>
    </section>
  );
}


function Tag({ name }) {
  return (
    <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">{name}</span>
  );
}
