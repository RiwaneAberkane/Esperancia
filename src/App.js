import "./App.css";
import Header from "./components/Header";
import NonProfit from "./components/NonProfit";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NonProfit />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
