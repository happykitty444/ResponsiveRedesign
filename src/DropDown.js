import './DropDown.css';

function DropDown(props) {
	return (
		<div>
			{/* <label for="drop">{props.info.preview}</label> */}

			<select name="drop" id="drop">
				<option value={props.info.option1}>{props.info.option1}</option>
				<option value={props.info.option2}>{props.info.option2}</option>
				<option value={props.info.option3}>{props.info.option3}</option>
			</select>
		</div>
	)
}

export default DropDown;
