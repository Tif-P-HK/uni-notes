import styles from "../styles/node-list.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "../stores/data.store";
import Link from "next/link";

export const NoteList = () => {
  const { state, dispatch } = useStore();

  return (
    <Container>
      {(state || []).map(({ key }) => (
        <Row key={key}>
          <Col>
            <Link href={`/note?key=${key}`}>
              <div className={styles.card}>
                <h3>{key} &rarr;</h3>
              </div>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
