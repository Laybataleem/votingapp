
// Initialize vote counts
let votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0
};

// Function to handle voting
function vote(option) {
    votes[option]++;
    updateVoteCount(option);
}

// Function to update the vote count on the UI
function updateVoteCount(option) {
    const voteCountElement = document.getElementById(`voteCount_${option}`);
    voteCountElement.innerText = `${votes[option]} likes`;
}