import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-yellow-300 dark:bg-indigo-600 text-gray-900 dark:text-yellow-300 font-semibold transition-all duration-300 hover:scale-110"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}

export default ThemeToggle;