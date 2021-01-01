import fb from "firebase";
import config from "./config";

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
export interface INote {
  key: string;
  description: string;
}

export const getNotes = async (): Promise<INote[]> => {
  const notes: INote[] = [];
  const ref = firebase.database().ref("notes");
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
  return notes;
};
