import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function CreatePdf() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    experience: [{ company: "", years: "", field: "" }], // Ensure initial state is an array
    skills: [""],
    education: [
      { college: "", startYear: "", endYear: "", gpa: "", course: "" },
    ], // Ensure initial state is an array
    projects: [
      { name: "", about: "", time: "", skillsUsed: [""] }, // Ensure initial state is an array
    ],
  });

  useEffect(() => {
    if (location.state?.formData) {
      setFormData({
        ...location.state.formData,
        experience: Array.isArray(location.state.formData.experience)
          ? location.state.formData.experience
          : [{ company: "", years: "", field: "" }],
        education: Array.isArray(location.state.formData.education)
          ? location.state.formData.education
          : [{ college: "", year: "", gpa: "" }],
        projects: Array.isArray(location.state.formData.projects)
          ? location.state.formData.projects
          : [{ name: "", about: "", time: "", skillsUsed: [""] }],
      });
    }
  }, [location.state?.formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { college: "", startYear: "", endYear: "", gpa: "" }, // Add startYear and endYear fields
      ],
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    setFormData({ ...formData, experience: updatedExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { company: "", years: "", field: "" },
      ],
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleProjectSkillChange = (projectIndex, skillIndex, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projectIndex].skillsUsed[skillIndex] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { name: "", about: "", time: "", skillsUsed: [""] },
      ],
    });
  };

  const addProjectSkill = (projectIndex) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projectIndex].skillsUsed.push("");
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleNext = () => {
    navigate("/view-pdf", { state: { formData } });
  };

  // Ensure education, experience, and projects are always arrays
  const educationEntries = Array.isArray(formData.education)
    ? formData.education
    : [{ college: "", year: "", gpa: "" }];
  const experienceEntries = Array.isArray(formData.experience)
    ? formData.experience
    : [{ company: "", years: "", field: "" }];
  const projectEntries = Array.isArray(formData.projects)
    ? formData.projects
    : [{ name: "", about: "", time: "", skillsUsed: [""] }];

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 my-7">
      <h1 className="font-bold text-3xl text-center text-[#4A90E2] mb-6">
        Create Your Resume
      </h1>
      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="+1234567890"
          />
        </div>

        {/* About Yourself */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            About:
          </label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write about yourself"
          />
        </div>

        {/* Education Section */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Education:
          </label>
          {educationEntries.map((edu, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded mb-4"
            >
              <input
                type="text"
                placeholder="College Name"
                value={edu.college}
                onChange={(e) =>
                  handleEducationChange(index, "college", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <input
                type="text"
                placeholder="Course Name"
                value={edu.course}
                onChange={(e) =>
                  handleEducationChange(index, "course", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    From
                  </label>
                  <input
                    type="number"
                    placeholder="Start Year"
                    value={edu.startYear}
                    onChange={(e) =>
                      handleEducationChange(index, "startYear", e.target.value)
                    }
                    className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    To
                  </label>
                  <input
                    type="number"
                    placeholder="End Year"
                    value={edu.endYear}
                    onChange={(e) =>
                      handleEducationChange(index, "endYear", e.target.value)
                    }
                    className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="GPA"
                value={edu.gpa}
                onChange={(e) =>
                  handleEducationChange(index, "gpa", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addEducation}
            className="mt-2 bg-gray-200 text-blue-600 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 transition"
          >
            Add Education
          </button>
        </div>

        {/* Experience Section */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Experiences:
          </label>
          {experienceEntries.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded mb-4"
            >
              <input
                type="text"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) =>
                  handleExperienceChange(index, "company", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <input
                type="text"
                placeholder="Years"
                value={exp.years}
                onChange={(e) =>
                  handleExperienceChange(index, "years", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <input
                type="text"
                placeholder="Field"
                value={exp.field}
                onChange={(e) =>
                  handleExperienceChange(index, "field", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="mt-2 bg-gray-200 text-blue-600 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 transition"
          >
            Add Experience
          </button>
        </div>

        {/* Projects Section */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Projects:
          </label>
          {projectEntries.map((proj, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded mb-4"
            >
              <input
                type="text"
                placeholder="Project Name"
                value={proj.name}
                onChange={(e) =>
                  handleProjectChange(index, "name", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <textarea
                placeholder="About the Project"
                value={proj.about}
                onChange={(e) =>
                  handleProjectChange(index, "about", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <input
                type="text"
                placeholder="Time to Make"
                value={proj.time}
                onChange={(e) =>
                  handleProjectChange(index, "time", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Skills Used:
                </label>
                {proj.skillsUsed.map((skill, skillIndex) => (
                  <input
                    key={skillIndex}
                    type="text"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) =>
                      handleProjectSkillChange(
                        index,
                        skillIndex,
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addProjectSkill(index)}
                  className="bg-gray-200 text-blue-600 py-1 px-2 rounded-md shadow-sm hover:bg-gray-300 transition"
                >
                  Add Skill
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProject}
            className="mt-2 bg-gray-200 text-blue-600 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 transition"
          >
            Add Project
          </button>
        </div>

        {/* Skills Section */}
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Skills:
          </label>
          {formData.skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="bg-gray-200 text-blue-600 py-1 px-2 rounded-md shadow-sm hover:bg-gray-300 transition"
          >
            Add Skill
          </button>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#4A90E2] text-white py-2 px-6 rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
