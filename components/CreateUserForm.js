import formStyles from '../styles/Forms.module.css';
import userFormStyles from '../styles/UserForm.module.css';
import Link from 'next/link';

export default function CreateUserhtmlForm() {
  return (
    <div>
      <form method="post" className={userFormStyles.signupForm}>
        <fieldset className={formStyles.formGroup}>
          <h1 className={userFormStyles.formHeader}>Create Account</h1>
          <label htmlFor="username" className={formStyles.formLabel}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="user_name"
            className={formStyles.formControl}
          />

          <label htmlFor="mail" className={formStyles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className={formStyles.formControl}
          />

          <label htmlFor="create_password" className={formStyles.formLabel}>
            Create Password:
          </label>
          <input
            type="password"
            id="create_password"
            name="user_create_password"
            className={formStyles.formControl}
          />

          <label htmlFor="confirm_password" className={formStyles.formLabel}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_password"
            name="user_confirm_password"
            className={formStyles.formControl}
          />

          <button type="submit" className={userFormStyles.loginBtn}>
            Sign up
          </button>

          <p className="text-center">
            Already have an account?
            <Link href="log-in.html">
              <a>Log-in</a>
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
