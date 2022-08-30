import React from "react";
import Card from "./Card";

const MenuList = () => {
  const divAttr: React.HtmlHTMLAttributes<HTMLDivElement> = {
    style: {
      display: "grid",
      padding: "2em",
      gridTemplateColumns: "repeat(3, 1fr)",
      textAlign: "center",
    },
    onMouseEnter: (e) => {
      e.preventDefault();
    },
  };

  const menus = ["Cara menggunakan API"];
  return (
    <div {...divAttr}>
      {menus.map((menu, index) => {
        return (
          <Card key={index}>
            <p>{menu}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default MenuList;
