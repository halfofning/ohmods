$(document).ready(function() {
    displayYear1Modules();
    displayYear2Modules();
    displayYear3Modules();
});

// All backgrounds
var backgrounds = [
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  },
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  },
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  },
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  },
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  },
  {
    image: "images/orange.jpg",
    color: "orange"
  },
  {
    image: "images/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/pink.jpg",
    color: "pink"
  },
  {
    image: "images/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/lightgreen.jpg",
    color: "lightgreen"
  }
]

// All modules and their information
// YEAR 1 CORE MODULES
var year1Modules = [
  {
    name: "Fundamentals of IT Professionals I",
    description: "A broad introduction to the field of IT by exploring the roles, professional practice, ethical expectations and career development paths of IT professionals.",
    image: "images/fp1.svg",
    tags: ["personaldev"]
  },
  {
    name: "Computing Mathematics",
    description: "This module introduces the basic concepts of relations and functions, matrices, statistical methods and relevant applications.",
    image: "images/cm.svg",
    tags: [""]
  },
  {
    name: "Enterprise Information Systems",
    description: "This module introduces students to the different components that build up an enterprise information system.",
    image: "images/eis.svg",
    tags: ["businessIT"]
  },
  {
    name: "Cyber Security Fundamentals",
    description: "This module provides an overview of the domains of cyber security to help develop an understanding of its importance in today’s digital world.",
    image: "images/csf.svg",
    tags: ["infoSecurity"]
  },
  {
    name: "Programming I",
    description: "This module introduces the fundamentals of programming and how to develop programs using appropriate problem solving techniques in a modular style.",
    image: "images/prg1.svg",
    tags: [""]
  },
  {
    name: "Databases",
    description: "This module introduces students to the underlying concepts of database systems and how to model and design database systems that reflect business requirements.",
    image: "images/db.svg",
    tags: [""]
  },
  {
    name: "Front End Development",
    description: "This module teaches the fundamental skills required to develop responsive websites that are optimised for mobile and desktop viewing.",
    image: "images/fed.svg",
    tags: [""]
  },
  {
    name: "Operating Systems and Networking Fundamentals",
    description: "This module focuses on the fundamentals and principles of operating systems and explains what they do.",
    image: "images/osfnf.svg",
    tags: [""]
  },
  {
    name: "Portfolio I",
    description: "This module provides the opportunity to apply the knowledge and skills gained from the various modules in the course to date, and explore topics in IT that they have a personal interest.",
    image: "images/p1.svg",
    tags: [""]
  },
  {
    name: "Programming II",
    description: "This module provides opportunities for the students to develop medium-scale applications based on the Object-Oriented (OO) approach.",
    image: "images/prg2.svg",
    tags: [""]
  },
];

// YEAR 2 CORE MODULES
var year2Modules = [
  {
    name: "Fundamentals of IT Professionals II",
    description: "This module gives a course-based experience in which students can engage with the local community and industry.",
    image: "images/fp2.svg",
    tags: [""]
  },
  {
    name: "Object Oriented Analysis and Design",
    description: "This module leverages the skills acquired in PRG2 to introduce software design, so that students experience the full cycle of software development.",
    image: "images/ooad.svg",
    tags: [""]
  },
  {
    name: "Web Application Development",
    description: "This module provides students with the knowledge and skills needed to develop web applications and web application protocol interface (API).",
    image: "images/web.svg",
    tags: [""]
  },
  {
    name: "Fundamentals of IT Professionals III",
    description: "This module provides a stepping stone to the students in their IT career. They are given an insight into the infocomm industries.",
    image: "images/fp3.svg",
    tags: [""]
  },
  {
    name: "Full Stack Development",
    description: "This module aims to provide opportunities for students to be part of a software development team working on both back-end and front-end technologies.",
    image: "images/fsd.svg",
    tags: [""]
  },
  {
    name: "Portfolio II",
    description: "This module builds on the previous module Portfolio I. Students may choose to undertake a real life IT project, a competition-based project or a research and development project.",
    image: "images/p2.svg",
    tags: [""]
  },
  {
    name: "User Experience",
    description: "This module focuses on the principles and techniques for designing good user experience in software applications and other products such as ATMs, kiosks, etc.",
    image: "images/ux.svg",
    tags: [""]
  },
]

// YEAR 2 AND YEAR 3 ELECTIVES
var year3Modules = [
  // AREA OF INTEREST: BUSINESS AND DATA ANALYTICS
  {
    name: "Big Data",
    description: "",
    image: "bd.png",
    tags: [""]
  },
  {
    name: "Data Visualisation",
    description: "",
    image: "dv.png",
    tags: [""]
  },
  {
    name: "Descriptive Analysis",
    description: "This module provides students with the knowledge and skills needed to develop web applications and web application protocol interface (API).",
    image: "da.png",
    tags: [""]
  },
  {
    name: "Predictive Analysis",
    description: "",
    image: "pa.png",
    tags: [""]
  },
  {
    name: "Quantitative Analysis",
    description: "",
    image: "qa.png",
    tags: [""]
  },

  // AREA OF INTEREST: CLOUD COMPUTING
  {
    name: "Cloud Architecture and Technologies",
    description: "",
    image: "cat.png",
    tags: [""]
  },
  {
    name: "Designing and Managing Cloud Databases",
    description: "",
    image: "dmcd.png",
    tags: [""]
  },
  {
    name: "Developing Cloud Applications",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Virtualisation and Data Centre Management",
    description: "",
    image: ".png",
    tags: [""]
  },

  // AREA OF INTEREST: ENTERPRISE SOLUTIONING
  {
    name: "Business Process Modelling and Development",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Customer Experience Management",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Enterprise Business Solutions",
    description: "",
    image: ".png",
    tags: [""]
  },

  // AREA OF INTEREST: GAME PROGRAMMING
  {
    name: "Artificial Intelligence for Games",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Game Interactivity",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Game Production",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Gameplay Programming",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Maths for Games",
    description: "",
    image: ".png",
    tags: [""]
  },

  // AREA OF INTEREST: INFOCOMM SALES AND MARKETING
  {
    name: "Customer Decision Making and Negotiation Skills",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Infocomm Sales and Marketing Strategies",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Infocomm Sales Life Cycle Management",
    description: "",
    image: ".png",
    tags: [""]
  },

  // AREA OF INTEREST: MOBILE BUSINESS APPLICATION
  {
    name: "Mobile Applications Development",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Mobile Applications Development II",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Mobile Device Security and Forensics",
    description: "",
    image: ".png",
    tags: [""]
  },

  // AREA OF INTEREST: SOLUTION ARCHITECT
  {
    name: "Advanced Object-Oriented Analysis and Design",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Data Structures and Algorithms",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "eCommerce Applications Development",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Secure Software Development",
    description: "",
    image: ".png",
    tags: [""]
  },

  // GENERAL ELECTIVES
  {
    name: "Capstone Project",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Emerging Trends in IT",
    description: "",
    image: ".png",
    tags: [""]
  },
  {
    name: "Technopreneurship",
    description: "",
    image: ".png",
    tags: [""]
  }
]

// Returns the modules that contain the relevant tags.
function getModules(tags) {

  // Store the modules that survived the purge.
  var filteredModules = [];

  // Purge all the modules with the wrong tags.
  for (var i = 0; i < originalModules.length; i++) {
    var module = originalModules[i];
    var moduleTags = module.tags;

    // Check whether the filter tags are a subset of module tags.
    var isSubset = true;
    for (var j = 0; j < tags.length; j++) {
      var filterTag = tags[j];
      if (!moduleTags.includes(filterTag)) {
        isSubset = false;
        break;
      }
    }

    // If they are a subset, that means they survive the purge.
    if (isSubset) {
      filteredModules.push(module);
    }
  }

  return filteredModules;
}

// Returns the module information that contain the relevant tags.
function displayYear1Modules() {
    for(var i = 0; i < year1Modules.length; i++) {
        var img = new Image();
        img.src = backgrounds[i].image;
        img.setAttribute("class", "module-bg");
        document.getElementById('year1-content').appendChild(img);

        var img1 = new Image();
        img1.src = year1Modules[i].image;
        img1.setAttribute("class", "module-img");
        document.getElementById('year1-content').appendChild(img1);
    }
}

function displayYear2Modules() {
  for(var i = 0; i < year2Modules.length; i++) {
      var img = new Image();
      img.src = backgrounds[i].image;
      img.setAttribute("class", "module-bg");
      document.getElementById('year2-content').appendChild(img);

      var img1 = new Image();
      img1.src = year2Modules[i].image;
      img1.setAttribute("class", "module-img");
      document.getElementById('year2-content').appendChild(img1);
  }
}

function displayYear3Modules() {
  for(var i = 0; i < year3Modules.length; i++) {
      var img = new Image();
      img.src = backgrounds[i].image;
      img.setAttribute("class", "module-bg");
      document.getElementById('year3-content').appendChild(img);
  }
}
