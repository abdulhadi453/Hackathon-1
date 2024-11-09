// Get references to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the resume content
    const resumeHTML = `    
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Certifications</h3>
        <p>${certifications}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});
