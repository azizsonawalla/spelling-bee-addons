function getTodaysGameData() {
    return window.gameData.today;
}

function getTotalPossibleWords() {
    return getTodaysGameData().answers.length;
}

function showTotalPossibleWords() {
    var additionalString = " out of " + getTotalPossibleWords() + ".";
    var textDivXPath = '//div[contains(@class, "sb-wordlist-summary")]';
    var textDiv = document.evaluate(textDivXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var textDivOldText = textDiv.innerText;
    textDiv.innerText = textDivOldText + additionalString;
}

function main() {
    showTotalPossibleWords();
}

main();