import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";

describe("Error Component", () => {
  it("should render Error Component with error message", () => {
    const wrapper = shallow(<Error message="404 Not Found" />);
    const errorMessage = wrapper.find(".Error-message");
    expect(errorMessage.text()).toBe("404 Not Found");
  });

  it("should render default error message when no message prop is provided", () => {
    const wrapper = shallow(<Error />);
    const errorMessage = wrapper.find(".Error-message");
    expect(errorMessage.text()).toBe("Oops! Something went wrong.");
  });
});
