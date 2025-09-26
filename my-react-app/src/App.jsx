
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dcLogo from './assets/img/dc-logo.png'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

import '@fontsource-variable/open-sans';
const film = ["batman", "superman", "flash"]
function App() {


  return (
    <>
      <AppHeader film={film} />
      <AppMain />
      <AppFooter />

    </>
  )
}

export default App
