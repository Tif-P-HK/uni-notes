import { useRouter } from "next/router";
import { Jumbotron, Container } from "react-bootstrap";

const Note = () => {
  const router = useRouter();
  const { key } = router.query;

  return (
    <Jumbotron fluid>
      <Container>
        <h1>{key}</h1>
        <p>{key}</p>
      </Container>
    </Jumbotron>
  );
};

export default Note;
