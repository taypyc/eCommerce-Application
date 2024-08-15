import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const ImageCarousel = () => {
  const banners = [
    {
      imgPath: "https://i.ibb.co/m4zwf8C/b2.jpg",
    },
    {
      imgPath: "https://i.ibb.co/BVdjm0n/a.jpg",
    },
    {
      imgPath: "https://i.ibb.co/gFFtMhG/c.jpg",
    },
  ];

  return (
    <Carousel
      sx={{
        height: "100%",
        padding: "10px 0 20px 0",
      }}
    >
      {banners.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
};

const Item = ({ imgPath }) => {
  return (
    <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <img width="100%" height="auto" src={`${imgPath}`} alt={`${imgPath}`} />
    </Paper>
  );
};

Item.propTypes = {
  imgPath: PropTypes.string,
};

export default ImageCarousel;
