import { useSelector } from "react-redux";
import { Note } from "./Note";

export const NotesContainer = () => {
  const notes = useSelector((state) => state.notes.notes);
  return (
    <>
      {notes ? (
        notes.map((note) => (
          <Note key={note.id} id={note.id} title={note.title} text={note.text} />
        ))
      ) : (
        <>No notes</>
      )}
    </>
  );
};
