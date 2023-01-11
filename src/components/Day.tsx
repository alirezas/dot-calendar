import { Dayjs } from 'dayjs'
import { useContext } from 'react'
import { DayJsContext } from '../App'
import { faNumber } from '../utils/faNumber'

interface Props {
  date: Dayjs
}

const Day = ({ date }: Props): JSX.Element => {
  const { dayjs } = useContext(DayJsContext)
  const isCurrentDay = dayjs().isSame(date, 'day')
  const georgyDate = date.calendar('gregory')
  return (
    <div
      className={`flex flex-col items-center py-3 ${
        isCurrentDay ? 'bg-slate-100' : ''
      }`}
    >
      <span className="text-slate-800 font-semibold">
        {faNumber(date.format('D'))}
      </span>
      <span className="text-xs text-slate-600">{georgyDate.format('D')}</span>
    </div>
  )
}

export default Day
