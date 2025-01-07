// Example: Toggle Follow Button
const followButton = document.getElementById('follow-button');
followButton.addEventListener('click', () => {
    if (followButton.textContent === 'Follow') {
        followButton.textContent = 'Unfollow';
        followButton.style.backgroundColor = '#dc3545';
        followButton.style.color = '#fff';
    } else {
        followButton.textContent = 'Follow';
        followButton.style.backgroundColor = '';
        followButton.style.color = '';
    }
});

// Example: Dynamic Workload Update
const workloadPercentage = document.getElementById('workload-percentage');
const progressBarFill = document.getElementById('progress-bar-fill');

function updateWorkload(value) {
    workloadPercentage.textContent = value + '%';
    progressBarFill.style.width = value + '%';
}

// Simulate workload change
setTimeout(() => updateWorkload(85), 3000); // Update to 85% after 3 seconds