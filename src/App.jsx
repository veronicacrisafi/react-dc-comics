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
