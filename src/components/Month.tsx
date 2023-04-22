import { type Dayjs } from 'dayjs'
import { useContext, type ReactElement } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'
import { DayJsContext } from '../context/DayJsContext'
import Day from './Day'

interface Props {
  month: Dayjs
}

const Month = ({ month }: Props): ReactElement => {
  const dayjs = useContext(DayJsContext)?.dayjs as dayJsInstanceType
  const startOfMonth = Array.from({ length: month.day() }, (_, i) => i + 1)
  const days = Array.from({ length: dayjs().daysInMonth() }, (_, i) =>
    month.date(i + 1)
  )

  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <h2 className="font-bold text-slate-700 dark:text-slate-300 text-lg">
          {month.format('MMMM')}
        </h2>
        <p></p>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-3 font-semibold text-sm text-slate-500 dark:text-slate-700 mb-4">
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            ش
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            ی
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            د
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            س
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            چ
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            پ
          </span>
          <span className="flex w-8 h-8 justify-center items-center leading-none">
            ج
          </span>
        </div>
        <div className="grid grid-cols-7 gap-3 text-slate-700 dark:text-slate-400">
          {startOfMonth.map((day, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center leading-none h-8 w-8"
            ></div>
          ))}
          {days.map((day, idx) => (
            <Day key={idx} day={day} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Month
