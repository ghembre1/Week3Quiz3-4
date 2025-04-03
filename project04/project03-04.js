/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Gary Hembree
      Date:   4-3-25

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];
/*Part 6D */
document.getElementsByTagName(reviews)
//Part 4
function starImages(rating) {
      /*Part 4 */
      let imageText = "";
    for (let i = 1; i <= rating; i++) {
      /*Part 4C */
        imageText += "<img src='star.png' alt='star'>";
    }
    /*Part 4D */
    return imageText;
}
/* Part 5 */
for (let i = 0; i < reviewers.length; i++) {
      /*Part 6A */
      let reviewCode = "";
      /*Part 6B */
      if (reviewType[i] == "P") {
            reviewCode += "<table class='prime'>";
        } else if (reviewType[i] == "N") {
            reviewCode += "<table class='new'>";
        } else {
            reviewCode += "<table>";
        }
        /*Part 6C */
        reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
        reviewCode += "<tr><th>Reviewer</th><td>" + reviewers[i] + "</td></tr>";
        reviewCode += "<tr><th>Date</th><td>" + reviewDates[i] + "</td></tr>";
        reviewCode += "<tr><th>Rating</th><td>" + starImages(ratings[i]) + "</td></tr>";
        reviewCode += "<tr><th>Review</th><td>" + reviews[i] + "</td></tr>";
}
