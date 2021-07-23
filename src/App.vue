<template>
  <header class="mb-8">
    <h1 class="text-5xl font-black text-gray-900">{{ $filters.toPersianNum(year) }}</h1>
  </header>
  <main class="grid grid-cols-3 gap-20">
    <Month v-for="month, index in cal"
           :key="index"
           :month="month" />
  </main>
</template>

<script setup>
import Month from './components/Month.vue'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/fa'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(updateLocale)
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
    'اسفند'
  ]
})

const year = dayjs().format('YYYY')
const cal = [...Array(12).keys()].reduce((acc, item) => {
    const month = dayjs().month(item)
    const monthName = month.format('MMMM')
    const daysInMonth = month.daysInMonth()
    const startOfMonth = month.startOf('month').get('Day') + 1

    const monthData = {
        month,
        monthName,
        daysInMonth,
        startOfMonth
    }

    return [...acc, monthData]
}, [])

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>
