import { useContext, type ReactElement } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'
import { CalendarContext } from '../context/CalendarContext'
import Month from './Month'

const Calendar = (): ReactElement => {
  const dayjs = useContext(CalendarContext)?.dayjs as dayJsInstanceType

  const firstDayOfYear = dayjs().startOf('year')
  const lastDayOfYear = dayjs().endOf('year')
  const duration = dayjs.duration(lastDayOfYear.diff(firstDayOfYear))
  const months = duration.months()

  return (
    <div className="md:grid-cols-3 md:grid whitespace-nowrap md:whitespace-normal snap-mandatory snap-x md:w-auto relative flex w-full gap-16 overflow-x-auto text-center">
      {Array(months)
        .fill(null)
        .map((month, idx) => (
          <Month key={idx} month={dayjs().month(idx)} />
        ))}
    </div>
  )
}

export default Calendar
