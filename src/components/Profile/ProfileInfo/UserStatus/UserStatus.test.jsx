import React from "react";
import { create } from "react-test-renderer";
import UserStatus from "./UserStatus";

describe("UsersStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<UserStatus status="123" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.props.children).toBe("123");
  });
});
