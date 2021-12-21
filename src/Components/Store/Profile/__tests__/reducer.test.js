import { toggleCheckboxAction } from "../actions";
import { profileReducer } from "../reducer";

describe("test profile reducer", () => {
  it("if toggleCheckboxAction", () => {
    const expected = { checked: true, name: "Alexey" };

    const received = profileReducer(undefined, toggleCheckboxAction());

    expect(received).toEqual(expected);
  });
});
