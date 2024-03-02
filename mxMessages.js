// An array of inspirational phrases
const inspirationalPhrases = [
  "Believe in yourself.",
  "Embrace the challenges.",
  "Keep pushing forward.",
  "Stay positive and focused.",
  "Dream big and work hard.",
  "Success is a journey, not a destination.",
  "You are capable of great things.",
  "Never give up on your dreams.",
  "Today is a new opportunity.",
];
//Function to generate a random index
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
//Function that returns random inspirational phrase
function generateInspirationalPhrase() {
  return inspirationalPhrases[randomIndex(inspirationalPhrases)];
}
// Call the generateInspirationalPhrase function to get a random message
const randomInspirationalPhrase = generateInspirationalPhrase();
console.log(randomInspirationalPhrase);
