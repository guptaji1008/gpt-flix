import { FaLinkedin } from "react-icons/fa";

const About = ({ onCancel }) => {
  const handleCloseArea = (e) => {
    if (e.target.id === "modal-about") {
      onCancel();
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-50">
        <div
          onClick={handleCloseArea}
          id="modal-about"
          className="size-full flex items-center justify-center"
        >
          <AboutInformation />
        </div>
      </div>
    </>
  );
};

export default About;

const AboutInformation = () => {
  return (
    <div className="lg:w-3/5 md:3/5 sm:w-4/5 w-4/5 md:w-2/3 max-h-[70%] p-5 rounded-md bg-gray-800 overflow-auto scrollbar-none space-y-3">
      <div>
        <p className="text-white text-3xl font-bold">Aman Kumar Gupta</p>
        <p className="text-gray-300 text-xl">
          Certified Web Developer | MERN stack specialist
        </p>
      </div>
      <div>
        <p className="text-white text-2xl font-bold">Summary:</p>
        <p className="text-gray-300 text-lg">
          Dynamic and certified Web Developer specializing in the <strong>MERN (MongoDB,
          Express.js, React.js, Node.js)</strong> stack. Eight months of hands-on
          training as a Full Stack Web Developer at Almabetter, gaining
          invaluable expertise in building scalable and robust web applications.
        </p>
      </div>
      <div>
        <p className="text-white text-2xl font-bold">Skills:</p>
        <p className="text-gray-300 text-lg">
          Proficient in MongoDB, Express.js, React.js, and Node.js. Strong
          command over front-end technologies, particularly <strong>JavaScript, React.js, Redux-Toolkit, Redux-Query, Bootstrap and Tailwind CSS</strong>. Proven ability to develop user-centric, responsive web
          interfaces while ensuring seamless functionality across platforms.
        </p>
      </div>
      <div>
        <p className="text-white text-2xl font-bold">Experience:</p>
        <div className="text-gray-300">
          <p className="text-lg">
            Full Stack Web Developer | Almabetter | 04-2023 / 12-2023
          </p>
          <ul className="list-decimal pl-5">
            <li>
              Developed and maintained web applications using the MERN stack.
            </li>
            <li>
              Collaborated with teams to optimize application performance and
              user experience.
            </li>
            <li>
              <strong>Actively upgraded front-end skills, focusing on JavaScript and
              React.js for enhanced proficiency and innovation</strong>.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white text-2xl font-bold">Education:</p>
        <p className="text-gray-300 text-lg">IMS Engineering College | Mechanical Engineer | 2018-2022</p>
      </div>
      <div className="flex justify-end">
        <a href="https://www.linkedin.com/in/amangupta27121998" target="_blank"><FaLinkedin className="text-5xl text-white" /></a>
      </div>
    </div>
  );
};
