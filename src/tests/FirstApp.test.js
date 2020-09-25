import React from "react";
import FirstApp from "../FirstApp.App";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Test <FirstApp />", () => {
  //   test('should to show a message "Hello, Andres"', () => {
  //     const greeting = "Hello, Andres";
  //     const { getByText } = render(<FirstApp greeting={greeting}/>);

  //     expect(getByText(greeting)).toBeInTheDocument();
  //   });

  test("should showe <FirstApp /> correctly", () => {
    const greeting = "Hello, Andres";
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });
  0;
  test("should show the sutitle that was sending by props", () => {
    const greeting = "Hello, Andres";
    const subTittle = "Soy un subtitulo";
    const wrapper = shallow(
      <FirstApp greeting={greeting} subTitle={subTittle} />
    );

    const textPhra = wrapper.find('p').text();
    expect(textPhra).toBe(subTittle);
  });
});
