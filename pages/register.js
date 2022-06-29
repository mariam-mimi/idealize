import { background } from '../styles/UserForm.styles';

import CreateUserForm from '../components/CreateUserForm';

export default function UserRegistrationPage() {
  return (
    <>
      <CreateUserForm />
      <style jsx global>
        {background}
      </style>
    </>
  );
}

UserRegistrationPage.overrideLayout = (page) => page;
