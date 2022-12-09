import ItemCardSmall from './ItemCardSmall';

function ItemsSection(props) {
	return (
		<div className="items-section">
			{/* Map items from info to grid */}
				{props.itemData.map(item => (
						<div>
							<ItemCardSmall item={item}></ItemCardSmall>
						</div>
				))}
		</div>
	);
}
export default ItemsSection;
