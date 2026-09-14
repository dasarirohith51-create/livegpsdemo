// theme.js - Handles Light/Dark mode toggling and persistence
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme in localStorage, otherwise use system preference
  const currentTheme = localStorage.getItem('theme') || 
                       (prefersDarkScheme.matches ? 'dark' : 'light');

  // Apply the theme immediately
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Update button icon if exists
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      let theme = 'light';
      if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
      }
      
      // Save user preference
      localStorage.setItem('theme', theme);
      
      // Update icon
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    });
  }
});

// To prevent Flash of Unstyled Content (FOUC), run a quick check immediately
(function() {
  const currentTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();
