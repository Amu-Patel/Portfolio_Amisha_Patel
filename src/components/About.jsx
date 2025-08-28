export default function About() {
  return (
    <section id="about" className="py-12 px-4 overflow-x-hidden">
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        About
        </h2>
        <p className="text-base mb-4">
          I am a Front-end Developer and Data Analyst from Rewa, Madhya Pradesh. I specialize in turning complex problems into
          simple, beautiful, and intuitive designs. With a passion for both coding and data analysis, I excel in creating engaging
          user experiences and extracting valuable insights from vast amounts of data. My goal is to leverage technology to make a
          positive impact on people's lives.
        </p>
        <p className="text-base mb-8">
          In addition, I am committed to becoming a successful expert in the field of information technology. I aim to channelize
          my technical knowledge and skills to ensure both personal and professional growth. By continuously learning and adapting
          to new technologies, I strive to contribute to the prosperity of the organization I work for, while making meaningful
          contributions to the IT industry as a whole.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        What I have Done!
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-300 flex gap-4 p-4 rounded-lg" >
            <img src="./icons/front-end-developer.png" alt="Front-end Developer" className="w-16 h-16" />
            <div>
              <h4 className="text-lg font-bold mb-1">Front-end Developer</h4>
              <p className="text-sm">
                As a front-end Developer, I have done an internship at Murphtech Software Solution Company. This helped me face real
                problems and improve my skills like HTML and CSS.
              </p>
            </div>
          </div>

          <div className="bg-pink-300 flex gap-4 p-4 rounded-lg" >
            <img src="./icons/analyst.png" alt="Data Analyst" className="w-16 h-16" />
            <div>
              <h4 className="text-lg font-bold mb-1">Data Analyst</h4>
              <p className="text-sm">
                As a fresher, I don't have direct experience in the Data Analyst field, but I have basic knowledge and skills used
                in this field like Python and SQL.
              </p>
            </div>
          </div>

          <div className="bg-purple-300 flex gap-4 p-4 rounded-lg" >
            <img src="./icons/ruler.png" alt="Graphic Designer" className="w-16 h-16" />
            <div>
              <h4 className="text-lg font-bold mb-1">Graphic Designer</h4>
              <p className="text-sm">
                In the field of Graphic Design, I did an internship at Shas Foundation during COVID-19, which helped me improve my
                skills in design.
              </p>
            </div>
          </div>

          <div className="bg-yellow-300 flex gap-4 p-4 rounded-lg">
            <img src="./icons/globalization.png" alt="Digital Marketing" className="w-16 h-16" />
            <div>
              <h4 className="text-lg font-bold mb-1">Digital Marketing</h4>
              <p className="text-sm">
                I have done Digital Marketing during the COVID-19 pandemic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
