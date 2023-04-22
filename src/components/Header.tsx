import { IconMoon, IconSunHigh } from '@tabler/icons-react'
import { useContext, type ReactElement } from 'react'
import { type dayJsInstanceType } from '../config/dayJs'
import { DayJsContext } from '../context/DayJsContext'
import { ThemeContext } from '../context/ThemeContext'
import { faNumber } from '../utils/faNumber'

const Header = (): ReactElement => {
  const dayjs = useContext(DayJsContext)?.dayjs as dayJsInstanceType
  const theme = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const toggle = theme.state.darkMode ? 'light' : 'dark'
    localStorage.theme = toggle
    theme.dispatch({ payload: toggle })
  }

  const today = dayjs().startOf('day')

  return (
    <div className="flex items-center mb-20">
      <h1 className="dark:text-white font-extrabold text-5xl leading-none">
        {faNumber(today.format('YYYY'))}
      </h1>
      <div className="mr-auto">
        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center text-slate-600 dark:text-white rounded-full cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900"
        >
          {!theme.state.darkMode ? (
            <IconSunHigh className="h-4 w-4" />
          ) : (
            <IconMoon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
