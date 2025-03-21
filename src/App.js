import "./App.css";
import CharityCounter from "./components/CharityCounter";
import Header from "./components/Header";
import NonProfit from "./components/NonProfit";
import Welcome from "./components/Welcome";
import CommentSection from "./components/CommentSection";
import DonationList from "./components/Donation/DonationList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NonProfit />
        <Welcome />
        <CharityCounter />
        <DonationList />
        <CommentSection />
      </header>
    </div>
  );
}

export default App;
