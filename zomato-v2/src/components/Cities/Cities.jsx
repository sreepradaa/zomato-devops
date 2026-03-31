import React, { useState } from "react";
import "./Cities.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const allLocalities = [
  { name: "Bodakdev", places: 345 },
  { name: "Satellite", places: 336 },
  { name: "Gurukul", places: 83 },
  { name: "Navrangpura", places: 302 },
  { name: "Vastrapur", places: 217 },
  { name: "Thaltej", places: 222 },
  { name: "Prahalad Nagar", places: 181 },
  { name: "C G Road", places: 94 },
  { name: "Ambawadi", places: 156 },
  { name: "Maninagar", places: 128 },
  { name: "Paldi", places: 99 },
  { name: "Bopal", places: 167 },
];

const Cities = ({ onLocalitySelect }) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allLocalities : allLocalities.slice(0, 8);

  return (
    <div className="cities">
      <h1>
        Popular localities in and around <span>Ahmedabad</span>
      </h1>
      <div className="cityContainer">
        {visible.map((loc) => (
          <div
            className="city"
            key={loc.name}
            onClick={() => onLocalitySelect && onLocalitySelect(loc.name)}
          >
            <div className="cityLeft">
              <h3>{loc.name}</h3>
              <span>{loc.places} Places</span>
            </div>
            <div className="icon">
              <ChevronRightIcon />
            </div>
          </div>
        ))}

        <div className="city see-more" onClick={() => setShowAll(!showAll)}>
          <div className="cityLeft">
            <h3>{showAll ? "See less" : "See more"}</h3>
          </div>
          <div className="icon">
            {showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
