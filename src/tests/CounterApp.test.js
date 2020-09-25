import { shallow } from "enzyme";
import React from "react";
import CounterApp from "../CounterApp";

describe("Test <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should be show CounterApp succesfuly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Must be show default value = 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("should increment with button plus 1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("101");
  });

  test("should decrement with button minus 1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("99");
  });
});

describe("When button reset is click", () => {
  test("should reset value in 100", () => {
    const wrapper = shallow(<CounterApp value={15}/>);
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("15");
  });
});
