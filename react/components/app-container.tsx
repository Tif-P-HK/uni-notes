import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import { NoteList } from "./note-list";
import { useStore } from "../stores/data.store";
import { useEffect } from "react";
import { getNotes } from "../actions";

export const AppContainer = () => {
  const { state, dispatch } = useStore();
  useEffect(() => {
    async function _getNotes() {
      const notes = await getNotes();
      dispatch({
        type: "init",
        payload: notes,
      });
    }
    _getNotes();
  }, []);

  return (
    <Container>
      <Head>
        <title>Uni Notes | React</title>
      </Head>

      <h1>Uni Notes</h1>

      <NoteList />
    </Container>
  );
};
