'use client'

import theme from '@weave-design/theme-data/build/esm/darkGrayLowDensityTheme';
import ThemeContext from '@weave-design/theme-context';

export function Providers({ children }) {
  console.log('a');

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
