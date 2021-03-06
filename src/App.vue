
<template>
  <header class="flex items-center mb-8">
    <h1 class="text-5xl font-black text-stone-900 dark:text-white">
      {{ $filters.toPersianNum(currentDate.jalali.year) }}
    </h1>
    <div class="mr-auto">
      <button
        class="flex items-center justify-center w-8 h-8 cursor-pointer"
        @click="toggleTheme"
      >
        <svg
          v-if="state.currentTheme === 'light'"
          class="w-6 h-6 text-stone-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-if="state.currentTheme === 'dark'"
          class="w-6 h-6 text-stone-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </header>
  <main class="grid grid-cols-3 gap-20">
    <Month
      v-for="(month, index) in cal"
      :key="index"
      :month="month"
    />
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'
import updateLocale from 'dayjs/plugin/updateLocale'
import toObject from 'dayjs/plugin/toObject'
import Month from './components/Month.vue'
import 'dayjs/locale/fa'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(updateLocale)
dayjs.extend(toObject)
dayjs.extend(jalaliday)
dayjs.calendar('jalali')
dayjs.tz.setDefault('Asia/Tehran')
dayjs.locale('fa')

dayjs.updateLocale('fa', {
  weekStart: 0,
  weekdays: [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه'
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
    'اسفند'
  ]
})

const currentDate = {
  jalali: {
    original: dayjs(),
    year: dayjs().format('YYYY'),
    month: dayjs().get('month'),
    day: parseInt(dayjs().format('D'), 10)
  },
  gregory: {
    original: dayjs().calendar('gregory'),
    year: dayjs().calendar('gregory').format('YYYY'),
    month: dayjs().calendar('gregory').get('month'),
    day: parseInt(dayjs().calendar('gregory').format('D'), 10)
  }
}

const cal = [...Array(12).keys()].reduce((acc, item) => {
  const month = dayjs().month(item)
  const isCurrentMonth = item === currentDate.jalali.month
  const today = isCurrentMonth ? currentDate.jalali.day : null
  const daysInMonth = month.daysInMonth()
  const startOfMonth = dayjs(`${currentDate.jalali.year}-${month.format('M')}-1`, { jalali: true })
  const endOfMonth = dayjs(`${currentDate.jalali.year}-${month.format('M')}-${daysInMonth}`, { jalali: true })
  const startOfMonthDay = month.startOf('month').get('Day') === 6 ? 0 : month.startOf('month').get('Day') + 1

  const monthData = {
    month,
    isCurrentMonth,
    today,
    daysInMonth,
    startOfMonthDay,
    startOfMonth,
    endOfMonth
  }

  return [...acc, monthData]
}, [])

const state = reactive({ currentTheme: null })

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  state.currentTheme = 'dark'
} else {
  state.currentTheme = 'light'
}

const toggleTheme = () => {
  state.currentTheme = localStorage.theme = state.currentTheme === 'dark' ? 'light' : 'dark'
  if (state.currentTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>
