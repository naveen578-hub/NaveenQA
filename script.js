document.addEventListener('DOMContentLoaded', () => {
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const formErrorMessage = document.getElementById('formErrorMessage');

    downloadResumeBtn.addEventListener('click', () => {
        // IMPORTANT: Replace this URL with the direct link to your hosted "Naveen QA (6).docx" file.
        // Example if hosted in your GitHub repo:
        // 'https://raw.githubusercontent.com/your-username/your-repo-name/main/Naveen%20QA%20(6).docx'
        const resumeUrl = 'https://placehold.co/200x100/000/FFF?text=NaveenQA(6).docx'; // Placeholder URL

        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Naveen QA (6).docx'; // This sets the filename for download
        document.body.appendChild(link); // Append to body to make it clickable
        link.click(); // Programmatically click the link
        document.body.removeChild(link); // Clean up the temporary link

        console.log('Attempting to download Naveen QA (6).docx');
    });

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        formSuccessMessage.classList.add('hidden');
        formErrorMessage.classList.add('hidden');

        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formSuccessMessage.classList.remove('hidden');
                contactForm.reset(); // Clear the form fields
            } else {
                const data = await response.json();
                if (data.errors) {
                    console.error('Formspree errors:', data.errors);
                }
                formErrorMessage.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Network or submission error:', error);
            formErrorMessage.classList.remove('hidden');
        }
    });
});
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const downloadButton = document.getElementById('downloadResumeBtn');

        if (downloadButton) {
            downloadButton.addEventListener('click', function() {
                const filePath = this.getAttribute('data-file'); // Get the file path from the button
                if (filePath) {
                    const link = document.createElement('a');
                    link.href = filePath;
                    link.download = 'Naveen_Resume.docx'; // Suggested filename when downloaded
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    console.error("No file path specified for download.");
                }
            });
        }
    });
</script>