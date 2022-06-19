export default function CreateUserhtmlForm() {
    return (
        <div>
            <form method="post" className="signup-form">
                <fieldset>
                    <h1 className="htmlForm-header">Create Account</h1>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="user_name" />

                    <label htmlFor="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" />

                    <label htmlFor="create_password">Create Password:</label>
                    <input type="password" id="create_password" name="user_create_password" />

                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="user_confirm_password" />

                    <button type="submit" className="login-btn">Sign up</button>

                    <p className="text-center">Already have an account? <a href="log-in.html">Log-in</a></p>
                </fieldset>
            </form>
        </div>
    )
}