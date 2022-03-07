import "./App.css";

import Main from "./pages/Main";
import WishList from "./pages/WishList";
import SearchPage from "./pages/SearchPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
      <SearchPage />
    </>
  );
}

export default App;
