import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {/* TODO: add routes, e.g. <Route path="transactions" element={<Transactions />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
