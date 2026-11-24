import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/sign-up" end>Sign Up</NavLink>
          <NavLink to="/login" end>Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
