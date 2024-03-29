
// script.js

// Function to fetch job listings from JSON file
async function fetchJobListings() {
    try {
        const response = await fetch('job_listings.json'); // Assuming your JSON file is named 'job_listings.json'
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        return [];
    }
}

// Function to display job listings
function displayJobListings(jobListings) {
    const jobListingsContainer = document.querySelector('.job-listings-container');
    jobListingsContainer.innerHTML = ''; // Clear existing job listings

    jobListings.forEach(job => {
        const jobListingElement = document.createElement('div');
        jobListingElement.classList.add('job-listing');
        jobListingElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <a href="#" class="view-details" data-job="${job.page}">View Details</a>
        `;
        jobListingsContainer.appendChild(jobListingElement);
    });
}

// Function to handle click on "View Details" links
function handleViewDetails() {
    const viewDetailsLinks = document.querySelectorAll('.view-details');
    viewDetailsLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const jobPage = this.getAttribute('data-job');
            window.location.href = jobPage; // Redirect to job page
        });
    });
}

// Main function to initialize the application
async function init() {
    const jobListings = await fetchJobListings();
    displayJobListings(jobListings);
    handleViewDetails();
}

// Call the init function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);