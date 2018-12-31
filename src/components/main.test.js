import React from "react";
import { shallow, mount } from "enzyme";
import Main from "./main";
import "../setupTest";

describe("<Main />", () => {
  it("Renders without crashing", () => {
    shallow(<Main />);
  });
});

describe("<App />", () => {
  it("Smoke test", () => {
    const testVar = "Hello";
    shallow(<Main />);
    expect(testVar).toEqual("Hello");
  });
});
