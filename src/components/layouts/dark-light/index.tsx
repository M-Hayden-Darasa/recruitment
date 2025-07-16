import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-10 h-10 max-tablet:w-8 max-tablet:h-8 rounded bg-gray-800 dark:bg-gray-200 text-black transition cursor-pointer rounded-full"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
