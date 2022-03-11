import "./App.css";

import Main from "./pages/Main";
import WishList from "./pages/WishList";
import SearchPage from "./pages/SearchPage";
import GlobalStyle from "./styles/GlobalStyle";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
      <SearchPage />
      <ChatPage />
    </>
  );
}

export default App;
