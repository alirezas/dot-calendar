import { createContext } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'
import { type Event } from '../types/Event'

interface CalendarContextType {
  dayjs: dayJsInstanceType
  persianHolidays: Event[]
  hijriHolidays: Event[]
}

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
)
