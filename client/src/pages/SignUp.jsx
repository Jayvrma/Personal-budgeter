import './SignUp.css'
import signinImage from '../images/signin.jpg'

function SignUp() {
    return (
        <section className="signup">
            <div className="signup-card">
                <div className="signup-image">
                    <img src={signinImage} alt="Welcome to OpenBudget" />
                </div>
                <div className="signup-panel">
                    <h2>Create an account</h2>
                    <form className="signup-form">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
