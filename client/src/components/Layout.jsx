import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'
import './Layout.css'

function Layout() {
  const { user } = useAuth()

  return (
    <>
      <header>
        <nav className="nav">
          <NavLink to="/" className="nav-brand">OpenBudget</NavLink>
          <NavLink to="/categories" end className="nav-link">Categories</NavLink>
          {user ? (
            <NavLink to="/profile" end className="nav-profile" aria-label="Profile">
              <img src="/user.png" alt={user.username} />
            </NavLink>
          ) : (
            <NavLink to="/login" end className="nav-link nav-login">Login</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
