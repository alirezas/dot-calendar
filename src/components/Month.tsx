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
  const gregoryStartMonth = days[0]
    .calendar('gregory')
    .locale('en')
    .format('MMMM')
  const gregoryEndMonth = days
    .slice(-1)[0]
    .calendar('gregory')
    .locale('en')
    .format('MMMM')
  const gregoryMonth =
    gregoryStartMonth !== gregoryEndMonth
      ? `${gregoryStartMonth} ~ ${gregoryEndMonth}`
      : gregoryStartMonth

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h2 className="text-slate-700 dark:text-slate-300 text-lg font-bold">
          {month.format('MMMM')}
        </h2>
        <p className="text-slate-400 dark:text-slate-700 mt-1 text-xs">
          {gregoryMonth}
        </p>
      </div>
      <div>
        <div className="text-slate-500 dark:text-slate-700 grid grid-cols-7 gap-3 mb-4 text-sm font-semibold">
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            ش
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            ی
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            د
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            س
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            چ
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            پ
          </span>
          <span className="flex items-center justify-center w-10 h-10 leading-none">
            ج
          </span>
        </div>
        <div className="text-slate-700 dark:text-slate-400 grid grid-cols-7 gap-3">
          {startOfMonth.map((day, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-8 h-8 leading-none"
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
