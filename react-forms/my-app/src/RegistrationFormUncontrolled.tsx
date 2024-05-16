import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formVal = Object.fromEntries(formData.entries());
    console.log(
      'Username:',
      formVal.username,
      ',',
      'Password:',
      formVal.password
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input name="username" />
      </label>
      <label>
        <span>Password</span>
        <input name="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}
