import "./ImageGallery.css";

import img1 from "../../../assets/imgCollage/img1.jpg";
import img2 from "../../../assets/imgCollage/img2.jpg";
import img3 from "../../../assets/imgCollage/img3.jpg";
import img4 from "../../../assets/imgCollage/img4.jpg";
import img5 from "../../../assets/imgCollage/img1.jpg";
import img6 from "../../../assets/imgCollage/img2.jpg";

const ImageGallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  // console.log(data);

  return (
    <div className="gallery">
      {/* {data.map((item, index) => {
        return (
          <div key={index} className="pics">
            <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
          </div>
        );
      })} */}
      <h2>Tih is gallerys</h2>
    </div>
  );
};

export default ImageGallery;
