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
        isCurrentDay ? 'bg-zinc-100 dark:bg-zinc-800' : ''
      }`}
    >
      <span className="text-zinc-800 font-semibold dark:text-zinc-50">
        {faNumber(date.format('D'))}
      </span>
      <span className="text-xs text-zinc-400 dark:text-zinc-500">
        {georgyDate.format('D')}
      </span>
    </div>
  )
}

export default Day
