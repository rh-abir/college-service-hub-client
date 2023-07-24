import "./ImageGallery.css";

import Masonry from "react-responsive-masonry";

// import img1 from "../../../assets/imgCollage/img1.jpg";
// import img2 from "../../../assets/imgCollage/img2.jpg";
// import img3 from "../../../assets/imgCollage/img3.jpg";
// import img4 from "../../../assets/imgCollage/img4.jpg";
// import img5 from "../../../assets/imgCollage/img1.jpg";
// import img6 from "../../../assets/imgCollage/img2.jpg";

const ImageGallery = () => {
  const images = [
    "https://i.ibb.co/hChBfT4/img6.jpg",
    "https://i.ibb.co/mX9LwP9/img5.jpg",
    "https://i.ibb.co/phxN9Kg/img4.jpg",
    "https://i.ibb.co/fY0bC5p/img3jpg.jpg",
    "https://i.ibb.co/HGqSSnB/img2.jpg",
    "https://i.ibb.co/MNbyjGr/img1.jpg",
  ];
  return (
    <div>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGallery;
