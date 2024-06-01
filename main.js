import { getUsersNames } from "./utils";
import secretString from "./constants";
const usernames = getUsersNames([{ id: "1", name: "Jack" }]);
console.log(usernames, secretString);
