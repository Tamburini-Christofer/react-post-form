import "./App.css";
import MyHeader from "./assets/components/MyHeader";
import MyPost from "./assets/components/MyPost";
function App() {
  return (
    <>
      <div className="containerPrincipal">
        <MyHeader />
        <MyPost />
      </div>
    </>
  );
}

export default App;
