import { Button } from "../utils/Button";

export const Note = ({ note }) => {
  return (
    <>
      <p>{note.title}</p>
      <p>{note.text}</p>
      <Button value={"X"} />
      <Button value={"E"} />
    </>
  );
};
