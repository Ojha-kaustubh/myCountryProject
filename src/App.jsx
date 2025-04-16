import "./App.css";
import { Header } from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchMenu from "./components/SearchMenu";

function App() {
  return (
    <>
      <Header />
      <div className="search-filter-container">
        <SearchBar />
        <SearchMenu />
      </div>
    </>
  );
}
export default App;
