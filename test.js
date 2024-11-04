// ==SE_module==
// name: virtual_pet
// displayName: Virtual Pet
// description: A Script that allows users to feed a virtual pet on startup.
// version: 1.0
// author: Your Name
// ==/SE_module==

var config = require("config");
var im = require("interface-manager");

var settingsContext = {
    events: [],
};

var petHunger = 5; // Pet's hunger level

function createPetToolBoxUI() {
    settingsContext.events.push({
        start: function (builder) {
            builder.row(function (builder) {
                builder.button("Feed Pet", function () {
                    feedPet();
                });
            });
        },
    });
}

function feedPet() {
    if (petHunger > 0) {
        petHunger--;
        longToast("Yum! Your pet is fed!");
    } else {
        longToast("Your pet is not hungry right now!");
    }
}

module.onSnapMainActivityCreate = activity => {
    createPetToolBoxUI();
}

function createInterface() {
    createPetToolBoxUI();
}

function start(_) {
    createInterface();
}

start();

im.create("settings" /* EnumUI.SETTINGS */, function (builder, args) {
    settingsContext.events.forEach(function (event) {
        event.start(builder, args);
    });
});
