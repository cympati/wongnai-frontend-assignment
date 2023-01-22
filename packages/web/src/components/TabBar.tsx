import { useEffect, useState, useContext } from "react";
import { RefContext, RefContextTypeSignature } from "../contexts/RefContext";

type Props = {
  // handleSelectType: Function;
  typeList: string[];
};

const TabBar: React.FC<Props> = ({
  // handleSelectType = () => {},
  typeList = [],
}) => {
  const refContext = useContext(RefContext);
  const [selected, setSelected] = useState(typeList[0]);

  useEffect(() => {
    setSelected(typeList[0]);
  }, [typeList.length]);

  const handleSelectType = (type: string) => {
    setSelected(type);
    refContext[
      type.toLowerCase() as RefContextTypeSignature
    ].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="menu-type-container">
      {typeList.map((type) => (
        <div
          className="menu-type-label-container"
          key={type}
          onClick={() => handleSelectType(type)}
        >
          <p
            className="menu-type-label"
            style={{
              color: selected == type ? "#007465ff" : "rgb(116, 116, 116)",
              fontWeight: selected == type ? "500" : "400",
            }}
          >
            {type}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
