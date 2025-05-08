import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePageView from './views/HomePageView'
import RegistrationView from './views/RegistrationView'
import DashboardView from './views/DashboardView'
import NationFormView from './views/NationFormView'
import CountryView from './views/CountryView'
import CountryTaxesView from './views/CountryTaxesView'
import CountrySpendingView from './views/CountrySpendingView'
import Layout from './components/Layout'

function App() {

  return (
    <div className="relative min-h-screen">
      <div id="background" className="bg-[url(/src/assets/globebg.png)] fixed top-0 left-0 w-full h-full bg-cover bg-center" />
      <div className="lg:w-10/12 md:w-full w-full my-3 mx-auto grid grid-cols-6 relative z-10">
        <Routes>
          <Route element={ <Layout /> } >
            <Route path="/" element={<HomePageView />} />
            <Route path="/registration"  element={<RegistrationView />}/>
            <Route path="/dashboard" element={<DashboardView />} />        
            <Route path="/newnation" element={<NationFormView />} />
            <Route path="/country/:id" element={<CountryView />} />
            <Route path="/country/settings/taxes/:id" element={<CountryTaxesView />} />
            <Route path="/country/settings/spending/:id" element={<CountrySpendingView />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
