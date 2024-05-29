import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="cijs96">
      <h1>{props.message} MindX, age: {props.age}</h1>
      {props.hello}
      {props.children}
    </div>
  )
}

export default App;
