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
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./components/state";
import { useSelector } from "react-redux";
import Curd from "./crud";

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

  const dispatch = useDispatch();

  const { depositMoney, widthrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank.accountBalance);

  return (
    <div className="App">
      <Curd></Curd>
    </div>

    // // For redux demo
    // <div className="App">
    //   <h1>{amount}</h1>
    //   <button onClick={() => depositMoney(1000)}>Deposit</button>
    //   <button onClick={() => widthrawMoney(500)}>Widtdraw</button>
    //   <button onClick={() => bankrupt()}>Bankrupt</button>
    // </div>

    // <div className="App">
    //   <PersonList names={nameList}></PersonList>
    // </div>

    // <div className="App">
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
    // </div>
  );
}

export default App;
