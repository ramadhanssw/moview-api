import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("should render Loading Component", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(".Loading").text()).toBe("Loading...");
  });
});
