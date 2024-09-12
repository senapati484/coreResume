/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div className="about-page-container p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4A90E2]">
        About CoreResume
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2]">
        Create Your Perfect Resume Effortlessly
      </h2>
      <p className="mb-6 text-gray-700 max-w-3xl text-center">
        At CoreResume, we believe in simplicity and efficiency. Crafting a
        professional resume shouldn't be a hassle—it should be a smooth and
        straightforward process that helps you stand out to recruiters without
        unnecessary distractions. Our platform empowers you to generate a clean,
        minimalistic resume simply by filling in the details that matter most to
        you.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2]">
        How It Works
      </h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700 max-w-3xl">
        <li>
          <strong>Enter Your Details:</strong> Start by filling in your
          information in our easy-to-use form. Each section is designed to
          capture key aspects of your professional profile, including your
          personal information, education, work experience, skills, and
          projects.
        </li>
        <li>
          <strong>Choose What to Include:</strong> Don’t worry about leaving
          fields empty! If you don't have details for a particular section or if
          it's not relevant to your application, just leave it blank. Our smart
          form will automatically hide any sections without content, ensuring
          your resume remains neat and uncluttered.
        </li>
        <li>
          <strong>Minimalism is Key:</strong> Our resumes are designed to be as
          minimalistic as possible. By focusing solely on the content without
          extra styling or distractions, your resume will highlight your skills
          and achievements directly, capturing the attention of recruiters who
          appreciate clarity and precision.
        </li>
        <li>
          <strong>Generate Your Resume:</strong> Once you've filled in the
          desired fields, click "Generate Resume" to see a preview of your
          document. You can review, make changes, and adjust the content as
          needed. When you're satisfied, download your resume instantly.
        </li>
        <li>
          <strong>Edit with Ease:</strong> Need to update your resume or tweak
          something? Simply go back to the form, make your changes, and
          regenerate your resume. It's that simple!
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2]">
        Why Minimalism Matters
      </h2>
      <p className="mb-6 text-gray-700 max-w-3xl text-center">
        Recruiters spend only a few seconds on each resume. A clean, concise
        layout with clearly displayed information can make all the difference.
        At CoreResume, we strip away the unnecessary elements, allowing your
        qualifications to speak for themselves. By presenting your data without
        extra embellishments, you ensure that the focus remains on what you
        bring to the table.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2]">
        Features of CoreResume
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 max-w-3xl">
        <li>
          <strong>Customizable Sections:</strong> Include only the sections that
          matter—your resume should reflect you, not a template.
        </li>
        <li>
          <strong>Dynamic Preview:</strong> See changes in real-time as you fill
          out the form, making it easy to adjust and perfect your resume.
        </li>
        <li>
          <strong>Effortless Updates:</strong> Revisit your saved data and
          update your resume as your career progresses.
        </li>
        <li>
          <strong>Professional and Uncluttered:</strong> Our resumes are
          designed to meet professional standards without the fuss of
          complicated layouts or distracting visuals.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2]">
        Get Started
      </h2>
      <p className="text-gray-700 max-w-3xl text-center">
        Ready to create a resume that highlights your strengths without the
        fluff? Start by entering your details into the form, and watch as
        CoreResume builds a professional, recruiter-friendly document tailored
        to you. Whether you're a seasoned professional or just starting your
        career, CoreResume provides the tools you need to present your best
        self.
      </p>
      <p className="mt-4 text-gray-700 max-w-3xl text-center">
        Remember, the best resumes are those that are clear, concise, and
        directly to the point. Let CoreResume help you craft a document that
        speaks volumes with minimal effort.
      </p>
    </div>
  );
};

export default About;
