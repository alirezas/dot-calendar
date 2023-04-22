import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import jalaliday from 'jalaliday'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

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
export const DayJsContext = React.createContext({ currentDate, dayjs })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DayJsContext.Provider value={{ currentDate, dayjs }}>
      <App />
    </DayJsContext.Provider>
  </React.StrictMode>
)
