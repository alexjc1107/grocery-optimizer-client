import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./home";
import "../setupTest";

describe("<Home />", () => {
  it("Renders without crashing", () => {
    shallow(<Home />);
  });
});

describe("<Home />", () => {
  it("Smoke test", () => {
    const testVar = "Hello";
    shallow(<Home />);
    expect(testVar).toEqual("Hello");
  });
});
