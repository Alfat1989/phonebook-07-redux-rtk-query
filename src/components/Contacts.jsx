import { useGetContactsQuery } from '../redux/contactsApi';
import DeleteBtn from './DeleteBtn';

const Contacts = () => {
  const { data = [], error, isLoading } = useGetContactsQuery();
  const children = data.map(({ id, name, phone }) => (
    <li key={id}>
      <p>
        <b>{name} </b> :{phone}
      </p>
      <DeleteBtn todoId={id} />
      {/* <button type="button">Delete</button> */}
      <hr />
    </li>
  ));

  return (
    <ul>
      {error ? (
        <h2>Sorry contacts is not found</h2>
      ) : isLoading ? (
        <h2>Loading.....</h2>
      ) : (
        children
      )}
    </ul>
  );
};

export default Contacts;
