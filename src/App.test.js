import React from "react";
import { mount, configure, shallow } from "enzyme";
import App from "./App";
describe("App testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("render the App header", () => {
    expect(wrapper.find("h1").text()).toContain("This is app file");
  });
});
