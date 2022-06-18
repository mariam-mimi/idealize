export default function AccountEditForm() {
    return (
        <div className="card">
            <h1>Edit Account</h1>
            <label for="u_username">Username:</label>
            <input type="text" id="u_username" name="u_user_name" />

            <label for="u_mail">Email:</label>
            <input type="email" id="u_mail" name="u_user_email" />

            <label for="change_password">Change Password:</label>
            <input type="password" id="change_password" name="user_change_password" />

            <label for="u_confirm_password">Confirm Password:</label>
            <input type="password" id="u_confirm_password" name="u_user_confirm_password" />
            
            <button className="save-changes-btn">Save changes</button>
        </div>
    )
}