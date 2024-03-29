// common utils for simple API testing in development phase

// change this var to true when you are testing the API endpoints without logging in
export const testingAPI = false;

const fakeUserSession = {
  user: {
    _id: '65ae7bbd24dc37492f2581c0',
  },
};

// returns a fake user session when testing the API
export const makeSessionForAPITest = () => {
  return testingAPI ? fakeUserSession : null;
};
