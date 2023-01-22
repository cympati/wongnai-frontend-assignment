import { shallow } from "enzyme";
import Header, { HeaderProps } from "../../components/Header";
import { describe, expect, test } from "vitest";

describe("<Header />", () => {
  const props: HeaderProps = {
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
    const restaurantCloseStatus = wrapper.find(".close-status");
    expect(restaurantCloseStatus).toHaveLength(1);
  });
});
