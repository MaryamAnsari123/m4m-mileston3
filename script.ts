// script.ts


function generateResume() {
    // Get user input
    const names = document.getElementById('name') as HTMLInputElement | null;
    const  name = names ? names.value : ""

    const emails = document.getElementById('email') as HTMLInputElement | null;
    const email = emails ? emails.value : "" ;

    const phones = document.getElementById('phone') as HTMLInputElement | null;
    const phone = phones ? phones.value : "" ;

    const educations = document.getElementById('education') as HTMLInputElement | null;
    const education = educations ? educations.value : "";

    const works = document.getElementById('work') as HTMLInputElement | null;
    const work = works ? works.value : "";

    const skillsElement = document.getElementById('skills') as HTMLInputElement | null;
    const skills = skillsElement ? skillsElement.value : "";

    // Create resume preview HTML
    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${work}</p>

        <h3>Skills</h3>
        <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>`;

    // Insert the HTML into the resume preview section

    const resumePreviewElement = document.getElementById('resume-preview');
        if (resumePreviewElement) {
        resumePreviewElement.innerHTML = resumeHTML;
        };
}


