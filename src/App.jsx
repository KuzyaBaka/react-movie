import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
// import { increment } from "./store/action";
import Home from "./pages/Home/Home";
/* https://api.themoviedb.org/3/discover/movie?api_key=fda7c15a6c66e214c0ef6a082e75bbdb */
function App() {
  const dispatch = useDispatch();
  /* const { count, loading } = useSelector((state) => state.count); */

  /* const handleInc = () => {
    dispatch(increment(100));
  }; */
  return (
    <>
      <Header />
      <Home />
      {/* <p>{count}</p>
      <button onClick={handleInc}>+</button>
      <button>-</button> */}
    </>
  );
}

export default App;
