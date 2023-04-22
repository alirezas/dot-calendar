/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export const faNumber = (latinDigit: string): string => {
  return latinDigit.replace(/\d+/g, function (digit) {
    const enDigitArr = []
    const peDigitArr = []
    let i
    let j
    for (i = 0; i < digit.length; i += 1) {
      enDigitArr.push(digit.charCodeAt(i))
    }
    for (j = 0; j < enDigitArr.length; j += 1) {
      peDigitArr.push(
        String.fromCharCode(
          // eslint-disable-next-line
          // @ts-ignore
          enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)
        )
      )
    }
    return peDigitArr.join('')
  })
}
