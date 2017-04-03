// bio object
var bio = {
    "name": "Sarah Albagieh",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my online resume",
    "biopic": "images/bio.gif",
    "contacts": {
        "mobile": "0555409898",
        "email": "sara.bagieh@gmail.com",
        "github": "SarahAlbagieh",
        "twitter": "@sarah_bagieh",
        "location": "Riyadh"
    },
    "skills": ["programming", "writing"],



};
//contact info (adding contact info to the page) and skills
bio.display = function() {
    var contacts = bio["contacts"];
    //var skills = bio["skills"];
    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
    var formattedcontactGeneric = HTMLcontactGeneric.replace("%data", "Contact Info");
    var formattedMobile = HTMLmobile.replace("%data%", contacts["mobile"]);
    var formattedEmail = HTMLemail.replace("%data%", contacts["email"]);
    var formattedTwitter = HTMLtwitter.replace("%data%", contacts["twitter"]);
    var formattedGitHub = HTMLgithub.replace("%data%", contacts["github"]);
    var formattedLocation = HTMLlocation.replace("%data%", contacts["location"]);
    //bio and pic message
    var formattedBioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);
    //skills

    var formattedSkillsStart = HTMLskillsStart;


    //adding to the page
    $("#header").prepend(formattedName);
    $("#header").append(formattedRole);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedwelcomeMessage);
    $("#header").append(formattedSkillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);

    });

};

//work object
var work = {
    "jobs": [{
        "employer": " Ministry of Eduction",
        "title": "Oracle HRMS Specialist",
        "location": "Riyadh",
        "dates": "17 july 2016",
        "description": "Extracting reports from Oracl ERP database"
    }]
};
work.display = function() {
    work.jobs.forEach(function(job) {
        var foramttedWorkStart = HTMLworkStart;
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        //
        $("#workExperience").append(foramttedWorkStart);
        $(".work-entry").append(formattedWorkEmployer +
            formattedWorkTitle +
            formattedWorkDate +
            formattedWorkLocation +
            formattedWorkDescription);
        //$("#workExperience").append(formattedWorkEmployer);

        //$("#workExperience").append(formattedWorkDate);
        //$("#workExperience").append(formattedWorkLocation);
        //$("#workExperience").append(formattedWorkDescription);

    });
};

//adding work info to the page
//var jobs = work["jobs"];
//var job = jobs[0];

// project object
var projects = {
    "projects": [{
            "title": "Points of Intrests",
            "dates": "2013",
            "description": "An android application",
            "images": ["images/pointsnew.png", "images/pointsnew.png"]
        }




    ]
};

projects.display = function() {
    //adding project info
    //var projects = projects["projects"];
    //var project = projects[0];

    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var images = project.images;
        var formattedProjectImage = "";
        for (var i = 0; i < images.length; i++) {

            formattedProjectImage += HTMLprojectImage.replace("%data%", images[i]);


        }
        //

        $(".project-entry").append(formattedProjectTitle + formattedProjectDates +
            formattedProjectDescription + formattedProjectImage);
        //$("#projects").append(formattedProjectDates);
        //$("#projects").append(formattedProjectDescription);
        //$("#projects").append(formattedProjectImage);

    });
};

// education object
var education = {
    "schools": [{
            "name": "King Saud University",
            "location": "Riyadh",
            "dates": "2014",
            "degree": "bachelor degree",
            "url": "http://ksu.edu.sa/en/",
            "majors": ["Information Technology ", "Network and Information Security"]
        }

    ],

    "onlineCourses": [{
        "title": "Front End Web",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"

    }]

};

education.display = function() {




    //adding education info :

    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        //var educationObject = education["schools"];
        //var school = educationObject[0];

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);



        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry").append(formattedSchoolDate);
        $(".education-entry").append(formattedSchoolLocation);
        $(".education-entry").append(formattedSchoolMajor);
    });

    //online
    var onlineEducation = education["onlineCourses"];
    var onlineCourse = onlineEducation[0];
    var formattedOnlineClasses = HTMLonlineClasses;
    var formattedOnlineTitel = HTMLonlineTitle.replace("%data%", onlineCourse["title"]);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse["school"]);
    var foramttedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourse["dates"]);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse["url"]);
    //
    $(".education-entry").append(formattedOnlineClasses);
    $(".education-entry").append(formattedOnlineTitel + formattedOnlineSchool);
    $(".education-entry").append(foramttedOnlineDate);
    $(".education-entry").append(formattedOnlineUrl);

};

//
bio.display();
work.display();
projects.display();
education.display();
var formattedMap = googleMap;
$("#mapDiv").append(formattedMap);