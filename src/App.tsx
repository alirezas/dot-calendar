import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import jalaliday from 'jalaliday'
import React from 'react'
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

export const DayJsContext = React.createContext({ currentDate, dayjs })

function App(): JSX.Element {
  return (
    <>
      <DayJsContext.Provider value={{ currentDate, dayjs }}>
        <div className="container mx-auto px-4">
          <Calendar />
        </div>
      </DayJsContext.Provider>
    </>
  )
}

export default App
