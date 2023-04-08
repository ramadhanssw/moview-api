import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render header with "Moview" title', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(".App-header");
    expect(header.find("h1").text()).toBe("Moview");
  });

  it("should render input search", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".Movie-search").exists()).toBe(true);
  });

  it("should render Movie Container", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".Movie-container").exists()).toBe(true);
  });
});
