import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./app";

describe("<App />", () => {
  it("renders without crashing", () => {
    //const div = document.createElement("div");
    //ReactDOM.render(<App />, div);
    //ReactDOM.unmountComponentAtNode(div);
    shallow(<App />);
  });
});
