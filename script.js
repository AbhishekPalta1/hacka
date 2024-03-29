function applyForJob() {
    const selectedJob = document.getElementById("job-dropdown").value;
    const qualification = document.getElementById("qualification").value;
    const experience = document.getElementById("experience").value;

    
    if (qualification.toLowerCase().includes("degree") && experience >= 2) {
        alert(`Congratulations! You have successfully applied for ${selectedJob}.`);
    } else {
        alert(`Sorry, you do not meet the qualifications for ${selectedJob}.`);
    }
}