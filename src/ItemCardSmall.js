import './ItemCardSmall.css';

function ItemCardSmall(props) {
	return (
		<div className="item-card">
			{/* image */}
			<img className="item-image" src={props.item.image} alt={props.item.name}></img>
			{/* name and condition*/}
			<p className="item-name">{props.item.name} - {props.item.condition}</p>
			{/* distance */}
			<p className="item-distance">{props.item.distance} miles away</p>
			{/* price */}
			<p className="item-price">${props.item.price}</p>
			{/* button */}
			<button className="item-button" onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</div>
	)
}

export default ItemCardSmall;
