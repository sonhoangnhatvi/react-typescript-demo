import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";

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
      <Greet name="Hoang Nhat Son" isLoggedIn={false} />
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
      <Status status="loading"></Status>
      <Heading> Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={() => {
          console.log("Button clicked");
        }}
      ></Button>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Container
        styles={{ border: "1px solid black", padding: "5px" }}
      ></Container>
    </div>
  );
}

export default App;
