import dayjs from 'dayjs'
import { useContext } from 'react'
import { DayJsContext } from '../App'
import Month from './Month'

const Calendar = (): JSX.Element => {
  const { dayjs } = useContext(DayJsContext)
  const calendar = [...Array(12).keys()].reduce(
    (acc: dayjs.Dayjs[], el: number) => {
      return [...acc, dayjs().month(el)]
    },
    []
  )

  return (
    <>
      <div className="grid grid-cols-3 gap-20 my-24">
        {calendar.map((month, idx) => (
          <Month key={idx} month={month} />
        ))}
      </div>
    </>
  )
}

export default Calendar
