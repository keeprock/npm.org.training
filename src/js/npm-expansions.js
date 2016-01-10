var expansions = require('npm-expansions'),
    clickCount = -1,
    updateExpansion = function (event) {
        var expansion = expansions[Math.floor(Math.random() * expansions.length)];

        if (event) event.preventDefault();

        if (++clickCount > 10) {
            return window.location = "https://github.com/npm/npm-expansions";
        }

        $("#npm-expansions").text(expansion);
    };

$(function () {
    updateExpansion();
    $("#npm-expansions").on('click', updateExpansion);
});

