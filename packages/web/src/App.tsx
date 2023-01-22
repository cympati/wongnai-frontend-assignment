import { useEffect, useState, createRef } from "react";
import { axios, restaurantIdFromPath } from "./common";
import { RestaurantResponse } from "@apiType/restaurant/reataurant-response.model";
import Banner from "./components/Banner";
import MainContents from "./components/MainContents";
import { ShortMenuDetails } from "@apiType/menu/short-menu-response.model";
import { SuccessResponse, Data } from "@apiType/common/response";
import { RefContext } from "./contexts/RefContext";

const App = () => {
  const [coverImage, setCoverImage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantResponse>({
      name: "",
      id: 0,
      isClosed: false,
      openTime: "00:00",
      coverImage: "",
    });
  // Types of menu
  const [promotion, setPromotion] = useState<ShortMenuDetails[]>([]);
  const [recommended, setRecommended] = useState<ShortMenuDetails[]>([]);
  const [normal, setNormal] = useState<ShortMenuDetails[]>([]);
  const [typeList, setTypeList] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // http://localhost:3000/567051
    // http://localhost:3000/227018
    const restaurantId = restaurantIdFromPath();

    if (!restaurantId)
      alert(
        "Please, enter your restaurant ID => ex. http://localhost:3000/:restaurantId"
      );

    axios
      .get<SuccessResponse<Data>>(`/restaurants/${restaurantId}`)
      .then(({ data }) => {
        const response = data.data;

        if (data.success) {
          setRestaurantDetails(response.restaurant);
          setCoverImage(response.restaurant.coverImage);
          setPromotion(response.menus.promotion);
          setRecommended(response.menus.recommended);
          setNormal(response.menus.normal);
          handleTypeList(
            response.menus.promotion.length,
            response.menus.recommended.length,
            response.menus.normal.length
          );
          setIsLoading(!isLoading);

          return window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        return console.log(err.message);
      });
  };

  const handleTypeList = (
    promotionLen: number,
    recommendedLen: number,
    normalLen: number
  ) => {
    if (promotionLen) {
      setTypeList((typeList) => [...typeList, "Promotion"]);
    }
    if (recommendedLen) {
      setTypeList((typeList) => [...typeList, "Recommended"]);
    }
    if (normalLen) {
      setTypeList((typeList) => [...typeList, "More"]);
    }
  };
  console.log(typeList);

  return (
    <>
      {isLoading ? (
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      ) : (
        <RefContext.Provider
          value={{
            promotion: createRef(),
            recommended: createRef(),
            more: createRef(),
          }}
        >
          <div className="container">
            <div className="main">
              <Banner coverImage={coverImage} />
              <MainContents
                restaurant={restaurantDetails!}
                promotion={promotion}
                recommended={recommended}
                normal={normal}
                handleSelectType={() => {}}
                typeList={typeList}
              />
            </div>
          </div>
        </RefContext.Provider>
      )}
    </>
  );
};

export default App;
