import img1 from "../assets/images/Frame 1171274997.png";
import img2 from "../assets/images/Frame 1171274998.png";
import img3 from "../assets/images/Frame 1171274999.png";
import img4 from "../assets/images/Frame 1171275002.png";
import img5 from "../assets/images/Img-card-col.png";
import img6 from "../assets/images/Frame 1171275000.png";

const products = [
  {
    id: 101,
    title: "Diaper Pants",
    images: [img1, img6, img2,img5],
    price: 680,
    mrp: 800,
    rating: 5,
  },
  {
    id: 102,
    title: "Super Cute's",
    images: [img2, img5, img4,img3],
    price: 450,
    mrp: 500,
    rating: 4,
  },
  {
    id: 103,
    title: "Mee Premium",
    images: [img3, img4, img6,img1],
    price: 700,
    mrp: 1044,
    rating: 5,
  },
  {
    id: 104,
    title: "Mee Diaper Pants",
    images: [img4, img3, img1,img6],
    price: 580,
    mrp: 860,
    rating: 5,
  },
  {
    id: 105,
    title: "Mee Pampers",
    images: [img5, img2, img3,img4],
    price: 800,
    mrp: 950,
    rating: 5,
  },
  {
    id: 106,
    images: [img6, img1, img5,img2],
    image: img6,
    price: 1300,
    mrp: 1850,
    rating: 5,
  },
];

export default products;
