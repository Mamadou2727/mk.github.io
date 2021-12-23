/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "MK's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mamadou K. Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mamadou K. KEITA",
  logo_name: "Mamadou K.",
  nickname: "MKLD authentic",
  subTitle:
    "A computer Science Student and Full Stack developer with focus on web development, design, program management, and coordinate with stakeholders",
  resumeLink:
    "https://drive.google.com/file/d/1yTyWXjdmi3TFhV7XMkOb-sZ1HGUYIZZx/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/Mamadou2727",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Mamadou2727",
  // linkedin: "https://www.linkedin.com/in/mamadou-k-keita-503555168",
  // gmail: "mamadouk393@gmail.com",
  // facebook: "https://www.facebook.com/profile.php?id=100010946050885",

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mamadou-k-keita-503555168",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mamadouk393@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100010946050885",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React/Bootstrap",
        "⚡ Developing mobile applications front end using React Native",
        "⚡ Creating application backend in Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "#transparent",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Robotics & 3D Design",
      fileName: "RoboticsImg",
      skills: [
        "⚡ Developing 3D prototypes using computer-aided design and drafting (CADD) softwares ",
        "⚡ Experience of working with python, VEX, SnapCad, Arduino, and SketchUP projects",
        "⚡ Teaching basic robotics ",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos-arduino",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Sketchup",
          fontAwesomeClassname: "simple-icons:sketchup",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    /*   Reserve section
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  */

    {
      title: "Project management",
      fileName: "ManagementImg",
      skills: [
        "⚡ Developing and managing project budgets, schedules, and timelines",
        "⚡ Making timely decisions based on facts, circumstances, and needs",
        "⚡ Preparing and delivering presentations",
        "⚡ Determining the validity of project progress",
        "⚡ Documenting projects",
      ],
      softwareSkills: [
        {
          skillName: "Asana",
          fontAwesomeClassname: "simple-icons:asana",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "Black",
          },
        },
        {
          skillName: "Microsoft Office",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "African Leadership Academy",
      subtitle: "High School Diploma",
      logo_path: "ala_logo.png",
      alt_name: "ALA",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied Entrepreneurial leadership, African Studies Politics of Natural resources & Politics of Governance.",
        "⚡ In addition, I received in-depth training on entrepreneurship, business creation, and project management.",
      ],
      website_link: "https://www.africanleadershipacademy.org/",
    },

    {
      title: "Cambridge Assessment International Education",
      subtitle: "AS & A-LEVEL. in Computer Science & Mathematics",
      logo_path: "cambridge_logo.png",
      alt_name: "Cambridge",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic Computer Science subjects like  information representation, communication & Internet technologies, hardware, software development,relational database modelling, computational thinking, problem solving, computer-based solutions, algorithms and programming languages. ",
        "⚡ Apart from this, I have done courses on Data Science, Cloud native foundation and AI.",
        "⚡ I have studied Pure Mathematics and Probability & Statistics.",
      ],
      website_link: "https://www.cambridgeinternational.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Recognition Reward",
      subtitle: "- Pan-African Robotics Competition",
      logo_path: "parc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1v8dmmESrhXgLdVsvzFkmjZKoV8_YtwA8/view?usp=drivesdk",
      alt_name: "- PARC",
      color_code: "white",
    },
    {
      title: "STEM & Robotics",
      subtitle: "- EMMME",
      logo_path: "robotsmali_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1uxi6M46DM_eT1Z5_imojQdjH3ayf7l1-/view?usp=sharing",
      alt_name: "STEM",
      color_code: "#00000099",
    },
    {
      title: "Data Science & AI",
      subtitle: "- Bertelsmann Scholarship",
      logo_path: "udacity_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tbOPgMYWPsxJgeztYodlAQdb2InMDHgM/view",
      alt_name: "Udacity",
      color_code: "white",
    },
    {
      title: "Cloud Native Foundation",
      subtitle: "- SUSE Scholarship",
      logo_path: "udacity_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xYYjKVfeYJT2S9yRrqypTZGm8wEYxQG8/view",
      alt_name: "Udacity",
      color_code: "white",
    },
    {
      title: "Developing, Mentoring & Supporting Youth Leadership",
      subtitle: "- Yali Network",
      logo_path: "yali_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1H2di_t3mKbhsRw-oeMA1dDtQ5_AGTK42/view",
      alt_name: "Microsoft",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Developer, 3D Designer, and Project manager. I have also worked with some well established companies mostly as project Solution Devoloper. I love entrepreneurship and charity work, that is why I often create or take part in projects for needy communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Co-founder & Project Manager",
          company: "Totally Design Corp",
          company_url: "https://www.totallydesign.ml/",
          logo_path: "totally_logo.png",
          duration: "Nov 2018 - PRESENT",
          location: "Bamako, Mali",
          description:
            "Totally Design is a startup that aims to provide innovative architectural and industrial design solutions through the use of technological tools and systems. We are working on a project to create a residential building for a community of poor fishermen. The project is almost finished and we are waiting for investors to start the construction.",
          color: "#0879bf",
        },
        {
          title: "Robotics Coach",
          company: "Robots Mali",
          company_url: "https://robotsmali.org/",
          logo_path: "robotsmali_logo.png",
          duration: "July 2018 - PRESENT",
          location: "Bamako, Mali",
          description:
            "I teach programming and Design thinking. I also report progress of the team I mentor at the general coaches meeting",
          color: "#9b1578",
        },
        {
          title: "Web Developer",
          company: "Dessart Digital",
          company_url: "https://ci.linkedin.com/company/dessart-studios",
          logo_path: "dessart_logo.png",
          duration: "June 2021 - PRESENT",
          location: "Côte d'Ivoire",
          description:
            "Dessart Digital is a talent-driven digital company that brings together incredible creatives, brand experts, business strategists, web and tech makers  from different backgrounds to work  collaboratively in an ego-free environment that breeds newness and innovation.",
          color: "#fc1f20",
        },
        {
          title: "French Translator",
          company: "Anzisha Prize",
          company_url: "https://anzishaprize.org/",
          logo_path: "anzisha_logo.png",
          duration: "Feb 2021 - June 2021",
          location: "Johannesburg, South Africa",
          description:
            "The Anzisha Priza Program is a partnership between African Leadership Academy and the Mastercard Foundation that aims to fundamentally and significantly increase the number of very young entrepreneurs creating jobs in Africa.",
          color: "#fc1f20",
        },
        {
          title: "Writer",
          company: "Self-employed",
          company_url: "https://www.edilivre.com/g21-mamadou-k.html/",
          logo_path: "g21_logo.png",
          duration: "Feb 2019 - PRESENT",
          location: "Bamako, Mali",
          description:
            "I love writing fiction novels that are always based on my perception of certain topics. In February 2020, I published my first book entitled G21.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern",
          company: "African Leadership Academy",
          company_url: "https://www.delhivery.com/",
          logo_path: "ala_logo.png",
          duration: "Nov 2020 - March 2021",
          location: "Johannesburg, South Africa",
          description:
            "I worked with the IT team to help students who had problems with their email, laptop, printer credentials or internet connection.",
          color: "#ee3c26",
        },
        /*{
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "Massira",
          company_url: "https://massira.org/fr/about/",
          logo_path: "massira_logo.png",
          duration: "June 2019 - April 2020",
          location: "Accra, Ghana",
          description:
            "The African Community for Women across Sexual, Reproductive and Mental health.",
          color: "#4285F4",
        },
        /*{
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },*/
      ],
    },
  ],
};
//work liste

const work = {
  work: [
    {
      title: "Abana Africa",
      subtitle: "- Web Development",
      logo_path: "abana_mockup.png",
      alt_name: "- PARC",
      color_code: "transparent",
    },
    {
      title: "Totally Design Corp",
      subtitle: "- Web Development",
      logo_path: "totally_mockup.png",
      alt_name: "- Totally",
      color_code: "transparent",
    },
    {
      title: "Spirits Chocolat",
      subtitle: "- Web Development",
      logo_path: "chocolat_mockup.png",
      alt_name: "- Chocolat",
      color_code: "transparent",
    },
    {
      title: "Femme Rurale",
      subtitle: "- Solution Development",
      logo_path: "femmerurale.jpg",
      alt_name: "- PARC",
      color_code: "transparent",
    },
    {
      title: "Robotics Competition",
      subtitle: "- Mentoring",
      logo_path: "coachmk.jpg",
      alt_name: "- PARC",
      color_code: "transparent",
    },
    {
      title: "Starts'Robot",
      subtitle: "- Mentoring",
      logo_path: "starsrobot.JPG",
      alt_name: "- robot",
      color_code: "transparent",
    },
    {
      title: "Tech's Robot",
      subtitle: "- Mentoring",
      logo_path: "techrobot.JPG",
      alt_name: "- robot",
      color_code: "transparent",
    },
    {
      title: "2018 Robotics Summer Camp Robot",
      subtitle: "- Mentoring",
      logo_path: "siratikela.JPG",
      alt_name: "- robot",
      color_code: "transparent",
    },
    {
      title: "Tech's Robot",
      subtitle: "- Mentoring",
      logo_path: "robot_tech.JPG",
      alt_name: "- Robot",
      color_code: "transparent",
    },
    {
      title: "Robotics Summer Camp",
      subtitle: "- Mentoring",
      logo_path: "summer_camp.JPG",
      alt_name: "- Camp",
      color_code: "transparent",
    },
    {
      title: "Mali Start-Up Contest",
      subtitle: "- Contest participant",
      logo_path: "malistartup.jpg",
      alt_name: "- Startup",
      color_code: "transparent",
    },
    {
      title: "MK-CHARITY(coming soon...)",
      subtitle: "- Founder",
      logo_path: "logomkld.gif",
      alt_name: "- MK-CHARITY",
      color_code: "transparent",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects use a wide variety of the latest technological tools. Whether it's in full stack development, robotics, or management, my projects are done with happiness 🤗, love ♥️, and 100% commitment 👌.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MK_image.png",
    description:
      "You can contact me anytime for your needs. I will be more than happy to help you with bootstrap, React, Wordpress and Opensource projects. You can also contact me to get to know me and discuss ideas. ✔️♾️",
  },
  /* blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: "Kalaban Coro, Bamako, Mali",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/jZSv72Fd8h12SGk36",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+223 91596249",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  work,
};
