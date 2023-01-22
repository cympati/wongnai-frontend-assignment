import Header from "./Header";
import DialogFullDetails from "./DialogFullDetails";
import MenuSection from "./MenuSection";
import TabBar from "./TabBar";
import { FullMenuResponse } from "@apiType/menu/full-menu-response.model";
import { ShortMenuDetails } from "@apiType/menu/short-menu-response.model";
import { RestaurantResponse } from "@apiType/restaurant/reataurant-response.model";
import { useState, useContext, useRef } from "react";
import { RefContext } from "../contexts/RefContext";
import { axios, restaurantIdFromPath } from "../common";
import { Data, SuccessResponse } from "@apiType/common/response";

type Props = {
  handleSelectType: Function;
  restaurant: RestaurantResponse;
  promotion: Array<ShortMenuDetails>;
  recommended: Array<ShortMenuDetails>;
  normal: Array<ShortMenuDetails>;
  typeList: string[];
};

const MainContents: React.FC<Props> = ({
  restaurant,
  promotion = [],
  recommended = [],
  normal = [],
  typeList = [],
}) => {
  const refContext = useContext(RefContext);
  const [isSelectMenu, setIsSelectMenu] = useState(false);
  const [fullMenuDetails, setFullMenuDetails] = useState<FullMenuResponse>({
    name: "",
    id: "",
    fullPrice: 0,
    discountedPercent: 0,
    largeImage: "",
    options: [],
  });

  const handleIsSelectMenu = () => {
    setIsSelectMenu(!isSelectMenu);
  };
  const handleSelectMenu = async (menuName: string) => {
    console.log("Click already");
    console.log(menuName);

    // axios send menuName to fetch full detail of menu
    const restaurantId = restaurantIdFromPath();
    console.log(restaurantId);
    await axios
      .get<SuccessResponse<FullMenuResponse>>(
        `/restaurants/${restaurantId}/menus/${menuName}/full`
      )
      .then(({ data }) => {
        const response = data.data;
        if (data.success) {
          console.log(response);

          setFullMenuDetails(response);
          handleIsSelectMenu();
        }
      })
      .catch((err) => {
        return console.log(err.message);
      });
  };

  return (
    <div className="main-contents">
      <Header restaurant={restaurant} />
      <TabBar typeList={typeList} />
      {/* handleSelectType={() => handleSelectType} */}
      {promotion.length ? (
        <MenuSection
          handleSelectMenu={handleSelectMenu}
          details={promotion}
          type="Promotion"
          reference={refContext.promotion}
        />
      ) : (
        <div></div>
      )}
      {recommended.length ? (
        <MenuSection
          handleSelectMenu={handleSelectMenu}
          details={recommended}
          type="Recommended"
          reference={refContext.recommended}
        />
      ) : (
        <div></div>
      )}
      {normal.length ? (
        <MenuSection
          handleSelectMenu={handleSelectMenu}
          details={normal}
          type="More"
          reference={refContext.more}
        />
      ) : (
        <div></div>
      )}
      <DialogFullDetails
        handleIsSelectMenu={handleIsSelectMenu}
        isSelectMenu={isSelectMenu}
        details={fullMenuDetails}
      />
    </div>
  );
};
export default MainContents;
