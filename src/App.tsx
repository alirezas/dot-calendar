import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import jalaliday from 'jalaliday'
import React, { useEffect, useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'

dayjs.extend(timezone)
dayjs.extend(updateLocale)
dayjs.extend(jalaliday)

// eslint-disable-next-line
// @ts-ignore
dayjs.calendar('jalali')

dayjs.tz.setDefault('Asia/Tehran')
dayjs.locale('fa')
dayjs.updateLocale('fa', {
  weekStart: 0,
  weekdays: [
    'شنبه',

    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
  ],
  months: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
})

const currentDate = dayjs()

export const ThemePrefsContext = React.createContext<
  { theme: string; setTheme: Function } | undefined
>(undefined)
export const DayJsContext = React.createContext({ currentDate, dayjs })

function App(): JSX.Element {
  const [theme, setTheme] = useState('dark')
  const themePrefsValues = { theme, setTheme }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [theme])

  return (
    <>
      <ThemePrefsContext.Provider value={themePrefsValues}>
        <DayJsContext.Provider value={{ currentDate, dayjs }}>
          <div className="container mx-auto px-4 my-24">
            <Calendar />
          </div>
        </DayJsContext.Provider>
      </ThemePrefsContext.Provider>
    </>
  )
}

export default App
