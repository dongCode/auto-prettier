const Search = ({ param, update, users }) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => update({ name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) => update({ personId: evt.target.value })}
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default Search;
