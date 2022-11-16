import { useState } from 'react';
import { useAddContactMutation } from '../redux/contactsApi';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addTodo, { isLoading }] = useAddContactMutation();

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
    addTodo({ name, phone });
    clearState();
  };

  return (
    <>
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
        <button type="submit" disabled={name === '' || phone === ''}>
          ADD
        </button>
      </form>
      {isLoading && <h2>Loading...</h2>}
    </>
  );
};

export default Form;
