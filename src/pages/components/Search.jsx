const Search = ({ state, update }) => {
  return (
    <form>
      <input
        type="text"
        value={state.name}
        onChange={(evt) => update({ name: evt.target.value })}
      />
      <select
        value={state.personId}
        onChange={(evt) => update({ personId: evt.target.value })}
      >
        <option value={""}>负责人</option>
        {state.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default Search;
