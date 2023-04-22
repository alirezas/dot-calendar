import { createContext } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'

interface DayJsContextType {
  dayjs: dayJsInstanceType
}

export const DayJsContext = createContext<DayJsContextType | undefined>(
  undefined
)
