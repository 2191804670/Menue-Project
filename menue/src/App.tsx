import React, { useState } from "react";
import "./App.css";
import { items } from "./Data"; // Ensure this contains the original data
import { Container } from "react-bootstrap";
import { NavBar } from "./Component/NavBar";
import { Header } from "./Component/Header";
import { Catogry } from "./Component/Catogry";
import { Cards } from "./Component/Cards";

function App() {
  const [ShopData, setData] = useState(items);

  const filterCategory = (cat: string) => {
    if (cat === "All") {
      setData(items);
    } else {
      const newData = items.filter((el) => el.category === cat);

      setData(newData);
    }
  };

  const searchBar = (word: string) => {
    if (word !== "") {
      const newArr = items.filter((el) => el.title == word);
      setData(newArr);
    }
  };

  const allCategory = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category))),
  ];

  return (
    <div className="color-body font">
      <NavBar search={searchBar} />
      <Container>
        <Header />
        <Catogry filter={filterCategory} catogory={allCategory} />
        <Cards Data={ShopData} />
      </Container>
    </div>
  );
}

export default App;
