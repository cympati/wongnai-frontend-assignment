import { describe, expect, test } from "vitest";
import DialogFullDetails, {
  DialogProps,
} from "../../components/DialogFullDetails";
import { shallow } from "enzyme";

describe("<DialogFullDetails />", () => {
  const props: DialogProps = {
    handleIsSelectMenu: () => {},
    isSelectMenu: false,
    details: {
      name: "",
      id: "",
      fullPrice: 2,
      discountedPercent: 1,
      largeImage: "",
      options: [],
    },
  };

  test("should render dialog when isSelectMenu is true", () => {
    const mockProps: DialogProps = {
      ...props,
      handleIsSelectMenu: () => {},
      isSelectMenu: true,
      details: {
        name: "",
        id: "",
        fullPrice: 2,
        discountedPercent: 1,
        largeImage: "",
        options: [],
      },
    };
    const wrapper = shallow(<DialogFullDetails {...mockProps} />);
    const showDialog = wrapper.find(".show-dialog-menu");
    expect(showDialog).toHaveLength(1);
  });
});
