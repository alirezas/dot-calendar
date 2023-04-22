import { createContext } from 'react'

type ThemeKind = 'light' | 'dark'

interface ThemeState {
  darkMode: boolean
}
interface DarkModeAction {
  payload: ThemeKind
}
export const ThemeContext = createContext<{
  state: ThemeState
  dispatch: React.Dispatch<DarkModeAction>
}>({
  state: { darkMode: true },
  dispatch: () => null,
})

export const themeReducer = (
  state: ThemeState,
  action: DarkModeAction
): ThemeState => {
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
