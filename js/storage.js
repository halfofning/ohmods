$(document).ready(function() {
    displayAllModules();
    flipCards();
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
  }
]

// All modules and their information
var originalModules = [
  // YEAR 1 CORE MODULES
  {
    name: "Fundamentals of IT Professionals I",
    description: "A broad introduction to the field of IT by exploring the roles, professional practice, ethical expectations and career development paths of IT professionals.",
    image: "images/year1/fp1.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Computing Mathematics",
    description: "This module introduces the basic concepts of relations and functions, matrices, statistical methods and relevant applications.",
    image: "images/year1/cm.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Enterprise Information Systems",
    description: "This module introduces students to the different components that build up an enterprise information system.",
    image: "images/year1/eis.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Cyber Security Fundamentals",
    description: "This module provides an overview of the domains of cyber security to help develop an understanding of its importance in today’s digital world.",
    image: "images/year1/csf.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Programming I",
    description: "This module introduces the fundamentals of programming and how to develop programs using appropriate problem solving techniques in a modular style.",
    image: "images/year1/prg1.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Databases",
    description: "This module introduces students to the underlying concepts of database systems and how to model and design database systems that reflect business requirements.",
    image: "images/year1/db.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Front End Development",
    description: "This module teaches the fundamental skills required to develop responsive websites that are optimised for mobile and desktop viewing.",
    image: "images/year1/fed.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Operating Systems and Networking Fundamentals",
    description: "This module focuses on the fundamentals and principles of operating systems and explains what they do.",
    image: "images/year1/osfnf.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Portfolio I",
    description: "This module provides the opportunity to apply the knowledge and skills gained from the various modules in the course to date, and explore topics in IT that they have a personal interest.",
    image: "images/year1/p1.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Programming II",
    description: "This module provides opportunities for the students to develop medium-scale applications based on the Object-Oriented (OO) approach.",
    image: "images/year1/prg2.svg",
    tags: [""],
    year: "1"
  },

  // YEAR 2 CORE MODULES
  {
    name: "Fundamentals of IT Professionals II",
    description: "This module gives a course-based experience in which students can engage with the local community and industry.",
    image: "images/year2/fp2.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Object Oriented Analysis and Design",
    description: "This module leverages the skills acquired in PRG2 to introduce software design, so that students experience the full cycle of software development.",
    image: "images/year2/ooad.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Web Application Development",
    description: "This module provides students with the knowledge and skills needed to develop web applications and web application protocol interface (API).",
    image: "images/year2/web.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Fundamentals of IT Professionals III",
    description: "This module provides a stepping stone to the students in their IT career. They are given an insight into the infocomm industries.",
    image: "images/year2/fp3.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Full Stack Development",
    description: "This module aims to provide opportunities for students to be part of a software development team working on both back-end and front-end technologies.",
    image: "images/year2/fsd.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Portfolio II",
    description: "This module builds on the previous module Portfolio I. Students may choose to undertake a real life IT project, a competition-based project or a research and development project.",
    image: "images/year2/p2.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "User Experience",
    description: "This module focuses on the principles and techniques for designing good user experience in software applications and other products such as ATMs, kiosks, etc.",
    image: "images/year2/ux.svg",
    tags: [""],
    year: "2"
  },

  // YEAR 2 AND YEAR 3 ELECTIVES
  // AREA OF INTEREST: BUSINESS AND DATA ANALYTICS
  {
    name: "Big Data",
    description: "",
    image: "images/year3/bd.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Data Visualisation",
    description: "",
    image: "images/year3/dv.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Descriptive Analysis",
    description: "This module provides students with the knowledge and skills needed to develop web applications and web application protocol interface (API).",
    image: "images/year3/da.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Predictive Analysis",
    description: "",
    image: "images/year3/pa.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Quantitative Analysis",
    description: "",
    image: "images/year3/qa.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: CLOUD COMPUTING
  {
    name: "Cloud Architecture and Technologies",
    description: "",
    image: "images/year3/cat.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Designing and Managing Cloud Databases",
    description: "",
    image: "images/year3/dmcd.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Developing Cloud Applications",
    description: "",
    image: "images/year3/dca.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Virtualisation and Data Centre Management",
    description: "",
    image: "images/year3/vdcm.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: ENTERPRISE SOLUTIONING
  {
    name: "Business Process Modelling and Development",
    description: "",
    image: "images/year3/bpmd.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Customer Experience Management",
    description: "",
    image: "images/year3/cem.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Enterprise Business Solutions",
    description: "",
    image: "images/year3/ebs.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: GAME PROGRAMMING
  {
    name: "Artificial Intelligence for Games",
    description: "",
    image: "images/year3/ai.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Game Interactivity",
    description: "",
    image: "images/year3/gi.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Game Production",
    description: "",
    image: "images/year3/gpn.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Gameplay Programming",
    description: "",
    image: "images/year3/gpp.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Maths for Games",
    description: "",
    image: "images/year3/mg.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: INFOCOMM SALES AND MARKETING
  {
    name: "Customer Decision Making & Negotiation Skills",
    description: "",
    image: "images/year3/cdmns.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Infocomm Sales and Marketing Strategies",
    description: "",
    image: "images/year3/isms.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Infocomm Sales Life Cycle Management",
    description: "",
    image: "images/year3/islcm.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: MOBILE BUSINESS APPLICATION
  {
    name: "Mobile Applications Development",
    description: "",
    image: "images/year3/mad.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Mobile Applications Development II",
    description: "",
    image: "images/year3/mad2.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Mobile Device Security and Forensics",
    description: "",
    image: "images/year3/mdsf.png",
    tags: [""],
    year: "3"
  },

  // AREA OF INTEREST: SOLUTION ARCHITECT
  {
    name: "Advanced Object-Oriented Analysis and Design",
    description: "",
    image: "images/year3/aooad.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Data Structures and Algorithms",
    description: "",
    image: "images/year3/dsa.png",
    tags: [""],
    year: "3"
  },
  {
    name: "eCommerce Applications Development",
    description: "",
    image: "images/year3/cad.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Secure Software Development",
    description: "",
    image: "images/year3/ssd.png",
    tags: [""],
    year: "3"
  },

  // GENERAL ELECTIVES
  {
    name: "Capstone Project",
    description: "",
    image: "images/year3/cp.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Emerging Trends in IT",
    description: "",
    image: "images/year3/eti.png",
    tags: [""],
    year: "3"
  },
  {
    name: "Technopreneurship",
    description: "",
    image: "images/year3/tech.png",
    tags: [""],
    year: "3"
  }
];

// Returns the module information that contain the relevant tags.
function displayAllModules() {
  for (var i = 0; i < originalModules.length; i++) {
    var year1 = [];
    var year2 = [];
    var year3 = [];

    if (originalModules[i].year == "1") {
      year1.push(i);
    }
    else if (originalModules[i].year == "2") {
      year2.push(i);
    }
    else {
      year3.push(i);
    }

    // Create a div containing the contents of the front card
    var moduleFrontContentDiv = document.createElement("div");

    // Create a div containing the contents of the back card
    var moduleBackContentDiv = document.createElement("div");

    // ------------ FRONT CONTENTS ------------
    // Create a div containing the module name
    var moduleNameDiv = document.createElement("div");

    // Adding the title text
    var node = document.createElement("p");
    var textnode = document.createTextNode(originalModules[i].name);
    node.appendChild(textnode);
    node.setAttribute("class", "module-name");

    // Append the title text to moduleNameDiv
    moduleNameDiv.appendChild(node);
    moduleNameDiv.setAttribute("class", "module-name-div");

    // Adding a module image
    var img1 = new Image();
    img1.src = originalModules[i].image;
    img1.setAttribute("class", "module-img");

    // Adding the title text div (moduleNameDiv) and module image to moduleFrontContentDiv
    moduleFrontContentDiv.appendChild(img1);
    moduleFrontContentDiv.appendChild(moduleNameDiv);
    moduleFrontContentDiv.setAttribute("class", "module-front-content-div");

    // Adding a background image for the modules
    var img = new Image();
    if (originalModules[i].year == "1") {
      img.src = backgrounds[i % backgrounds.length].image;
    }
    else if (originalModules[i].year == "2") {
      img.src = backgrounds[(i - 3) % backgrounds.length].image;
    }
    else {
      img.src = backgrounds[(i - 3) % backgrounds.length].image;
    }
    img.setAttribute("class", "module-bg");

    // Creating an individual div for each module
    var moduleDiv = document.createElement("div");

    // Adding moduleFrontContentDiv and module image to moduleDiv
    moduleDiv.setAttribute("class", "module-div");
    moduleDiv.appendChild(moduleFrontContentDiv);
    moduleDiv.appendChild(img)

    // ------------ BACK CONTENTS ------------
    // Create a div containing the module name
    var moduleNameDiv1 = document.createElement("div");

    // Adding the title text
    var node1 = document.createElement("p");
    var textnode1 = document.createTextNode(originalModules[i].name);
    node1.appendChild(textnode1);
    node1.setAttribute("class", "module-name-back");

    // Append the title text to moduleNameDiv
    moduleNameDiv1.appendChild(node1);
    moduleNameDiv1.setAttribute("class", "module-name-back-div");

    // Adding the title text div (moduleNameDiv) to moduleBackContentDiv
    moduleBackContentDiv.appendChild(moduleNameDiv1);

    // Adding moduleBackContentDiv into moduleDiv
    moduleBackContentDiv.setAttribute("class", "module-back-content-div");
    moduleDiv.appendChild(moduleBackContentDiv);

    // ------------ APPEND WHOLE DIV CONTENT ------------
    if (originalModules[i].year == "1") {
      document.getElementById('year1-content').appendChild(moduleDiv);
    }
    else if (originalModules[i].year == "2") {
      document.getElementById('year2-content').appendChild(moduleDiv);
    }
    else {
      document.getElementById('year3-content').appendChild(moduleDiv);
    }
  }
}

function flipCards() {
  // Add "is-flipped" class to all cards that are clicked.
  $('.module-div').click(function(event) {
    var $target = $(event.currentTarget);
    $target.toggleClass('is-flipped');
  });
}

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
