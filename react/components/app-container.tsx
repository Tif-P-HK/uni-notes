import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import { NoteList } from "./note-list";
import { NoteDetail } from "./note-detail";
// import config from "../config";
// import firebase from "./_app";
// import { useEffect } from "react";

// const fb = null;

export const AppContainer = () => {
  // useEffect(() => {
  //   // firebase.initializeApp(config);
  //   // fb = firebase;
  //   // this.ref = firebase.database().ref(path);
  // }, []);

  return (
    <Container>
      <Head>
        <title>Uni Notes | React</title>
      </Head>

      <h1>Uni Notes</h1>

      <NoteList />
      <NoteDetail />
    </Container>
  );
};
