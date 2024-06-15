import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then((user) => {
    console.log(user); // This will now log the object: { firstName: 'Bob', lastName: 'Dylan' }
  })
  .catch((error) => {
    // Optional: Handle any errors that might occur in the signUpUser function
    console.error(error);
  });
