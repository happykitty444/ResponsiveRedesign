import './MainItems.css';
import { useState } from "react";
import { Col, Row } from 'antd';

// import the images needed
import thai from "./images/thai.PNG";
import ItemCardSmall from './ItemCardSmall';
import ItemsSection from './ItemsSection';

function MainItems() {
  const itemDataSmall =
    [
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      }
    ]

    const itemDataRelevant =
    [
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      }
    ]

    const itemDataTop20 =
    [
      {
        "name": "Green Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Green Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      },
      {
        "name": "Green Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": thai,
        "price": 20
      }
    ]

  return (
    <div className="MainItems">

        <div>
        <h1 className="section-title">Listings Near You</h1>
        <h2>Shop By Location</h2>
        </div>

        <ItemsSection itemData={itemDataSmall}></ItemsSection>

        <h1 className="section-title">Looking For Items Like Yours</h1>
        <h3>Relevant to: </h3>
        
        <ItemsSection itemData={itemDataRelevant}></ItemsSection>

        <h1 className="section-title">Top 20 Listings</h1>
        <h2>See More Listings</h2>

        <ItemsSection itemData={itemDataTop20}></ItemsSection>

    </div>
  );
}

export default MainItems;
