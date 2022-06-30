import formStyles from '../styles/Forms.module.css';

export default function AccountEditForm() {
  return (
    <div className="card">
      <fieldset className={formStyles.formGroup}>
        <h1>Edit Account</h1>
        <label htmlFor="u_username" className={formStyles.formLabel}>
          Username:
        </label>
        <input
          type="text"
          id="u_username"
          name="u_user_name"
          className={formStyles.formControl}
        />

        <label htmlFor="u_mail" className={formStyles.formLabel}>
          Email:
        </label>
        <input
          type="email"
          id="u_mail"
          name="u_user_email"
          className={formStyles.formControl}
        />

        <label htmlFor="change_password" className={formStyles.formLabel}>
          Change Password:
        </label>
        <input
          type="password"
          id="change_password"
          name="user_change_password"
          className={formStyles.formControl}
        />

        <label htmlFor="u_confirm_password" className={formStyles.formLabel}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="u_confirm_password"
          name="u_user_confirm_password"
          className={formStyles.formControl}
        />

        <button className="save-changes-btn">Save changes</button>
      </fieldset>
    </div>
  );
}
