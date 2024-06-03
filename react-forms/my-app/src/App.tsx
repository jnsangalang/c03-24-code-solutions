import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';

export default function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <br />
      <RegistrationFormControlled />
    </>
  );
}
