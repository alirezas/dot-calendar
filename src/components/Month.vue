<template>
  <section>
    <h2 class="font-black text-center text-gray-800">{{ month.monthName }}</h2>
    <div>
      <div class="grid grid-cols-7 gap-3 my-4 text-xs font-bold text-gray-400">
        <span>ش</span>
        <span>ی</span>
        <span>د</span>
        <span>س</span>
        <span>چ</span>
        <span>پ</span>
        <span>ج</span>
      </div>
      <div class="grid grid-cols-7 gap-3">
        <div v-for="day in month.startOfMonth"
             :key="day">
        </div>
        <div v-for="day in month.daysInMonth"
             :key="day">
          <span>{{ $filters.toPersianNum(day) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/fa'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(jalaliday)
dayjs.calendar('jalali')
dayjs.tz.setDefault('Asia/Tehran')
dayjs.locale('fa')

export default {
    props: {
        month: {
            type: Object,
            default: null
        }
    }
}
</script>