import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import { NoteList } from "./note-list";
import { NoteDetail } from "./note-detail";
import { firebase } from "../pages/_app";
import { useEffect } from "react";
// import { firebase } from "../config";

export const AppContainer = () => {
  let ref: any | null = null;
  useEffect(() => {
    ref = firebase.database().ref("notes");
    fetchData();
  }, []);

  const fetchData = async () => {
    const notes = [];
    const snapshot = await ref.once("value");
    const value = snapshot.val();
    if (!value) {
      return;
    }
    Object.keys(value).forEach((key) => {
      const content = value[key]["TEST"];
      notes.push({
        key,
        description: content,
      });
    });
    console.log(notes);
  };

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
