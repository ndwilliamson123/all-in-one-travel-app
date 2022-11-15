const fs = require("fs");

function getLanguageTranslations(languageId) {
  const phrases = JSON.parse(fs.readFileSync("./data/phrase.json"));

  const translations = JSON.parse(
    fs.readFileSync("./data/translation.json")
  ).filter((phrase) => phrase.LanguageId === languageId);

  //need DB join query to combine phrases db 'text'

  return translations;
}

module.exports = {
  getLanguageTranslations,
};
