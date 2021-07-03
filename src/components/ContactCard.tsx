import { AppProp as Props } from "../App";



export const ContactCard = (person : Props): JSX.Element => {
  return (
    <div key={person.id}>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <p>{person.email}</p>
      <p>{person.country}</p>
    </div>
  );
};
