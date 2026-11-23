import { Link } from 'react-router'

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </section>
  )
}

export default NotFound
