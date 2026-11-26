import { useState, useCallback } from 'react'
import './Login.css'
import signinImage from '../images/signin.jpg'
import { useNavigate } from 'react-router'
import Toast from '../components/Toast.jsx'
import { useAuth } from '../context/AuthContext.jsx'

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [toast, setToast] = useState(null) // { message, type } or null
    const closeToast = useCallback(() => setToast(null), [])

    async function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;
        const form = new FormData(formElement);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: form.get('username'),
                    password: form.get('password')
                }),
            })
            const data = await response.json();
            if (response.ok) {
                login(data);
                navigate('/profile');
            } else {
                setToast({ message: data.message || 'Login failed', type: 'error' });
            }
        } catch {
            setToast({ message: 'Could not reach the server', type: 'error' });
        }
    }

    return (
        <section className="login">
            <div className="login-card">
                <div className="login-image">
                    <img src={signinImage} alt="Welcome to OpenBudget" />
                </div>
                <div className="login-panel">
                    <h2>Log in to your account</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <button type="submit">Log In</button>
                        <h3>Don't have an account? <a href="/sign-up">Sign Up</a></h3>
                    </form>
                </div>
            </div>
            {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}
        </section>
    )
}

export default Login
