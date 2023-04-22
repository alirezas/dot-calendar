import { useContext, type ReactElement } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'
import { DayJsContext } from '../context/DayJsContext'
import Month from './Month'

const Calendar = (): ReactElement => {
  const dayjs = useContext(DayJsContext)?.dayjs as dayJsInstanceType

  const firstDayOfYear = dayjs().startOf('year')
  const lastDayOfYear = dayjs().endOf('year')
  const duration = dayjs.duration(lastDayOfYear.diff(firstDayOfYear))
  const months = duration.months()

  return (
    <>
      <div className="grid grid-cols-3 text-center gap-16">
        {Array(months)
          .fill(null)
          .map((month, idx) => (
            <Month key={idx} month={dayjs().month(idx)} />
          ))}
      </div>
    </>
  )
}

export default Calendar
