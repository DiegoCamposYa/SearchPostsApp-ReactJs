const { authReducer } = require("../../../reducers/authReducer");
const { types } = require("../../../types/types");

describe("Test authReducer", () => {
  test("test authLogin", () => {
    const initState = { userName: "usuario", isAuthenticated: true };

    const action = {
      type: types.authLogout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      userName: null,
      isAuthenticated: false,
    });
  });
});
