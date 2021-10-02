<template>
  <section>
    <h2 class="font-black text-center text-gray-800 dark:text-gray-200">
      {{ month.monthName }}
    </h2>
    <div>
      <div class="grid grid-cols-7 gap-3 my-4 text-xs font-bold text-center text-gray-400 dark:text-gray-600">
        <span class="text-center w-14">ش</span>
        <span class="text-center w-14">ی</span>
        <span class="text-center w-14">د</span>
        <span class="text-center w-14">س</span>
        <span class="text-center w-14">چ</span>
        <span class="text-center w-14">پ</span>
        <span class="text-center w-14">ج</span>
      </div>
      <div class="grid grid-cols-7 gap-3 text-gray-800 dark:text-gray-300">
        <div v-for="day in month.startOfMonth"
             :key="day"
             class="flex" />
        <div v-for="day in month.daysInMonth"
             :key="day"
             class="flex flex-col items-center justify-center pt-2 pb-3 text-center rounded w-14"
             :class="{'dark:bg-gray-800 bg-gray-100' : month.isCurrentMonth && day === month.today}">
          <span class="text-lg font-semibold">{{ $filters.toPersianNum(day) }}</span>
          <!-- <span class="text-xs text-gray-500 dark:text-gray-400">{{ day }}</span> -->
          <span v-if="month.isCurrentMonth && day === month.today"
                class="w-1 h-1 bg-red-600 rounded-full mt-1.5" />
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
