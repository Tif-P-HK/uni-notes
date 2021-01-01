import { StoreProvider } from "../stores/data.store";
import { AppContainer } from "../components/app-container";

const App = () => (
  <StoreProvider>
    <AppContainer />
  </StoreProvider>
);

export default App;
