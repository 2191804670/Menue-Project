import React from "react";
import { Col, Row } from "react-bootstrap";

// Define props for the Catogry component
interface CatogryProps {
  filter: (cat: string) => void;
  catogory: string[];
}

export const Catogry: React.FC<CatogryProps> = ({ filter, catogory }) => {
  // Function to handle filtering
  const onFilter = (cat: string) => {
    filter(cat);
  };

  return (
    <Row className="mb-3">
      <Col sm="12" className="justify-content-center d-flex">
        <div>
          {catogory.map((el, index) => (
            <button
              key={index}
              onClick={() => onFilter(el)}
              className="mx-3 btn"
            >
              {el}
            </button>
          ))}
        </div>
      </Col>
    </Row>
  );
};
