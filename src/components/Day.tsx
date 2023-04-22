import { type Dayjs } from 'dayjs'
import { type ReactElement } from 'react'
import { faNumber } from '../utils/faNumber'

interface Props {
  day: Dayjs
}

const Day = ({ day }: Props): ReactElement => {
  return (
    <div>
      <div className="flex items-center justify-center leading-none h-8 w-8">
        <time dateTime={day.format('YYYY-DD-mm')}>
          {faNumber(day.format('D'))}
        </time>
      </div>
      <div className="h-1 w-1 mx-auto">
        {day.isToday() && (
          <span className="block h-1 w-1 rounded-full bg-red-600"></span>
        )}
      </div>
    </div>
  )
}

export default Day
