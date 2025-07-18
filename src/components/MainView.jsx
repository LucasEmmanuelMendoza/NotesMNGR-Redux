import { InputNote } from "./note/InputNote";
import { NotesContainer } from "./note/NotesContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  return (
    <Container>
      <h1>Notes Manager</h1>
      <Row>
        <Col>
          <InputNote />
        </Col>
        <Col>
          <NotesContainer />
        </Col>
      </Row>
    </Container>
  );
};
