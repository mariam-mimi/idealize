import formStyles from '../styles/Forms.module.css';
import userFormStyles from '../styles/UserForm.module.css';
import Link from 'next/link';

export default function LogInForm() {
  return (
    <div>
      <form method="post" className={userFormStyles.authForm}>
        <fieldset className={formStyles.formGroup}>
          <label htmlFor="mail" className={formStyles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className={formStyles.formControl}
          />

          <label htmlFor="password" className={formStyles.formLabel}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="user_password"
            className={formStyles.formControl}
          />

          <button type="submit" className={userFormStyles.loginBtn}>
            Log In
          </button>

          <a href="#">
            <p className="text-center">Forgot password?</p>
          </a>

          <span className={userFormStyles.formLine}></span>

          <Link href="/">
            <a role="button" className={userFormStyles.createAccountBtn}>
              Create new account
            </a>
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
