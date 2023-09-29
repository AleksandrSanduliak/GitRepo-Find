import "styles/global.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <footer className="footer">
          <Box height="2rem" bgcolor="#4F4F4F" />
        </footer>
      </div>
    </>
  );
}

export default App;
