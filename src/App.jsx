
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dcLogo from './assets/img/dc-logo.png'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import fumettiData from './data/fumettiData'

import '@fontsource-variable/open-sans';

function App() {


  return (
    <>
      <AppHeader />
      <AppMain fumetti={fumettiData} />
      <AppFooter />

    </>
  )
}

export default App
