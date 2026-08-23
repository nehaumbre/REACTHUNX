const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 40,
    },
  ];

  return (
    <div>
      {/* one <ul> contains the whole list, and .map() creates one <li> per user. */}
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>ID: {user.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
