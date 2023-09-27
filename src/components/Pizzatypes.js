import React from "react";
import Items from "./Item";

class PizzaTypes extends React.Component {
  render() {
    return (
      <div className="container pizzasec">
        <h3 className="text-center">Pizza Types</h3>
        <div className="row">
          <Items
            imgSrc="pizza images/pizza1.jpg"
            title="Pepperoni Pizza"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus deleniti ducimus ipsa asperiores. Quis perspiciatis magnam velit, atque obcaecati explicabo odit placeat culpa ducimus ullam quia voluptates labore, veritatis saepe."
          />

          <Items
            imgSrc="pizza images/pizza1.jpg"
            title="Hawaian Pizza"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus deleniti ducimus ipsa asperiores. Quis perspiciatis magnam velit, atque obcaecati explicabo odit placeat culpa ducimus ullam quia voluptates labore, veritatis saepe."
          />

          <Items
            imgSrc="pizza images/pizza1.jpg"
            title="Pineapple Pizza"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus deleniti ducimus ipsa asperiores. Quis perspiciatis magnam velit, atque obcaecati explicabo odit placeat culpa ducimus ullam quia voluptates labore, veritatis saepe."
          />

          <Items
            imgSrc="pizza images/pizza1.jpg"
            title="Vegetarian Pizza"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus deleniti ducimus ipsa asperiores. Quis perspiciatis magnam velit, atque obcaecati explicabo odit placeat culpa ducimus ullam quia voluptates labore, veritatis saepe."
          />
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
