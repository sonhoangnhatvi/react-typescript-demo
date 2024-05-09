import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div>
            {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
