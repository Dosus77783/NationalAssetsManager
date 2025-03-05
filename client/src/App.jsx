import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePageView from './views/HomePageView'
import RegistrationView from './views/RegistrationView'
import { NavigationBar } from './components/NavigationBar'
import DashboardView from './views/DashboardView'

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/registration"  element={<RegistrationView />}/>
        <Route path="/dashboard" element={<DashboardView />} />        
        {/* <Route path="/newnation" element={<NationFormView />} />
        <Route path="/country/:id" element={<CountryView />} />
        <Route path="/country/settings/taxes/:id" element={<CountryTaxesView />} />
        <Route path="/country/settings/spending/:id" element={<CountrySpendingView />} /> */}
      </Routes>
    </>
  )
}

export default App
