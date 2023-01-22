import CoverLineImage from "../assets/line.jpg";

type Props = {
  coverImage?: string;
};

const Banner: React.FC<Props> = ({ coverImage = CoverLineImage }) => {
  return (
    <div
      className="restaurant-cover-image"
      style={{ backgroundImage: `url(${coverImage})` }}
    ></div>
  );
};

export default Banner;
