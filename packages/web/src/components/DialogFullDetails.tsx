import { FullMenuResponse } from "@apiType/menu/full-menu-response.model";
import { useEffect, useState } from "react";
import { calculatePrice } from "../common";

type Props = {
  handleIsSelectMenu: Function;
  isSelectMenu: boolean;
  details: FullMenuResponse;
};

const DialogFullDetails: React.FC<Props> = ({
  handleIsSelectMenu = () => {},
  isSelectMenu,
  details,
}) => {
  const [largeImage, setLargeImage] = useState(
    "https://play-lh.googleusercontent.com/xqHA-SYnWC3HYAQi1JZgMPFaxYX2WQLy_twv44YWC9Q-NXeBUMAvjPZZ1aN8U7kNj8w"
  );

  useEffect(() => {
    if (details.largeImage) setLargeImage(details.largeImage);
  }, [details]);

  console.log(details);

  return (
    <div className={`dialog-menu-box ${isSelectMenu && "show-dialog-menu"}`}>
      <div className="dialog-menu-header">
        <div
          className="dialog-close-button"
          onClick={() => handleIsSelectMenu()}
        >
          ˅
        </div>
        <div
          className="dialog-menu-image"
          style={{ backgroundImage: `url(${largeImage})` }}
        ></div>
      </div>
      <div className="dialog-menu-contents">
        <div className="dialog-menu-detail-box">
          <div className="dialog-menu-name">{details.name}</div>
          <div className="dialog-menu-price">
            ฿{calculatePrice(details.fullPrice, details.discountedPercent)}
          </div>
        </div>
        {details.options &&
          details.options.map((op, i) => (
            <div className="dialog-option-contents" key={i}>
              <div className="dialog-option-name-box">
                <p className="dialog-option-name"> {op.label}</p>
              </div>
              <div className="dialog-choice-name-box" key={i}>
                {op.choices &&
                  op.choices.map((c, i) => (
                    <p className="dialog-choice-name">o {c.label}</p>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DialogFullDetails;
