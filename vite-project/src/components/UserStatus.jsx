const UserStatus = ({loggedIn , isAdmin}) => {
  return (
    <div>
      {loggedIn && isAdmin ? <p>Welcome! Admin </p> : loggedIn && !isAdmin ? <p>Welcome! User</p> : <p>Please log in</p>}
    </div>
  )
}

export default UserStatus
