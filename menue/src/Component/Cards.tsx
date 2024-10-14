// Cards.tsx
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
// Define the type for the individual item
interface Item {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  imgUrl: string;
}

// Define the props for the Cards component
interface CardsProps {
  Data: Item[];
}

export const Cards: React.FC<CardsProps> = ({ Data }) => {
  return (
    <Row>
      <Zoom>
        <>
          {Data.length >= 1 ? (
            Data.map(
              (
                item: Item // Explicitly type the item parameter
              ) => (
                <Col key={item.id} sm="12" className="mb-3">
                  <Card className="card-color d-flex flex-row">
                    <Card.Img
                      variant="top"
                      src={item.imgUrl}
                      className="img-item"
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between">
                        <Card.Title className="item-title fs-2">
                          {item.title}
                        </Card.Title>
                        <Card.Title className="fs-2 item-price">
                          ${item.price}
                        </Card.Title>
                      </div>
                      <Card.Text className="item-description fs-4 mt-auto">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )
          ) : (
            <h1 className="text-center my-3">لايوجد اصناف</h1>
          )}
        </>
      </Zoom>
    </Row>
  );
};
