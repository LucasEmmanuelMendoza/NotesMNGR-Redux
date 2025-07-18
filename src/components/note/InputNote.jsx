import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateField } from "../../features/notes/noteSlice";

export const InputNote = ({}) => {
  const inputTitle = useSelector((state) => state.notes.inputTitle);
  const inputText = useSelector((state) => state.notes.inputText);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      updateField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleAddNote = () => {
    dispatch(
      addNote({
        title: inputTitle,
        text: inputText,
      })
    );
  };

  return (
    <>
      <input
        onChange={handleChange}
        name="inputTitle"
        type="text"
        placeholder="Write a title"
      />
      <textarea
        onChange={handleChange}
        name="inputText"
        placeholder="Write a note"
      />
      <br />
      <Button onClick={handleAddNote}>Add Note</Button>
    </>
  );
};
