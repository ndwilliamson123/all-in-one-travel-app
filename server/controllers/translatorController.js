const translatorModel = require('../models/translatorModel');

function getLanguageTranslations(languageId) {
    return translatorModel.getLanguageTranslations(languageId)
}

module.exports = {
    getLanguageTranslations
}