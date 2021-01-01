import "../styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "../stores/data.store";
import { AppContainer } from "../components/app-container";
// import config from "../config";
// import fb from "firebase";

// export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();

const App = () => (
  <StoreProvider>
    <AppContainer />
  </StoreProvider>
);

export default App;
