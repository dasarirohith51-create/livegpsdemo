// Localization logic
const defaultLang = 'en';
let currentLang = localStorage.getItem('site_lang') || defaultLang;

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language selector dropdown if it exists
  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.value = lang;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // If there's a language selector, add an event listener
  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  }

  // Set the initial language
  updateLanguage(currentLang);
});
