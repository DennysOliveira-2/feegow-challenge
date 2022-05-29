import MyRouter from "./MyRouter";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "use-local-storage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "../presentation/styling/themes.scss";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage<string>(
    "theme",
    prefersDark ? "dark" : "light"
  );

  return (
    <>
      <div className={theme}>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <MyRouter />
      </div>
    </>
  );
}

export default App;
