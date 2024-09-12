/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="contact-page-container p-6 md:p-12 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#4A90E2]">
        Contact the Creator
      </h1>

      <div className="rounded-lg p-8 w-full max-w-3xl">
        <p className="mb-8 text-lg text-gray-700">
          Hello! I’m Sayan Senapati, currently a student and an aspiring Full
          Stack Web Developer. CoreResume is one of my projects aimed at making
          resume creation faster and easier for everyone. I’m passionate about
          technology and love building tools that can help others. If you’d like
          to connect, ask questions, or provide feedback, feel free to reach out
          through any of the channels below!
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-[#4A90E2]">
          Connect with Me
        </h2>
        <ul className="list-none mb-8 space-y-4">
          <li className="flex items-center">
            <span className="font-bold text-gray-800">Portfolio:</span>
            <a
              href="https://sayansenapati-1.web.app"
              className="ml-2 text-[#4A90E2] hover:underline"
            >
              sayansenapati-1.web.app
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800">Email:</span>
            <a
              href="mailto:sayansenapati2544@gmail.com"
              className="ml-2 text-[#4A90E2] hover:underline"
            >
              sayansenapati2544@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/sayan-senapati-430833211/"
              className="ml-2 text-[#4A90E2] hover:underline"
            >
              linkedin.com/in/sayan-senapati-430833211
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800">GitHub:</span>
            <a
              href="https://github.com/senapati484"
              className="ml-2 text-[#4A90E2] hover:underline"
            >
              github.com/senapati484
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800">Twitter:</span>
            <a
              href="https://x.com/SayanSenapati11"
              className="ml-2 text-[#4A90E2] hover:underline"
            >
              twitter.com/SayanSenapati11
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6 text-[#4A90E2]">
          About CoreResume
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          CoreResume is designed to simplify the resume-building process. As a
          student, I’ve experienced the challenges of creating a professional
          resume that stands out. This project is my way of helping others
          navigate that process with ease, providing a tool that focuses on
          minimalism and usability. Whether you're just starting out or looking
          to update your current resume, CoreResume is here to help you put your
          best foot forward.
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-[#4A90E2]">
          Stay in Touch
        </h2>
        <p className="text-lg text-gray-700">
          I’m always open to new opportunities, collaborations, or simply making
          new connections. Don't hesitate to drop me a message or follow me on
          my social media handles. Your feedback and support are greatly
          appreciated!
        </p>

        <p className="mt-8 text-lg text-gray-700">
          Let’s make resume creation as straightforward as it should be. Thank
          you for visiting CoreResume, and I hope you find it helpful!
        </p>
      </div>
    </div>
  );
};

export default Contact;
