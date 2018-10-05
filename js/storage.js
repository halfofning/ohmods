$(document).ready(function() {
    displayAllModules();
    flipCards();
    filterButtons();
    setupModuleScrolling();
});

// All backgrounds
var backgrounds = [
  {
    image: "images/backgrounds/orange.jpg",
    color: "orange"
  },
  {
    image: "images/backgrounds/darkblue.jpg",
    color: "darkblue"
  },
  {
    image: "images/backgrounds/lightblue.jpg",
    color: "lightblue"
  },
  {
    image: "images/backgrounds/turquoise.jpg",
    color: "turquoise"
  },
  {
    image: "images/backgrounds/pink.jpg",
    color: "pink"
  },
  {
    image: "images/backgrounds/darkgreen.jpg",
    color: "darkgreen"
  },
  {
    image: "images/backgrounds/lightgreen.jpg",
    color: "lightgreen"
  }
]

// All modules and their information
var originalModules = [
  // YEAR 1 CORE MODULES
  {
    name: "Fundamentals of IT Professionals I",
    shortName: "fp1",
    description: "A broad introduction to the field of IT by exploring the roles and professional practice of IT professionals.",
    image: "images/year1/fp1.svg",
    tags: ["personal-dev"],
    year: "1"
  },
  {
    name: "Computing Mathematics",
    shortName: "cm",
    description: "This module introduces the basic concepts of relations and functions, matrices, statistical methods and relevant applications.",
    image: "images/year1/cm.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Enterprise Information Systems",
    shortName: "eis",
    description: "This module introduces the different components that build up an enterprise information system.",
    image: "images/year1/eis.svg",
    tags: ["businessIT"],
    year: "1"
  },
  {
    name: "Cyber Security Fundamentals",
    shortName: "csf",
    description: "This module provides an overview of the domains of cyber security to help develop an understanding of its importance in today’s digital world.",
    image: "images/year1/csf.svg",
    tags: ["info-sec"],
    year: "1"
  },
  {
    name: "Programming I",
    shortName: "prg1",
    description: "This module introduces the fundamentals of programming and how to develop programs using appropriate problem solving techniques in a modular style.",
    image: "images/year1/prg1.svg",
    tags: ["web-dev", "data-analytics"],
    year: "1"
  },
  {
    name: "Databases",
    shortName: "db",
    description: "This module introduces students to the underlying concepts of database systems and how to model and design database systems that reflect business requirements.",
    image: "images/year1/db.svg",
    tags: ["web-dev"],
    year: "1"
  },
  {
    name: "Front End Development",
    shortName: "fed",
    description: "This module teaches the fundamental skills required to develop responsive websites that are optimised for mobile and desktop viewing.",
    image: "images/year1/fed.svg",
    tags: ["web-dev"],
    year: "1"
  },
  {
    name: "Operating Systems & Networking Fundamentals",
    shortName: "osfnf",
    description: "This module focuses on the fundamentals and principles of operating systems.",
    image: "images/year1/osfnf.svg",
    tags: [""],
    year: "1"
  },
  {
    name: "Portfolio I",
    shortName: "p1",
    description: "This module provides the opportunity to apply the knowledge and skills gained from the various modules, and explore topics in IT that they have a personal interest.",
    image: "images/year1/p1.svg",
    tags: ["web-dev", "mobile-dev"],
    year: "1"
  },
  {
    name: "Programming II",
    shortName: "prg2",
    description: "This module provides opportunities for the students to develop medium-scale applications based on the Object-Oriented approach.",
    image: "images/year1/prg2.svg",
    tags: ["web-dev", "games-dev"],
    year: "1"
  },

  // YEAR 2 CORE MODULES
  {
    name: "Fundamentals of IT Professionals II",
    shortName: "fp2",
    description: "This module gives a course-based experience in which students can engage with the local community and industry.",
    image: "images/year2/fp2.svg",
    tags: ["personal-dev"],
    year: "2"
  },
  {
    name: "Object Oriented Analysis & Design",
    shortName: "ooad",
    description: "This module leverages the skills acquired in PRG2 to introduce software design, so that students experience the full cycle of software development.",
    image: "images/year2/ooad.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Web Application Development",
    shortName: "web",
    description: "This module provides students with the skills needed to develop web applications and web application protocol interface (API).",
    image: "images/year2/web.svg",
    tags: ["web-dev"],
    year: "2"
  },
  {
    name: "Fundamentals of IT Professionals III",
    shortName: "fp3",
    description: "This module provides a stepping stone to the students in their IT career. They are given an insight into the infocomm industries.",
    image: "images/year2/fp3.svg",
    tags: ["personal-dev"],
    year: "2"
  },
  {
    name: "Full Stack Development",
    shortName: "fsd",
    description: "This module aims to provide opportunities for students to be part of a software development team.",
    image: "images/year2/fsd.svg",
    tags: [""],
    year: "2"
  },
  {
    name: "Portfolio II",
    shortName: "p2",
    description: "Students may choose to undertake a real life IT project, a competition-based project or a research and development project.",
    image: "images/year2/p2.svg",
    tags: ["web-dev", "mobile-dev", "games-dev"],
    year: "2"
  },
  {
    name: "User Experience",
    shortName: "ux",
    description: "This module focuses on the principles and techniques for designing good user experience in software applications and other products such as ATMs, kiosks, etc.",
    image: "images/year2/ux.svg",
    tags: ["web-dev", "mobile-dev"],
    year: "2"
  },

  // YEAR 2 AND YEAR 3 ELECTIVES
  // AREA OF INTEREST: BUSINESS AND DATA ANALYTICS
  {
    name: "Big Data",
    shortName: "bd",
    description: "This module also covers the whole technology stack of Big Data: infrastructure, data management and analytics.",
    image: "images/year3/bd.svg",
    tags: ["data-analytics", "businessIT"],
    year: "3",
    aoi: "Business and Data Analytics"
  },
  {
    name: "Data Visualisation",
    shortName: "dv",
    description: " This module covers the techniques for creating effective visualisations based on principles from graphic design, perceptual psychology, etc.",
    image: "images/year3/dv.svg",
    tags: ["data-analytics", "businessIT"],
    year: "2",
    aoi: "Business and Data Analytics"
  },
  {
    name: "Descriptive Analysis",
    shortName: "da",
    description: "This module aims to teach students the descriptive analytics lifecycle.",
    image: "images/year3/da.svg",
    tags: ["data-analytics", "businessIT"],
    year: "3",
    aoi: "Business and Data Analytics"
  },
  {
    name: "Predictive Analysis",
    shortName: "pa",
    description: "This module introduces students to the statistical techniques used to make predictions about future trends in business or financial services.",
    image: "images/year3/pa.svg",
    tags: ["data-analytics", "businessIT"],
    year: "2",
    aoi: "Business and Data Analytics"
  },
  {
    name: "Quantitative Analysis",
    shortName: "qa",
    description: "This module aims to introduce students to the methods that are used to analyse and interpret business or financial data.",
    image: "images/year3/qa.svg",
    tags: ["data-analytics", "businessIT"],
    year: "3",
    aoi: "Business and Data Analytics"
  },

  // AREA OF INTEREST: CLOUD COMPUTING
  {
    name: "Cloud Architecture & Technologies",
    shortName: "cat",
    description: "This module gives insight into the key concepts and technologies of cloud computing.",
    image: "images/year3/cat.svg",
    tags: ["cloud-comp"],
    year: "2",
    aoi: "Cloud Computing"
  },
  {
    name: "Designing & Managing Cloud Databases",
    shortName: "dmcd",
    description: "This module covers analysis, design and management of cloud database models.",
    image: "images/year3/dmcd.svg",
    tags: ["cloud-comp"],
    year: "3",
    aoi: "Cloud Computing"
  },
  {
    name: "Developing Cloud Applications",
    shortName: "dca",
    description: "This module covers the analysis of business and technical requirements of a cloud-based system.",
    image: "images/year3/dca.svg",
    tags: ["cloud-comp"],
    year: "3",
    aoi: "Cloud Computing"
  },
  {
    name: "Virtualisation & Data Centre Management",
    shortName: "vdcm",
    description: "This module introduces the foundations of virtualisation.",
    image: "images/year3/vdcm.svg",
    tags: ["cloud-comp"],
    year: "3",
    aoi: "Cloud Computing"
  },

  // AREA OF INTEREST: ENTERPRISE SOLUTIONING
  {
    name: "Business Process Modelling & Development",
    shortName: "bpmd",
    description: "This module equips students with the skills for modelling and analysing business processes.",
    image: "images/year3/bpmd.svg",
    tags: ["etp-sol"],
    year: "3",
    aoi: "Enterprise Solutioning"
  },
  {
    name: "Customer Experience Management",
    shortName: "cxm",
    description: "This module provides the knowledge of Customer Experience Management as a business strategy.",
    image: "images/year3/cxm.svg",
    tags: ["etp-sol"],
    year: "2",
    aoi: "Enterprise Solutioning"
  },
  {
    name: "Enterprise Business Solutions",
    shortName: "ebs",
    description: "This module educates students on the importance of backend cloud-based enterprise business systems.",
    image: "images/year3/ebs.svg",
    tags: ["etp-sol"],
    year: "3",
    aoi: "Enterprise Solutioning"
  },

  // AREA OF INTEREST: GAME PROGRAMMING
  {
    name: "Artificial Intelligence for Games",
    shortName: "aig",
    description: "This module introduces the various approaches for injecting intelligence into games.",
    image: "images/year3/aig.svg",
    tags: ["games-dev"],
    year: "3",
    aoi: "Game Programming"
  },
  {
    name: "Game Interactivity",
    shortName: "gi",
    description: "This module introduces game interactivity and the various game interaction devices to the students. Includes player profiling and psychology, measuring playability, etc.",
    image: "images/year3/gi.svg",
    tags: ["games-dev"],
    year: "3",
    aoi: "Game Programming"
  },
  {
    name: "Game Production",
    shortName: "gpn",
    description: "This module provides an overview of the game development process and introduces game design. Storytelling, game mechanics and level design will be covered.",
    image: "images/year3/gpn.svg",
    tags: ["games-dev"],
    year: "2",
    aoi: "Game Programming"
  },
  {
    name: "Gameplay Programming",
    shortName: "gpp",
    description: "This module presents fundamental concepts of game implementation and architecture.",
    image: "images/year3/gpp.svg",
    tags: ["games-dev"],
    year: "2",
    aoi: "Game Programming"
  },
  {
    name: "Maths for Games",
    shortName: "mg",
    description: "This module provides an in-depth examination of the various mathematical concepts that are relevant to games programming.",
    image: "images/year3/mg.svg",
    tags: ["games-dev"],
    year: "2",
    aoi: "Game Programming"
  },

  // AREA OF INTEREST: INFOCOMM SALES AND MARKETING
  {
    name: "Customer Decision Making & Negotiation Skills",
    shortName: "cdn",
    description: "Students will be introduced to soft skills in understanding customer biases and concerns, etc.",
    image: "images/year3/cdn.svg",
    tags: ["sales-marketing"],
    year: "3",
    aoi: "Infocomm Sales and Marketing"
  },
  {
    name: "Infocomm Sales & Marketing Strategies",
    shortName: "ism",
    description: "This module introduces students to the development of sales and marketing strategies, etc.",
    image: "images/year3/ism.svg",
    tags: ["sales-marketing"],
    year: "2",
    aoi: "Infocomm Sales and Marketing"
  },
  {
    name: "Infocomm Sales Life Cycle Management",
    shortName: "isc",
    description: "This module introduces students to a customer’s ICT purchase decision making process, etc.",
    image: "images/year3/isc.svg",
    tags: ["sales-marketing"],
    year: "3",
    aoi: "Infocomm Sales and Marketing"
  },

  // AREA OF INTEREST: MOBILE BUSINESS APPLICATION
  {
    name: "Mobile Applications Development",
    shortName: "mad",
    description: "This module focuses on the design & development of mobile applications.",
    image: "images/year3/mad.svg",
    tags: ["mobile-dev"],
    year: "2",
    aoi: "Mobile Business Application"
  },
  {
    name: "Mobile Applications Development II",
    shortName: "mad2",
    description: "This module will focus on the development of advanced applications.",
    image: "images/year3/mad2.svg",
    tags: ["mobile-dev"],
    year: "3",
    aoi: "Mobile Business Application"
  },
  {
    name: "Mobile Device Security & Forensics",
    shortName: "mdsf",
    description: "This module covers techniques and tools to extract digital evidence on mobile devices.",
    image: "images/year3/mdsf.svg",
    tags: ["mobile-dev"],
    year: "3",
    aoi: "Mobile Business Application"
  },

  // AREA OF INTEREST: SOLUTION ARCHITECT
  {
    name: "Advanced Object-Oriented Analysis & Design",
    shortName: "aooad",
    description: "This module introduces complex design artefacts needed to model & document softwares.",
    image: "images/year3/aooad.svg",
    tags: ["sol-arch"],
    year: "3",
    aoi: "Solutions Architect"
  },
  {
    name: "Data Structures & Algorithms",
    shortName: "dsa",
    description: "This module provides students with skills to analyse, design and implement programmes involving data structures.",
    image: "images/year3/dsa.svg",
    tags: ["sol-arch"],
    year: "2",
    aoi: "Solutions Architect"
  },
  {
    name: "eCommerce Applications Development",
    shortName: "ecad",
    description: "This module aims to provide students with technical skills to develop eCommerce applications.",
    image: "images/year3/ecad.svg",
    tags: ["sol-arch"],
    year: "3",
    aoi: "Solutions Architect"
  },
  {
    name: "Secure Software Development",
    shortName: "ssd",
    description: "This module trains students to incorporate security throughout the entire process of software development.",
    image: "images/year3/ssd.svg",
    tags: ["sol-arch"],
    year: "2",
    aoi: "Solutions Architect"
  },

  // GENERAL ELECTIVES
  {
    name: "Emerging Trends in IT",
    shortName: "eti",
    description: "This module is designed to help students keep abreast of the latest IT developments.",
    image: "images/year3/eti.svg",
    tags: ["techno"],
    year: "3",
    aoi: "General"
  },
  {
    name: "Technopreneurship",
    shortName: "tns",
    description: "This module focuses on the processes and mechanisms by which new ideas and inventions can be commercialised in the market.",
    image: "images/year3/tns.svg",
    tags: ["techno"],
    year: "2",
    aoi: "General"
  }
];

// Returns all module information.
function displayAllModules() {
  // Create arrays for each years!
  year1 = [];
  year2 = [];
  year3 = [];

  for (var i = 0; i < originalModules.length; i++) {
    module = originalModules[i];
    if (module.year == "1") {
      year1.push(module);
    }
    else if (module.year == "2") {
      year2.push(module);
    }
    else {
      year3.push(module);
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
    var textnode = document.createTextNode(module.name);
    node.appendChild(textnode);
    node.setAttribute("class", "module-name");

    // Append the title text to moduleNameDiv
    moduleNameDiv.appendChild(node);
    moduleNameDiv.setAttribute("class", "module-name-div");

    // Adding a module image
    var img1 = new Image();
    img1.src = module.image;
    img1.setAttribute("class", "module-img");

    // Adding the title text div (moduleNameDiv) and module image to moduleFrontContentDiv
    moduleFrontContentDiv.appendChild(img1);
    moduleFrontContentDiv.appendChild(moduleNameDiv);
    moduleFrontContentDiv.setAttribute("class", "module-front-content-div");

    // Adding a background image for the modules
    var img = new Image();
    if (year1.includes(module)) {
      var index = year1.indexOf(module);
      img.src = backgrounds[index % backgrounds.length].image;
    }
    else if (year2.includes(module)) {
      var index = year2.indexOf(module);
      img.src = backgrounds[index % backgrounds.length].image;
    }
    else {
      var index = year3.indexOf(module);
      img.src = backgrounds[index % backgrounds.length].image;
    }
    img.setAttribute("class", "module-bg");

    // Creating an individual div for each module
    var moduleDiv = document.createElement("div");

    // Adding all tags classes to each module div
    // var eachModule = originalModules[i];
    // var moduleTags = eachModule.tags;

    // Adding moduleFrontContentDiv and module image to moduleDiv
    moduleDiv.setAttribute("class", "module-div " + module.shortName);
    moduleDiv.appendChild(moduleFrontContentDiv);
    moduleDiv.appendChild(img)

    // ------------ BACK CONTENTS ------------
    // Create a div containing the module name and another containing module desc
    var moduleNameDiv1 = document.createElement("div");
    var moduleDescription = document.createElement("div");

    // Adding the title text
    var node1 = document.createElement("p");
    var textnode1 = document.createTextNode(module.name);
    node1.appendChild(textnode1);
    node1.setAttribute("class", "module-name-back");

    // Append the title text to moduleNameDiv
    moduleNameDiv1.appendChild(node1);
    moduleNameDiv1.setAttribute("class", "module-name-back-div");

    // Adding the area of interest text
    if (module.aoi != null) {
      var node3 = document.createElement("p");
      var textnode3 = document.createTextNode(module.aoi);
      node3.appendChild(textnode3);
      node3.setAttribute ("class", "module-aoi");

      moduleDescription.appendChild(node3);
    }

    // Adding the description text
    var node2 = document.createElement("p");
    var textnode2 = document.createTextNode(module.description);
    node2.appendChild(textnode2);
    node2.setAttribute("class", "module-desc");

    // Append the description text to moduleDescription
    // moduleDescription.appendChild(node3);
    moduleDescription.appendChild(node2);
    moduleDescription.setAttribute("class", "module-desc-div");

    // Adding the title text div (moduleNameDiv) and description text to moduleBackContentDiv
    moduleBackContentDiv.appendChild(moduleNameDiv1);
    moduleBackContentDiv.appendChild(moduleDescription);

    // Adding moduleBackContentDiv into moduleDiv
    moduleBackContentDiv.setAttribute("class", "module-back-content-div");
    moduleDiv.appendChild(moduleBackContentDiv);

    // ------------ APPEND WHOLE DIV CONTENT ------------
    if (module.year == "1") {
      $("#year1-content").append(moduleDiv);
    }
    else if (module.year == "2") {
      $("#year2-content").append(moduleDiv);
    }
    else {
      $("#year3-content").append(moduleDiv);
    }
  }
}

// Flips each module card on click.
function flipCards() {
  // Add "is-flipped" class to all cards that are clicked.
  $(".module-div").click(function(event) {
    var $target = $(event.currentTarget);
    $target.toggleClass("is-flipped");

    // if (!$target.is(".is-flipped")) {
    //   $target.toggleClass("is-flipped");
    // }

    // Set timer to 15 seconds
    setTimeout(function() {
      $target.removeClass("is-flipped");
    }, 18000);
  });
}

// Activates the filter buttons on click.
function filterButtons() {
  // Store all the tags that are clicked.
  var tags = [];

  // Toggle "is-checked" class to all buttons that are clicked.
  $(".btn").click(function(event) {
    var $target = $(event.currentTarget);
    $target.toggleClass("is-checked");

    if (!$target.is(".is-checked")) {
      var index = tags.indexOf(this.id);
      if (index > -1) {
        tags.splice(index, 1);
      }
      getModules(tags);
    }
    else {
      tags.push(this.id);
      getModules(tags);

      // Set timer to 18 seconds
      setTimeout(function() {
        $target.removeClass("is-checked");
        for (var i = 0; i < tags.length; i++) {
          if (i > -1) {
            tags.splice(i, 1);
          }
        }
        getModules(tags);
      }, 45000);
    }
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

    // Add all modules with the selected tags into the filteredModules array.
    for (var j = 0; j < tags.length; j++) {
      var filterTag = tags[j];
      if (moduleTags.includes(filterTag)) {
        filteredModules.push(module);
        break;
      }
    }
  }

  // Add class to those that are not in filtered modules, and remove class from those that are.
  for (var j = 0; j < originalModules.length; j++) {
    var module = originalModules[j];
    var card = $("." + module.shortName);

    // When no filters are selected, i.e. filteredModules = empty array, remove all "is-disabled" classes.
    if (filteredModules.length == 0) {
          card.removeClass("is-disabled");
    }
    else {
      if (!filteredModules.includes(module)) {
        card.addClass("is-disabled");
      }
      else {
        card.removeClass("is-disabled");
      }
    }
  }

  return filteredModules;
}

// Slow scrolling and looping of each years" modules
function setupModuleScrolling() {
  $("#year1-content").parent().scroll(onScroll);
  $("#year2-content").parent().scroll(onScroll);
  $("#year3-content").parent().scroll(onScroll);
  updateScroll();
}

function updateScroll() {
  window.requestAnimationFrame(updateScroll);

  var speed = 2;
  $("#year1-content").parent().scrollLeft($("#year1-content").parent().scrollLeft() + speed);
  $("#year2-content").parent().scrollLeft($("#year2-content").parent().scrollLeft() + speed);
  $("#year3-content").parent().scrollLeft($("#year3-content").parent().scrollLeft() + speed);
}

function onScroll(e) {
  var moduleDivWidth = $(".module-div").width();
  var moduleContWidth = $(".module-container").width();
  var noOfModules;
  switch ($(e.target).children().first().attr("id")) {
    case "year1-content":
      noOfModules = year1.length;
      break;
    case "year2-content":
      noOfModules = year2.length;
      break;
    case "year3-content":
      noOfModules = year3.length;
      break;
  }
  var containerWidth = moduleDivWidth * noOfModules - moduleContWidth;

  var container = $(e.target);
  var content = container.children().first();

  // If the start or end of the container has been reached, then duplicate the 
  // appropriate element.
  if (container.scrollLeft() >= containerWidth - 30) {
    content.append(content.children().first().clone());
    content.children().first().remove();
    container.scrollLeft(container.scrollLeft() - moduleDivWidth);
    flipCards();
  } else if (container.scrollLeft() <= 30) {
    content.prepend(content.children().last().clone());
    content.children().last().remove();
    container.scrollLeft(container.scrollLeft() + moduleDivWidth);
    flipCards();
  }
}
