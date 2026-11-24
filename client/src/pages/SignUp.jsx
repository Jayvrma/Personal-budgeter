import { useState, useCallback } from 'react'
import './SignUp.css'
import signinImage from '../images/signin.jpg'
import Toast from '../components/Toast.jsx'

function SignUp() {
    const [toast, setToast] = useState(null) // { message, type } or null
    const closeToast = useCallback(() => setToast(null), [])

    async function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;
        const form = new FormData(formElement);
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: form.get('username'),
                    email: form.get('email'),
                    password: form.get('password')
                }),
            })
            const data = await response.json();
            if (response.ok) {
                setToast({ message: `Account created! Welcome, ${data.username}.`, type: 'success' });
                formElement.reset();
            } else {
                setToast({ message: data.message || 'Sign up failed', type: 'error' });
            }
        } catch {
            setToast({ message: 'Could not reach the server', type: 'error' });
        }
    }

    return (
        <section className="signup">
            <div className="signup-card">
                <div className="signup-image">
                    <img src={signinImage} alt="Welcome to OpenBudget" />
                </div>
                <div className="signup-panel">
                    <h2>Create an account</h2>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}
        </section>
    )
}

export default SignUp
