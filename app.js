function BRC(string) {
    let consoleCSS = "font-size: 1.5em; padding: 3px;";
    console.log(string, consoleCSS);
};

function BRCImportant(string) {
    let consoleCSS = "font-size: 1.5em; color: orange; text-decoration: underline; padding: 3px;"
    console.log(string, consoleCSS);
};

function BRCWarning(string) {
    let consoleCSS = "font-size: 2em; color: #f00; text-decoration: underline;"
    console.log(string, consoleCSS);
};


module.exports = BRC
module.exports = BRCImportant
module.exports = BRCWarning
