import { createUser, uploadPhoto } from './utils';
11;rgb:2b2b/2b2b/2b2b
function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
