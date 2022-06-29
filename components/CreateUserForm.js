import styles from '../styles/UserForm.module.css';

export default function CreateUserhtmlForm() {
  return (
    <div>
      <form method="post" className={styles.signupForm}>
        <fieldset className={styles.formGroup}>
          <h1 className={styles.formHeader}>Create Account</h1>
          <label htmlFor="username" className={styles.formLabel}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="user_name"
            className={styles.formControl}
          />

          <label htmlFor="mail" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className={styles.formControl}
          />

          <label htmlFor="create_password" className={styles.formLabel}>
            Create Password:
          </label>
          <input
            type="password"
            id="create_password"
            name="user_create_password"
            className={styles.formControl}
          />

          <label htmlFor="confirm_password" className={styles.formLabel}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_password"
            name="user_confirm_password"
            className={styles.formControl}
          />

          <button type="submit" className={styles.loginBtn}>
            Sign up
          </button>

          <p className="text-center">
            Already have an account? <a href="log-in.html">Log-in</a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
