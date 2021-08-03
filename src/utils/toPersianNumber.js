export default function toPersianNum (num) {
  num = String(num)
  const len = num.length
  let res = ''
  let pos
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

  for (let i = 0; i < len; i++) {
    if ((pos = persianNumbers[num.charAt(i)])) {
      res += pos
    } else {
      res += num.charAt(i)
    }
  }
  return res
}
