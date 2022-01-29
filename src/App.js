import "./styles/styles.css";
import Academic from "./components/Academic/Academic";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <Information />
      <Profile />
      <Experience />
      <Academic />
    </div>
  );
}

export default App;
