import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./app.js";
import "../setupTest";

describe("<App />", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });
});

describe("<App />", () => {
  it("Smoke test", () => {
    const testVar = "Hello";
    shallow(<App />);
    expect(testVar).toEqual("Hello");
  });
});
