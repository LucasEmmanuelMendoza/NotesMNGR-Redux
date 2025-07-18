import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../features/notes/noteSlice";

export const Note = ({ id, title, text }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote({ id }));
  };

  return (
    <div className="note border border-black d-flex align-items-center justify-content-evenly">
      <div className="d-flex gap-2 mb-1">
        <div>{title}</div>
        <div>{text}</div>
      </div>
      <div className="d-flex gap-1">
        <Button onClick={handleDeleteNote} className="btn btn-danger">
          X
        </Button>
        <Button className="btn btn-warning">Edit</Button>
      </div>
    </div>
  );
};
