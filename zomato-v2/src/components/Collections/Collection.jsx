import React from "react";
import "./Collection.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import collection1 from "../../assets/images/collection1.webp";
import collection2 from "../../assets/images/collection2.webp";
import collection3 from "../../assets/images/collection3.webp";
import collection4 from "../../assets/images/collection4.webp";

const collections = [
  {
    img: collection1,
    title: "10 Must-Visit Places for Christmas",
    places: 9,
    filter: "Christmas",
    tag: "Festive",
  },
  {
    img: collection2,
    title: "7 Finest Buffet Places",
    places: 7,
    filter: "Buffet",
    tag: "Buffet",
  },
  {
    img: collection3,
    title: "Top 8 Picturesque Cafes",
    places: 8,
    filter: "Cafe",
    tag: "Cafes",
  },
  {
    img: collection4,
    title: "10 Best Luxury Dining Places",
    places: 10,
    filter: "Luxury",
    tag: "Luxury",
  },
];

const Collection = ({ onCollectionSelect }) => {
  return (
    <div className="collection">
      <h1>Collections</h1>
      <div className="collectionText">
        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</p>
        <span onClick={() => onCollectionSelect && onCollectionSelect("All", "All Collections")}>
          All collections in Ahmedabad <ArrowRightIcon />
        </span>
      </div>
      <div className="collectionCard">
        {collections.map((col) => (
          <div
            className="collectionImg"
            key={col.filter}
            onClick={() => onCollectionSelect && onCollectionSelect(col.filter, col.title)}
          >
            <img src={col.img} alt={col.title} />
            <div className="collection-tag">{col.tag}</div>
            <h3>{col.title}</h3>
            <span>
              {col.places} Places <ArrowRightIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
