import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./composants/user";
import { PostList, PostEdit, PostCreate } from "./composants/posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

// const newLocal = "name";
export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="/" list={UserList} icon={UserIcon} />
  </Admin>
);
