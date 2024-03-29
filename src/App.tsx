import { useReducer } from 'react'
import Calendar from './components/Calendar'
import Header from './components/Header'
import ReloadPrompt from './components/ReloadPromp'
import dayJsInstance from './config/dayJs'
import { CalendarContext } from './context/CalendarContext'
import { ThemeContext, themeReducer } from './context/ThemeContext'
import events from './data/events.json'

const persianCalendar = events['Persian Calendar']
const hijriCalendar = events['Hijri Calendar']
const iranPersianEvents = persianCalendar.filter(
  (event) => event.type === 'Iran'
)
const iranPersianHolidays = iranPersianEvents.filter((event) => event.holiday)
const iranHijriEvents = hijriCalendar.filter((event) => event.type === 'Iran')
const iranHijriHolidays = iranHijriEvents.filter((event) => event.holiday)

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
        <CalendarContext.Provider
          value={{
            dayjs: dayJsInstance,
            persianHolidays: iranPersianHolidays,
            hijriHolidays: iranHijriHolidays,
          }}
        >
          <div className="md:my-24 container px-4 mx-auto my-12">
            <ReloadPrompt />
            <Header />
            <Calendar />
          </div>
        </CalendarContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
