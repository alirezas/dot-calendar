import { useReducer } from 'react'
import Calendar from './components/Calendar'
import Header from './components/Header'
import dayJsInstance from './config/dayJs'
import { DayJsContext } from './context/DayJsContext'
import { ThemeContext, themeReducer } from './context/ThemeContext'

function App(): JSX.Element {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: true })
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <>
      <ThemeContext.Provider value={{ state, dispatch }}>
        <DayJsContext.Provider value={{ dayjs: dayJsInstance }}>
          <div className="container mx-auto px-4 my-24">
            <Header />
            <Calendar />
          </div>
        </DayJsContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
