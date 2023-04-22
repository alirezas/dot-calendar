import React, { useReducer } from 'react'
import Calendar from './components/Calendar'

type ThemeKind = 'light' | 'dark'
interface ThemeState {
  darkMode: boolean
}
interface DarkModeAction {
  payload: ThemeKind
}
export const ThemeContext = React.createContext<{
  state: ThemeState
  dispatch: React.Dispatch<DarkModeAction>
}>({
  state: { darkMode: true },
  dispatch: () => null,
})
const themeReducer = (state: ThemeState, action: DarkModeAction) => {
  const { payload } = action
  console.log(state, payload)

  switch (payload) {
    case 'light':
      document.documentElement.classList.remove('dark')
      return {
        ...state,
        darkMode: false,
      }
    case 'dark':
      document.documentElement.classList.add('dark')
      return {
        ...state,
        darkMode: true,
      }
    default:
      document.documentElement.classList.add('dark')
      return state
  }
}

function App(): JSX.Element {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: true })
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return (
    <>
      <ThemeContext.Provider value={{ state, dispatch }}>
        <div className="container mx-auto px-4 my-24">
          <Calendar />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
