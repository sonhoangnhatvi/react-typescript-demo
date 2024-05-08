import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <Greet name="Hoang Nhat Son" messageCount={10} isLoggedIn={false} />
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;