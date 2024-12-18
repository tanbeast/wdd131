
   // Local Storage to Track User Visits
const welcomeMessage = document.getElementById("welcomeMessage");
// Get the visit count from local storage (default to 0)
let visitCount = localStorage.getItem("visitCount");

if (visitCount) {
    // Convert to a number and increment the count
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
     // Check if the user is a loyal viewer
    if (visitCount >= 10) {
        welcomeMessage.textContent = `🎉 Thank you for comming back! We truly appreciate you! 🎉`;
    } else {
        welcomeMessage.textContent = `Welcome back! You've visited this page ${visitCount} times.`;
    }
} else {
    // First visit
    localStorage.setItem("visitCount", 1);
    welcomeMessage.textContent = "Welcome to our site! This is your first visit.";
}

