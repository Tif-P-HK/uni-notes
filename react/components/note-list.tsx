import styles from "../styles/node-list.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export const NoteList = () => {
  useEffect(() => {
    console.log("NodeList did mount");
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth info about Next.js features and API.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth info about Next.js features and API.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
