import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/contactsApi';
import DeleteBtn from './DeleteBtn';

const Contacts = () => {
  const { data = [], error, isLoading } = useGetContactsQuery();
  const contactsValue = useSelector(state => state.filter);

  const visibleContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(contactsValue.toLowerCase())
  );

  const children = visibleContacts.map(({ id, name, phone }) => (
    <li key={id}>
      <p>
        <b>{name} </b> :{phone}
      </p>
      <DeleteBtn todoId={id} />

      <hr />
    </li>
  ));

  return (
    <>
      {isLoading ? <h2>Deleting...</h2> : null}
      <ul>
        {error ? (
          <h2>Sorry contacts is not found</h2>
        ) : isLoading ? (
          <h2>Loading.....</h2>
        ) : (
          children
        )}
      </ul>
    </>
  );
};

export default Contacts;
