import './ItemCardMedium.css';

function ItemCardMedium(props) {
	return (
		<div className="item-card-medium">
			<div style={{ position: 'relative' }}>
				{/* seller image */}
				<img className="seller-image-medium" src={props.item.sellerImage} alt={props.item.sellerName}></img>
				{/* seller name */}
				<p className="seller-name-medium">{props.item.sellerName}</p>
			</div>
			<div className="card-body-medium">
				<div style={{ paddingRight: '1rem' }}>
					<p className="labels-medium">Offering:</p>
					{/* item image */}
					<img className="item-image-medium" src={props.item.image} alt={props.item.name}></img>
					{/* name and condition*/}
					<p className="item-name-medium">{props.item.name} - {props.item.condition}</p>
					{/* distance */}
					<p className="item-distance-medium">{props.item.distance} miles away</p>
					{/* price */}
					<p className="item-price-medium">${props.item.price}</p>
				</div>
				<div style={{ position: 'relative' }}>
					<p className="labels-medium">Looking For:</p>
					<div>
					<div className="tag-div">
						<img className="item-tag-image" src={props.item.tag1img} alt={props.item.tag1}></img>
						<p className="item-tag">{props.item.tag1}</p>
					</div>
					<div className="tag-div">
						<img className="item-tag-image" src={props.item.tag2img} alt={props.item.tag2}></img>
						<p className="item-tag">{props.item.tag2}</p>
					</div>
					<div className="tag-div">
						<img className="item-tag-image" src={props.item.tag3img} alt={props.item.tag3}></img>
						<p className="item-tag">{props.item.tag3}</p>
					</div>
					<div className="tag-div">
						<img className="item-tag-image" src={props.item.tag4img} alt={props.item.tag4}></img>
						<p className="item-tag">{props.item.tag4}</p>
					</div>
					</div>
					<div style = {{clear:'both'}}>
					<p>{props.item.blurb}</p>
					</div>
				</div>
			</div>
			{/* button */}
			<button className="item-button-medium" onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</div>
	)
}

export default ItemCardMedium;
