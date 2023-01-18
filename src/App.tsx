import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import jalaliday from 'jalaliday'
import React, { useEffect, useReducer, useState } from 'react'
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

type ThemeKind = 'light' | 'dark'
interface ThemeState {
  darkMode: boolean
}
interface DarkModeAction {
  payload: ThemeKind
}
export const ThemeContext = React.createContext<{
  state: ThemeState
  dispatch: React.Dispatch<DarkModeAction>
}>({
  state: { darkMode: true },
  dispatch: () => null,
})
const themeReducer = (state: ThemeState, action: DarkModeAction) => {
  const { payload } = action
  console.log(state, payload)

  switch (payload) {
    case 'light':
      document.documentElement.classList.remove('dark')
      return {
        ...state,
        darkMode: false,
      }
    case 'dark':
      document.documentElement.classList.add('dark')
      return {
        ...state,
        darkMode: true,
      }
    default:
      document.documentElement.classList.add('dark')
      return state
  }
}
export const DayJsContext = React.createContext({ currentDate, dayjs })

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
        <DayJsContext.Provider value={{ currentDate, dayjs }}>
          <div className="container mx-auto px-4 my-24">
            <Calendar />
          </div>
        </DayJsContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
