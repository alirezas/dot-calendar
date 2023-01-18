import { type Dayjs } from 'dayjs'
import { useContext } from 'react'
import { DayJsContext } from '../App'
import Day from './Day'

interface Props {
  month: Dayjs
}

const Month = ({ month }: Props): JSX.Element => {
  const { currentDate, dayjs } = useContext(DayJsContext)
  const daysInMonth = month.daysInMonth()
  const startDay =
    month.startOf('month').get('day') === 6
      ? 0
      : month.startOf('month').get('day') + 1
  const startOfMonth = dayjs(
    `${currentDate.format('YYYY')}-${month.format('M')}-1`,
    {
      // eslint-disable-next-line
      // @ts-ignore
      jalali: true,
    }
  )
  const endOfMonth = dayjs(
    `${currentDate.format('YYYY')}-${month.format('M')}-${daysInMonth}`,
    {
      // eslint-disable-next-line
      // @ts-ignore
      jalali: true,
    }
  )
  const gregoryMonths = [
    startOfMonth.calendar('gregory').locale('en').format('MMMM'),
    endOfMonth.calendar('gregory').locale('en').format('MMMM'),
  ]
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <span className="font-black text-zinc-800 mb-1.5 dark:text-zinc-50">
          {month.format('MMMM')}
        </span>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {gregoryMonths.join(' ~ ')}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-3 text-xs font-semibold text-center text-zinc-300 dark:text-zinc-500">
        <span>ش</span>
        <span>ی</span>
        <span>د</span>
        <span>س</span>
        <span>چ</span>
        <span>پ</span>
        <span>ج</span>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-3">
          {[...Array(startDay).keys()].map((day, idx) => (
            <span key={idx} />
          ))}
          {[...Array(daysInMonth).keys()].map((el, idx) => {
            const day = ++idx
            return (
              <Day
                key={idx}
                date={dayjs(
                  `${currentDate.format('YYYY')}-${month.format('M')}-${day}`,
                  {
                    // eslint-disable-next-line
                    // @ts-ignore
                    jalali: true,
                  }
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Month
