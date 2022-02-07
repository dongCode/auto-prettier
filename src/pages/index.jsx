import React from "react";
import qs from "qs";
import Search from "./components/Search";
import Table from "./components/Table";
import { cleanObject, useDebounce, useMount } from "../utils";
const baseUrl = process.env.REACT_APP_BASE_URL;

const List = () => {
  const [param, setParam] = React.useState({
    personId: "",
    name: "",
  });
  const updateParam = (data) => {
    setParam({ ...param, ...data });
  };
  const [list, setList] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const debounceParam = useDebounce(param, 2000);
  React.useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          const list = await response.json();
          setList(list);
        }
      }
    );
  }, [debounceParam]);
  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <>
      <Search update={updateParam} param={param} users={users}></Search>
      <Table list={list} users={users}></Table>
    </>
  );
};

export default List;
