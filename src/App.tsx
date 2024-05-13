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
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Name } from "./components/Person.types";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList: Name[] = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <PersonList names={nameList}></PersonList>
    </div>
    // <Greet name="Hoang Nhat Son" messageCount={10} isLoggedIn={false} />
    // <Greet name="Hoang Nhat Son" isLoggedIn={false} />
    // <Person name={personName}></Person>

    // <Status status="loading"></Status>
    // <Heading> Placeholder text </Heading>
    // <Oscar>
    //   <Heading>Oscar goes to Leonardo Dicpario!</Heading>
    // </Oscar>
    // <Button
    //   handleClick={() => {
    //     console.log("Button clicked");
    //   }}
    // ></Button>
    // <Button
    //   handleClick={(event, id) => {
    //     console.log("Button clicked", event, id);
    //   }}
    // ></Button>
    // <Input value="" handleChange={(event) => console.log(event)}></Input>
    // <Container
    //   styles={{ border: "1px solid black", padding: "5px" }}
    // ></Container>

    // <ThemeContextProvider>
    //   <Box></Box>
    // </ThemeContextProvider>

    // <UserContextProvider>
    //   <User />
    // </UserContextProvider>
  );
}

export default App;
