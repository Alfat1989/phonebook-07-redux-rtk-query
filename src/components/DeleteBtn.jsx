import { useDeleteContactMutation } from '../redux/contactsApi';

const DeleteBtn = ({ todoId }) => {
  const [deleteDodo] = useDeleteContactMutation();

  return (
    <button type="button" onClick={() => deleteDodo(todoId)}>
      Delete
    </button>
  );
};

export default DeleteBtn;
