import "./App.css";
import CharityCounter from "./components/CharityCounter";
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
        <CharityCounter />
      </header>
    </div>
  );
}

export default App;
