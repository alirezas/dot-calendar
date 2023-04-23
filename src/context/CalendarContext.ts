import { createContext } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'

interface CalendarContextType {
  dayjs: dayJsInstanceType
  holidays: object
}

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
)
