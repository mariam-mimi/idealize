import styles from '../styles/UserForm.module.css';

export default function LogInForm() {
  return (
    <div>
      <form method="post" className={styles.loginForm}>
        <fieldset className={styles.formGroup}>
          <label htmlFor="mail" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className={styles.formControl}
          />

          <label htmlFor="password" className={styles.formLabel}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="user_password"
            className={styles.formControl}
          />

          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>

          <a href="#">
            <p className="text-center">Forgot password?</p>
          </a>

          <span className={styles.formLine}></span>

          <a
            role="button"
            href="sign-up.html"
            className={styles.createAccountBtn}
          >
            Create new account
          </a>
        </fieldset>
      </form>
    </div>
  );
}
