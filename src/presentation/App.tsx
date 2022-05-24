import { ToastContainer } from "react-toastify";
import MyRouter from "./MyRouter";

function App() {
  return (
    <>
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
      <MyRouter />
    </>
  );
}

export default App;
