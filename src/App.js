import "./App.css";
import Modal from "./components/Modal";
import Main from "./pages/Main";
import WishList from "./pages/WishList";
import SearchPage from "./pages/SearchPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchPage />
    </>
  );
}

export default App;
