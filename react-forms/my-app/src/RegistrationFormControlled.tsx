import { FormEvent } from 'react';
import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append('username', username);
    formData.append('password', password);
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}
