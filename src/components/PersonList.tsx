import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
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
