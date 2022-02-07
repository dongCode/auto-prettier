import React from "react";
import qs from "qs";
import Search from "./components/Search";
import Table from "./components/Table";
import { cleanObject } from "../utils";
const baseUrl = process.env.REACT_APP_BASE_URL;

const List = () => {
  const initialState = {
    name: "",
    users: [],
    personId: "",
  };
  const [list, setList] = React.useState([]);
  const [state, setState] = React.useState(initialState);
  const updateState = (data) => {
    setState({ ...state, ...data });
  };
  React.useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(
        cleanObject({ name: state.name, personId: state.personId })
      )}`
    ).then(async (response) => {
      debugger;
      if (response.ok) {
        const list = await response.json();
        setList(list);
      }
    });
  }, [state.name, state.personId]);

  React.useEffect(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        updateState({ users: await response.json() });
      }
    });
  }, []);
  return (
    <>
      <Search update={updateState} state={state}></Search>
      <Table list={list} users={state.users}></Table>
    </>
  );
};

export default List;
