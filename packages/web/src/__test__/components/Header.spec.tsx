import React, { Component } from "react";
import { render, shallow, mount } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import Header, { HeaderProps } from "../../components/Header";

describe("<Header />", () => {
  let props: HeaderProps = {
    restaurant: {
      name: "",
      id: 0,
      isClosed: false,
      openTime: "",
      coverImage: "",
    },
  };

  test("should render close when isClosed is true", () => {
    const mockProps: HeaderProps = {
      ...props,
      restaurant: {
        name: "",
        id: 0,
        isClosed: true,
        openTime: "10:30",
        coverImage: "",
      },
    };
    const wrapper = shallow(<Header {...mockProps} />);
    const restaurantStatus = wrapper.find("close-status");
    expect(restaurantStatus).toHaveLength(1);
  });
});
