import UseState from "./hooks/UseState";
import UseReducer from "./hooks/UseReducer";
import UseEffects from "./hooks/UseEffects";
import UseRef from "./hooks/UseRef";


function App() {
  return (
    <div className="App" style={{marginBottom:'50px', padding:'50px'}}>
      <UseState />
      <UseReducer />
      <UseEffects />
      <UseRef />
    </div>
  );
}

export default App;
