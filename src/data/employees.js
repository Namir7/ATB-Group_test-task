import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export default [
  {
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    middleName: null,
    birthDate: format(new Date(1995, 11, 23), "d MMM yyyy"),
    description: "love donats, racing and America",
  },

  {
    id: uuidv4(),
    firstName: "Ivan",
    lastName: "Ivanov",
    middleName: "Ivanovich",
    birthDate: format(new Date(1930, 1, 13), "d MMM yyyy"),
    description: "chess player",
  },

  {
    id: uuidv4(),
    firstName: "Recardo",
    lastName: "Rodrigez",
    middleName: "El mucho Frio",
    birthDate: format(new Date(1983, 13, 5), "d MMM yyyy"),
    description: "horse riding, big mustache",
  },
];
