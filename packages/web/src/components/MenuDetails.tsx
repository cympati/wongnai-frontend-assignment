import { useEffect, useState } from "react";
import { ShortMenuDetails } from "@apiType/menu/short-menu-response.model";
import { calculatePrice } from "../common";

type Props = {
  detail: ShortMenuDetails;
  type: string;
};

const MenuDetails: React.FC<Props> = ({ detail, type }) => {
  const [thumbnailImage, setThumbnailImage] = useState(
    "https://play-lh.googleusercontent.com/xqHA-SYnWC3HYAQi1JZgMPFaxYX2WQLy_twv44YWC9Q-NXeBUMAvjPZZ1aN8U7kNj8w"
  );

  useEffect(() => {
    if (detail.thumbnailImage) setThumbnailImage(detail.thumbnailImage);
  }, []);

  return (
    <div className="menu-details">
      {type == "Promotion" ? (
        <div className="menu-details-container">
          <div className="promotion-label-box">
            <p className="promotion-label">{detail.discountedPercent}% OFF</p>
          </div>
          <div
            className="thumbnail-image"
            style={{ backgroundImage: `url(${thumbnailImage})` }}
          ></div>
          <div className="menu-info">
            <div className="menu-name">{detail.name}</div>
            <div className="menu-price-box">
              <div className="menu-price">
                ฿{calculatePrice(detail.fullPrice, detail.discountedPercent)}
              </div>
              <div className="menu-price-full">฿{detail.fullPrice}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="menu-details-container">
          <div
            className="thumbnail-image"
            style={{ backgroundImage: `url(${thumbnailImage})` }}
          ></div>
          <div className="menu-info">
            <div className="menu-name">{detail.name}</div>
            <div className="menu-price-box">
              <div className="menu-price">฿{detail.fullPrice}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDetails;
