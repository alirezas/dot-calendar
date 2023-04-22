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
