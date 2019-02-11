export const AppContext = {
  state: {
    user: {
      displayName: '',
      age: 0,
      job: '',
    },
  },
  actions: {
    resetUser: jest.fn(),
    setUser: jest.fn(),
    getString: jest.fn(),
  },
};
