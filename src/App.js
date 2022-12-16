
import "./App.css";
import Child from "./Child";
import useToggle from "./CustomHooks/useToggle";

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
function Parent() {
  console.log("Parent rendering...");
  const [value, toggle] = useToggle();
  return (
    <div>
      {value ? "show" : "hide"}
      <Child toggle={toggle}/>
    </div>
  );
}


export default App;
