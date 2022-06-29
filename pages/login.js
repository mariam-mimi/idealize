import { background } from '../styles/UserForm.styles';
import styles from '../styles/UserForm.module.css';

import LogInForm from '../components/LogInForm';

export default function LoginPage() {
  return (
    <div className={styles.loginFlex}>
      <div>
        <h1 className={styles.loginH1}>Idealize</h1>
        <p>We need to insert cool saying here.</p>
      </div>
      <LogInForm />
      <style jsx global>
        {background}
      </style>
    </div>
  );
}

LoginPage.overrideLayout = (page) => page;
