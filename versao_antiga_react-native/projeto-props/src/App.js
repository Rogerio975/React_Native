function Greeting(props) {
  return <h1 style={{color: "orange", textAlign: "center"}}>Olá, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Júlia" />;
}

export default App;