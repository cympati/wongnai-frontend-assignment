import { RestaurantResponse } from "@apiType/restaurant/reataurant-response.model";

export type HeaderProps = {
  restaurant: RestaurantResponse;
};

const Header: React.FC<HeaderProps> = ({ restaurant }) => {
  return (
    <div className="restaurant-header">
      <h1 className="restaurant-name">{restaurant.name}</h1>
      {restaurant.isClosed ? (
        <div className="restaurant-status close-status">
          Closed opens on {restaurant.openTime}
        </div>
      ) : (
        <div className="restaurant-status open-status">Open</div>
      )}
    </div>
  );
};

export default Header;
