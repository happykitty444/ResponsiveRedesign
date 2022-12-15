import './Search.css'

function Search() {
	function myFunction() {
		console.log("function actvated")
		var x = document.getElementById("myDIV");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}

	return (
		<div>
			<div className="search-div">
				<input className="search-box" type="text" id="search" name="search" placeholder="Search"></input>
				<button className="search-button">Go</button>
				<button className='category-header' onClick={() => myFunction()}>Categories</button>
			</div>
			<div id="myDIV">
			<div className="category-div">
				<div className='category-mini'>
					<p>Comic Books</p>
					<p>Video Games</p>
					<p>Movies</p>
				</div>
				<div className='category-mini'>
					<p>Tools</p>
					<p>Appliances</p>
					<p>Utilities</p>
				</div>
				<div className='category-mini'>
					<p>Art</p>
					<p>Sports</p>
					<p>Cooking</p>
				</div>
				<div className='category-mini'>
					<p>Kitchen</p>
					<p>Bathroom</p>
					<p>Decor</p>
				</div>
				<div className='category-mini'>
					<p>Crafts</p>
					<p>Music</p>
					<p>Costume</p>
				</div>
				<div className='category-mini'>
					<p>Furniture</p>
					<p>Office</p>
					<p>Outdoors</p>
				</div>
			</div>
			</div>
		</div>
	);
}
export default Search;
