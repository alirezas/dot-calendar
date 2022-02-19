<template>
  <section>
    <div class="text-center">
      <h2 class="font-black text-stone-800 dark:text-stone-200 mb-1.5">
        {{ monthName }}
      </h2>
      <span class="text-xs text-stone-400 dark:text-stone-600">{{ gregoryMonths.join(' ~ ') }}, {{ gregoryYears.join(' ~ ') }}</span>
    </div>
    <div>
      <div class="grid grid-cols-7 gap-3 my-4 text-xs font-bold text-center text-stone-400 dark:text-stone-600">
        <span class="text-center w-14">ش</span>
        <span class="text-center w-14">ی</span>
        <span class="text-center w-14">د</span>
        <span class="text-center w-14">س</span>
        <span class="text-center w-14">چ</span>
        <span class="text-center w-14">پ</span>
        <span class="text-center w-14">ج</span>
      </div>
      <div class="grid grid-cols-7 gap-3 text-stone-800 dark:text-stone-300">
        <div v-for="day in month.startOfMonthDay"
             :key="day"
             class="flex" />
        <div v-for="day in month.daysInMonth"
             :key="day"
             class="flex flex-col items-center justify-center pt-2 pb-3 text-center rounded w-14"
             :class="{'dark:bg-stone-800 bg-stone-100' : isToday(day)}">
          <span class="text-lg font-semibold">{{ $filters.toPersianNum(day) }}</span>
          <span class="text-xs text-stone-500 dark:text-stone-400">{{ gregoryDay(day) }}</span>
          <span v-if="isToday(day)"
                class="w-1 h-1 bg-rose-600 rounded-full mt-1.5" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    month: {
      type: Object,
      default: null
    }
  },
  computed: {
    year () {
      return this.month.month.format('YYYY')
    },
    monthNo () {
      return this.month.month.format('M')
    },
    monthName () {
      return this.month.month.format('MMMM')
    },
    startOfMonth () {
      return this.month.startOfMonth
    },
    endOfMonth () {
      return this.month.endOfMonth
    },
    gregoryMonths () {
      return [
        this.startOfMonth.calendar('gregory').locale('en').format('MMMM'),
        this.endOfMonth.calendar('gregory').locale('en').format('MMMM')
      ]
    },
    gregoryYears () {
      const years = [this.startOfMonth.calendar('gregory').locale('en').format('YYYY')]
      if (this.endOfMonth.calendar('gregory').locale('en').format('YYYY') !== this.startOfMonth.calendar('gregory').locale('en').format('YYYY')) {
        years.push(this.endOfMonth.calendar('gregory').locale('en').format('YYYY'))
      }
      return years
    }
  },
  methods: {
    isToday (day) {
      return this.month.isCurrentMonth && day === this.month.today
    },
    gregoryDay (day) {
      return dayjs(`${this.year}-${this.monthNo}-${day}`, { jalali: true }).calendar('gregory').format('D')
    }
  }
}
</script>
