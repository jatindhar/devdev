/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jatin Dhar",
  title: "Hey, it's Jatindra",
  subTitle: emoji(
    "I'm a Software Engineer with two YOE !🚀Experience in developing, testing and maintaining software applications. My skills? Java, Spring Framework, Microservices, PostgresSQL, JPA and list goes on.... Let's rock! 💻✨"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IvWa3B-Qy3OAzaR5lBQBl70AZAOuyR7i/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jatindhar",
  linkedin: "https://www.linkedin.com/in/jatin-dhar/",
  gmail: "jatindhar350@gmail.com",
  instagram: "https://www.instagram.com/jatin.dhar/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " I have cultivated a strong skill set in software development, API integration, and  providing robust support for software applications.",
  skills: [
    emoji(
      "⚡ Worked closely with clients to gather requirements, developed and maintained Java-based web applications utilizing Spring Boot framework for efficient backend functionality."
    ),
    emoji("⚡ Designed and implemented RESTful APIs to facilitate seamless communication between frontend and backend systems"),
    emoji(
      "⚡ Hands on experience in ORM Tools Hibernate & JPA"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-globe"
    },


    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maulana Abul Kalam Azad University of Technology",
      logo: require("./assets/images/college.png"),
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "June 2017 - June 2021",
     
      descBullets: [
        "CGPA 8.0",
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Spring Framework",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Microservices",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/Capgemini-Emblem.png"),
      date: "October 2021 – October 2023",
      desc: "With 2 years’ experience at Capgemini as Software Engineer, I have cultivated a strong skill set in software development, testing, quality assurance, and providing robust support for software applications. Having handson experience on Java, Spring Boot, Hibernate and Postgres SQL",
      descBullets: [
        "Worked closely with clients to gather requirements, provide technical support, and deliver timely solutions",
        "Develop and maintain software solutions as per project requirements."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Check out my certification stash !",

  achievementsCards: [
    {
      title: "Google Associate Cloud Engineer",
      subtitle:
        "Engineered and deploy secure and robust applications on Google Cloud Platform",
      image: require("./assets/images/googlecloud.png"),
      imageAlt: "Associate Cloud Engineer",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credential.net/7663d991-720b-4e52-a518-64c989c60869"
        }
      ]
    },
    {
      title: "Microsoft certified azure fundamentals",
      subtitle:
        "Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.",
      image: require("./assets/images/azure.png"),
      imageAlt: "Azure fundamental",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.microsoft.com/en-us/users/jatindradhar-9923/credentials/1ca7a705e8c5d92b?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },

    {
      title: "Responsive Web Design by FreeCodeCamp",
      subtitle: "Made web application that respond to different screen sizes",
      image: require("./assets/images/freecodecamp.png"),
      imageAlt: "Responsive Web Design",
      footerLink: [

        {
          name: "View Certificate",
          url: "https://www.freecodecamp.org/certification/jatindra_dhar/responsive-web-design"
        }
      ]
    },
    {
      title: "Java Programming Masterclass by Udemy",
      subtitle: " From Basics to Advanced Java Programming using framework",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Responsive Web Design",
      footerLink: [

        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1rml3jeiKDz2FyylrtIZhrTU17Cp0NrXi/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+91-863 864 9267",
  email_address: "jatindhar350@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
