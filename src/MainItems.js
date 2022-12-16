import './MainItems.css';

import ItemCardSmall from './ItemCardSmall';
import ItemCardMedium from './ItemCardMedium';
import ItemCardLarge from './ItemCardLarge';
import DropDown from './DropDown';

// import the images needed
import headphones from "./images/headphones.png";


function MainItems() {
  const itemDataSmall =
    [
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      }
    ]

  const itemDataPreview =
    [
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      },
      {
        "name": "Red Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20
      }
    ]

  const itemDataRelevant =
    [
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "tag1": "Shoes",
        "tag1img": headphones,
        "tag2": "Shoes",
        "tag2img": headphones,
        "tag3": "Shoes",
        "tag3img": headphones,
        "tag4": "Shoes",
        "tag4img": headphones,
        "blurb": "I love the Yankees, the Celtics and the Mets. Size 14"
      },
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "tag1": "Shoes",
        "tag1img": headphones,
        "tag2": "Shoes",
        "tag2img": headphones,
        "tag3": "Shoes",
        "tag3img": headphones,
        "tag4": "Shoes",
        "tag4img": headphones,
        "blurb": "I love the Yankees, the Celtics and the Mets. Size 14"
      },
      {
        "name": "Blue Shoes",
        "condition": "Used",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "tag1": "Shoes",
        "tag1img": headphones,
        "tag2": "Shoes",
        "tag2img": headphones,
        "tag3": "Shoes",
        "tag3img": headphones,
        "tag4": "Shoes",
        "tag4img": headphones,
        "blurb": "I love the Yankees, the Celtics and the Mets. Size 14"
      }
    ]
    const DropDownRelevant =
    {
      "preview": "My Listings",
      "option1": "Blue Shoes",
      "option2": "Red Shoes",
      "option3": "Antique Chair"
    }

  const itemDataTop20 =
    [
      {
        "name": "Limited Edition Superman Comic Book circa 1985",
        "condition": "Mint",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "date": "May 1st",
        "ship": "Shipping Only",
        "id": 0
      },
      {
        "name": "Limited Edition Superman Comic Book circa 1985",
        "condition": "Mint",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "date": "May 1st",
        "ship": "Shipping Only",
        "id": 1
      },
      {
        "name": "Limited Edition Superman Comic Book circa 1985",
        "condition": "Mint",
        "distance": 0.1,
        "image": headphones,
        "price": 20,
        "sellerName": "TimmyTurbo020",
        "sellerImage": headphones,
        "date": "May 1st",
        "ship": "Shipping Only",
        "id": 2
      }
    ]

  return (
    <div className="MainItems">

      <div>
        <h1 className="section-title">Listings Near You</h1>
        <h2>Shop By Location</h2>
      </div>

      <div className="items-section">
        {itemDataSmall.map((item, index) => (
          <div>
            <ItemCardSmall key={index} item={item}></ItemCardSmall>
          </div>
        ))}
      </div>

      <h1 className="section-title">Looking For Items Like Yours</h1>
      <div style={{clear:'both', textAlign:'left'}}>
      <h3>Relevant to: </h3>
      <DropDown info={DropDownRelevant}/>
      </div>

      <div className="items-section">
        {itemDataRelevant.map((item, index) => (
          <div>
            <ItemCardMedium key={index} item={item}></ItemCardMedium>
          </div>
        ))}
      </div>

      <h1 className="section-title">Top 20 Listings</h1>
      <h2>See More Listings</h2>

      <div className="items-section">
        {itemDataTop20.map(item => (
          <div>
            <ItemCardLarge key={item.id} info={DropDownRelevant} small={itemDataPreview} item={item}></ItemCardLarge>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MainItems;
