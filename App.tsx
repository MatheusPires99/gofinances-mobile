import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/pages/Dashboard';
import { theme } from './src/styles';
import { fonts } from './src/assets/fonts';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
