import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import Extra from "./Extra";

const resume = {
  profile: {
    name: "Jane Smith",
    subtitle: "Junior Architect",
    email: "jane@novoresume.com",
    phone: "+91 12345 06789",
    linkdin: "linkedin.com/in/jane.smith",
    address: "Copenhagen, Denmark",
    description:
      "A strong believer in the ability of the architecture and research combined with design thinking for strengthening our societies and having a positive effect on the world. Only together can we build a better future, therefore my communication and team- working skills",
  },
  experience: [
    {
      time: 2012,
      company: "Chaudfountaine Architects",
      role: "Intern Architect",
      description:
        "• Developed and executed online, social media and print marketing strategies for new projects.• Participated in all phases of the design and construction processes on 6 major projects nationally and internationally• Produced drawings and layouts and assisted the clients throughout the projects. Clients had a satisfaction rate of over 95%• Created 3D models, renderings and video animations",
    },
  ],
  education: [
    {
      institute: "Bartlett School of Architecture (UCL)",
      time: "08/2019-96/2021",
      marks: '9/10',
      degree: "MSc Space Syntax: Architecture and Cities",
      description:
        "UCL Architecture Department Excellence Award Winner. Spatial Dynamics and Computation, Architectural Phenomena, Buildings, Organizations and Networks, Design as a Knowledge-Based Process",
    },
  ],
  skills: [
    {
      technical: [
        {
          name: "Graphics",
          description:
            "Hand Drafting, Sketching, Autodesk AutoCAD, ArgGIS, Adobe Creative Cloud Suite",
        },
        {
          name: "Bim & 3D Modeling",
          description: "Sketchup Pro, SU Podium, Autodesk Revit",
        },
        {
          name: "Platforms",
          description: "Sketchup Pro, SU Podium, Autodesk Revit",
        },
        {
          name: "Other",
          description:
            "Windows & OSX Operating Systems, Microsoft Office, Google Drive/Docs",
        },
      ],
    },
    {
      soft: [
        "Presentation & Public Speaking",
        "Active Listening",
        "Perseverance",
        "Teamwork",
        "Written & Oral Communication",
        "Creativity & Problem Solving",
      ],
    },
  ],
  projects: [
    {
      name: "NOTBLOXO Affordable Housing Project: Assembling Sustainable Communities with Insulating Concrete Forms (06/2020)",
      description:
        "The jury called this design 'handsome and sophisticated and commended it on its demonstration of the ease of its construction. The project also demonstrated many options for the use of vinyl",
    },
    {
      name: "The S House: A Passive House (02/2020)",
      description:
        "Hand Drafting, Sketching, Autodesk AutoCAD, ArgGIS, Adobe Creative Cloud Suite",
    },
  ],
  other: {
    languages: ["English", "Danish", "German"],
    hobbies: [
      "Artificial Intelligence",
      "Virtual Reality",
      "Travelling",
      "Painting",
      "Chess",
      "Trail Running",
    ],
  },
};

const Resume = () => {
  return (
    <>
      <Profile profile={resume.profile} />
      <hr />
      <Education education={resume.education} />
      <hr />
      <Experience experience={resume.experience} />
      <hr />
      <Projects projects={resume.projects} />
      <hr />
      <Skills skills={resume.skills} />
      <hr />
      <Extra extra={resume.other} />
    </>
  );
};

export default Resume;
