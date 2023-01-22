import { ShortMenuDetails } from "@apiType/menu/short-menu-response.model";
import MenuDetails from "./MenuDetails";

type Props = {
  handleSelectMenu: Function;
  details: ShortMenuDetails[];
  type: string;
  reference: React.RefObject<HTMLDivElement>;
};

const MenuSection: React.FC<Props> = ({
  handleSelectMenu,
  details,
  type,
  reference,
}) => {
  return (
    <div className="menu-section" ref={reference}>
      <h1>{type}</h1>
      {details.map((detail, i) => (
        <div onClick={() => handleSelectMenu(detail.name)} key={i}>
          <MenuDetails detail={detail} type={type} />
        </div>
      ))}
    </div>
  );
};

export default MenuSection;
