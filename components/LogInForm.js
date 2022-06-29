export default function LogInForm() {
  return (
    <div>
      <form method="post" className="login-form">
        <div>
          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="user_password" />

          <button type="submit" className="login-btn">
            Log In
          </button>

          <a href="#">
            <p className="text-center">Forgot password?</p>
          </a>

          <span className="form-line"></span>

          <a role="button" href="sign-up.html" className="create-account-btn">
            Create new account
          </a>
        </div>
      </form>
    </div>
  );
}
