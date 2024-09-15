"use strict";
// script.ts
Object.defineProperty(exports, "__esModule", { value: true });
var pdf_1 = require("./pdf");
function generateResume() {
    // Get user input
    var names = document.getElementById('name');
    var name = names ? names.value : "";
    var emails = document.getElementById('email');
    var email = emails ? emails.value : "";
    var phones = document.getElementById('phone');
    var phone = phones ? phones.value : "";
    var educations = document.getElementById('education');
    var education = educations ? educations.value : "";
    var works = document.getElementById('work');
    var work = works ? works.value : "";
    var skillsElement = document.getElementById('skills');
    var skills = skillsElement ? skillsElement.value : "";
    // Create resume preview HTML
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(work, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n    ");
    // Insert the HTML into the resume preview section
    var resumePreviewElement = document.getElementById('resume-preview');
    if (resumePreviewElement) {
        resumePreviewElement.innerHTML = resumeHTML;
    }
    ;
    // Adjust the path based on your folder structure
    // Assuming there is a button to trigger the PDF download
    var downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', pdf_1.downloadPDF);
    }
}
