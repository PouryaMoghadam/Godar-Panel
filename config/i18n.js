// Import Next i18n Package
const NextI18Next = require('next-i18next').default;
// Create and Export Default i18n Config Module use in Whole Project
const languages = ['fa-IR', 'en-US'];
const options = {
	defaultLanguage: 'fa', // Default Language
	otherLanguages: ['en'], // Other Languages Can Add In Array
	browserLanguageDetection: true, // Detect Language From Browser Meta
	defaultNS: 'common', // Default File Load in Ns
	localeExtension: 'json', // Default language Files Extension
	strictMode: true, // Strict Mode Json Files
	keySeparator: false
};

const NextI18NextInstance = new NextI18Next(options);

NextI18NextInstance.i18n.languages = languages;

module.exports = NextI18NextInstance;