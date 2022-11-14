import { useState } from 'react';
import { useAddContactMutation } from '../redux/contactsApi';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  //   const {}

  const onInput = e => {
    const value = e.target.value;
    e.target.name === 'name' ? setName(value) : setPhone(value);
  };

  const clearState = () => {
    setName('');
    setPhone('');
  };
  const onFormSubmit = e => {
    e.preventDefault();
    clearState();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type={'text'}
        value={name}
        name="name"
        placeholder="name"
        onInput={onInput}
      />
      <input
        type={'phone'}
        value={phone}
        name="phone"
        placeholder="phone"
        onInput={onInput}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
