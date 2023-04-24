import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'
import dayJsInstance from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isToday from 'dayjs/plugin/isToday'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import weekday from 'dayjs/plugin/weekday'

import 'dayjs/locale/fa'

dayJsInstance.extend(timezone)
dayJsInstance.extend(updateLocale)
dayJsInstance.extend(duration)
dayJsInstance.extend(isToday)
dayJsInstance.extend(weekday)
dayJsInstance.extend(jalaliPlugin)
// dayJsInstance.extend(hijri)

dayJsInstance.calendar('jalali')
dayJsInstance.tz.setDefault('Asia/Tehran')
dayJsInstance.locale('fa')
dayJsInstance.updateLocale('fa', {
  weekdays: [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
  ],
  months: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
})

type dayJsInstanceType = typeof dayJsInstance

export { type dayJsInstanceType }
export default dayJsInstance
