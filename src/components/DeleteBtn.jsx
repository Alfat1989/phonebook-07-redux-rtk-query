import { useDeleteContactMutation } from '../redux/contactsApi';

const DeleteBtn = ({ todoId }) => {
  const [deleteDodo] = useDeleteContactMutation();
  // const DeleteTodo = () => {

  // }

  return (
    <button type="button" onClick={() => deleteDodo(todoId)}>
      Delete
    </button>
  );
};

export default DeleteBtn;
