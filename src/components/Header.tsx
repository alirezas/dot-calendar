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
      <h1 className="dark:text-white md:text-5xl text-3xl font-extrabold leading-none">
        {faNumber(today.format('YYYY'))}
      </h1>
      <div className="mr-auto">
        <button
          onClick={toggleTheme}
          className="text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
        >
          {!theme.state.darkMode ? (
            <IconSunHigh className="w-4 h-4" />
          ) : (
            <IconMoon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
