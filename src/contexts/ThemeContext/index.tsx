import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider as ThemeProviderStyledComponents } from "styled-components";
import { IThemeMode } from "@/styles/configs/types";
import { theme as initialTheme } from "@/styles/configs/theme"
import { colorsModeDark, colorsModeLight } from "@/styles/configs/colorsMode";
import { breakFonts } from "@/styles/configs/breakpoints";

interface IThemeContextValues {
  theme: DefaultTheme,
  setTheme: Dispatch<SetStateAction<DefaultTheme>>,
  toggleThemeMode: () => void,
  themeMode: IThemeMode
}

interface IThemeProvider {
  children: ReactNode
}

export const ThemeContext = createContext({} as IThemeContextValues)


const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState(initialTheme)
  const [themeMode, setThemeMode] = useState<IThemeMode>('dark')


  const setThemeLightMode = () => {
    setThemeMode('light')
    localStorage.setItem('theme_mode', 'light')
    setTheme(prev => ({
      ...prev,
      colors: colorsModeLight
    }))
  }

  const setThemeDarkMode = () => {
    setThemeMode('dark')
    localStorage.setItem('theme_mode', 'dark')
    setTheme(prev => ({
      ...prev,
      colors: colorsModeDark
    }))
  }
  const toggleThemeMode = () => {
    if (themeMode === 'dark') {
      setThemeLightMode()
    } else {
      setThemeDarkMode()
    }

  }

  useEffect(() => {
    const handleStorageTheme = () => {
      const themeStorage = localStorage.getItem('theme_mode') as IThemeMode | undefined
      if (!themeStorage) return
      if (themeStorage === 'dark') {
        setThemeDarkMode()

      } else {
        setThemeLightMode()
        console.log()
      }

    }
    handleStorageTheme()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.matchMedia(`(max-width: ${theme.breakpoints.md})`).matches) {
        setTheme(prevTheme => ({
          ...prevTheme,
          font: {
            ...prevTheme.font,
            size: breakFonts.md
          }
        }))
        return
      }
      if (window.matchMedia(`(max-width: ${theme.breakpoints.md})`).matches) {
        setTheme(prevTheme => ({
          ...prevTheme,
          font: {
            ...prevTheme.font,
            size: breakFonts.md
          }
        }))
        return
      }
      if (window.matchMedia(`(max-width: ${theme.breakpoints.sm})`).matches) {
        setTheme(prevTheme => ({
          ...prevTheme,
          font: {
            ...prevTheme.font,
            size: breakFonts.sm
          }
        }))
        return
      }
      else {
        setTheme(initialTheme)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      toggleThemeMode,
      themeMode
    }}>
      <ThemeProviderStyledComponents theme={theme}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>

  )
}

export default ThemeProvider