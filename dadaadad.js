// ==SE_module==
// name: random_joke_generator
// displayName: Random Joke Generator
// description: A Script That Delivers Random Jokes to Users
// version: 1.0
// author: Your Name
// minSnapchatVersion: 13.1.0.43
// minSEVersion: 1.0.0
// permissions: none
// executionSides: core
// notice: unstable
// ==/SE_module==

(function () {
  'use strict';

  var im = require("interface-manager");
  var JSConsole = require("JSConsole");

  var jokesList = [
    "Why did the cookie go to the hospital? Because it felt crummy!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "How does a penguin build its house? Igloos it together!"
  ];

  function logMessage(message) {
    console.log(message);
    if (typeof shortToast === "function") {
      shortToast(message);
    } else {
      JSConsole.warn("shortToast is not available. Message:", message);
    }
  }

  function fetchRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokesList.length);
    return jokesList[randomIndex];
  }

  function createJokeInterface() {
    im.create("jokeGeneratorUI", function (builder) {
      builder.button("🎉 Get a Random Joke", function() {
        const joke = fetchRandomJoke();
        logMessage(joke);
      });
    });
  }

  function initialize() {
    createJokeInterface();
  }

  initialize();
})();
