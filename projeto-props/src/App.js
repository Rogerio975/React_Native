function Greeting(props) {
  return <h1>Olá, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Júlia" />;
}

export default App;