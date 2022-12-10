import './ItemCardLarge.css';

import ItemCardSmall from './ItemCardSmall';

function ItemCardLarge(props) {
	return (
		<div className="item-card-large">
			<div style={{ position: 'relative' }}>
				{/* seller image */}
				<img className="seller-image-large" src={props.item.sellerImage} alt={props.item.sellerName}></img>
				{/* seller name */}
				<p className="seller-name-large">{props.item.sellerName}</p>
				{/* item title */}
				<p className="item-name-large">{props.item.name} - {props.item.condition}</p>
			</div>
			<div style={{ display: 'flex', clear: 'both' }}>
				<div>
					{/* item image */}
					<img className="item-image-medium" src={props.item.sellerImage} alt={props.item.sellerName}></img>
				</div>
				<div>

					<div className="info-box" style={{ display: 'flex', justifyContent:'space-evenly' }}>
						<div className='info-div'>
							<p><b>{props.item.distance} miles away</b></p>
							<p><b>Asking price:</b> ${props.item.price}</p>
							<p><b>Available as of:</b> <br />{props.item.date}</p>
							<p><b>{props.item.ship}</b></p>
						</div>
						<div className='info-div'>
							<button className="item-button-large">Buy</button>
							<button className="item-button-large">Make Offer</button>
							<button className="item-button-large">Offer Trade</button>
						</div>
						<div className='info-div' style={{marginLeft:'3rem'}}>
							<button style={{border:'none', backgroundColor:'rgba(0,0,0,0)', fontSize:'1.5rem', width:'6rem', height:'3rem', marginTop:'1rem', marginBottom:'1rem'}}>${props.item.price}.00</button>
							<button style={{width:'6rem', height:'3rem', fontSize:'1.3rem', marginBottom:'1rem'}}>$ 00.00</button>
							<button style={{width:'6rem', height:'3rem', marginBottom:'1rem'}}>Blue V</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className="item-name-large">Other listings from this seller:</p>
				<div className="items-section">
					{props.small.map(item => (
						<div>
							<ItemCardSmall item={item}></ItemCardSmall>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ItemCardLarge;
