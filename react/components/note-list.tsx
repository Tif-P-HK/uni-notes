import styles from "../styles/node-list.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "../stores/data.store";
// import { useEffect, useState } from "react";

export const NoteList = () => {
  const { state, dispatch } = useStore();

  const handleClick = (e) => {
    const id = e.target.id;
  };

  return (
    <Container onClick={handleClick}>
      {(state || []).map(({ key, description }) => (
        <Row>
          <Col>
            <div className={styles.card} key={key} id={key}>
              <h3>{key} &rarr;</h3>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
