import { type Dayjs } from 'dayjs'
import { useContext, type ReactElement } from 'react'
import { type Event } from '../App'
import { CalendarContext } from '../context/CalendarContext'
import { faNumber } from '../utils/faNumber'

interface Props {
  day: Dayjs
}

const Day = ({ day }: Props): ReactElement => {
  const holidays = useContext(CalendarContext)?.holidays as Event[]

  const isHoliday = holidays.some(
    (event: Event) =>
      event.day === +day.format('D') && event.month === +day.format('M')
  )
  return (
    <div className="w-10">
      <div className="flex flex-col items-center justify-center w-10 h-10 leading-none">
        <time
          dateTime={day.format('YYYY-DD-mm')}
          className={
            day.get('day') === 5 || isHoliday === true ? 'text-red-500' : ''
          }
        >
          {faNumber(day.format('D'))}
        </time>
        <time
          dateTime={day.calendar('gregory').format('YYYY-DD-mm')}
          title={day.calendar('gregory').locale('en').format('DD MMM YYYY')}
          className="text-slate-400 dark:text-slate-700 mt-1 text-xs"
        >
          {day.calendar('gregory').format('D')}
        </time>
      </div>
      <div className="w-1 h-1 mx-auto">
        {day.isToday() && (
          <span className="block w-1 h-1 bg-red-600 rounded-full"></span>
        )}
      </div>
    </div>
  )
}

export default Day
