import './ItemCardMedium.css';

function ItemCardMedium(props) {
	return (
		<div className="item-card-medium">
			<div style={{position: 'relative'}}>
			{/* seller image */}
			<img className="seller-image-medium" src={props.item.sellerImage} alt={props.item.sellerName}></img>
			{/* seller name */}
			<p className="seller-name-medium">{props.item.sellerName}</p>
			</div>
			<div style={{clear:'both'}}>
			{/* item image */}
			<img className="item-image-medium" src={props.item.image} alt={props.item.name}></img>
			{/* name and condition*/}
			<p className="item-name-medium">{props.item.name} - {props.item.condition}</p>
			{/* distance */}
			<p className="item-distance-medium">{props.item.distance} miles away</p>
			{/* price */}
			<p className="item-price-medium">${props.item.price}</p>
			</div>
			{/* button */}
			<button className="item-button-medium" onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</div>
	)
}

export default ItemCardMedium;
