type Props = {
  coverImage?: string;
};

const Banner: React.FC<Props> = ({
  coverImage = "https://live.staticflickr.com/65535/51062024762_3e82e4cd3e_o.jpg",
}) => {
  return (
    <div
      className="restaurant-cover-image"
      style={{ backgroundImage: `url(${coverImage})` }}
    ></div>
  );
};

export default Banner;
