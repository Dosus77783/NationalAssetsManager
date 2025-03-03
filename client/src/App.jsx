import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/registration"  element={<RegistrationView />}/>
        <Route path="/dashboard" element={<DashboardView />} />        
        <Route path="/newnation" element={<NationFormView />} />
        <Route path="/country" element={<CountryView />} />
        <Route path="/country/taxes" element={<CountryTaxesView />} />
        <Route path="/country/spending" element={<CountrySpendingView />} />
      </Routes>
    </>
  )
}

export default App
