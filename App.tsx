import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import theme from '@/theme'

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'

import { Routes } from '@/routes'
import { Loading } from '@/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  )
}
