// ==SE_module==
// name: random_joke
// displayName: Random Joke Generator
// description: A Script That Provides Random Jokes to Users
// version: 1.0
// author: Your Name
// ==/SE_module==

(function () {
  'use strict';

  var im = require("interface-manager");
  var jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my computer I needed a break, and now it won't stop sending me beach wallpapers.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!"
  ];

  function displayMessage(message) {
    console.log(message);
    if (typeof shortToast === "function") {
      shortToast(message);
    } else {
      console.warn("shortToast is not available. Message:", message);
    }
  }

  function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  function createJokeToolboxUI() {
    im.create("jokeToolbox", function (builder) {
      builder.button("Get a Random Joke", function() {
        const joke = getRandomJoke();
        displayMessage(joke);
      });
    });
  }

  function start() {
    createJokeToolboxUI();
  }

  start();
})();
