import React from 'react';
import ReactImage from "../img/react.png";
import "../styles/home.css";

const ulstyle = {
	padding:0
}

// const pstyle = {
// 	textDecorationLine: underline
// }

const Test = function(props) {


	return (
		<div>
	<nav>
		<div className="left-nav-container">
			Madeleine's Vanilla JS <span id="homeSpan">Home</span> Page
			<ul>
				<li><a href="lists.html">lists</a></li>
				<li><a href="jquery.html">jquery</a></li>
        <li id="dropDown" className="dropdown">
					<ul style={ulstyle}>
						<li className="innerList"><a href="forms.html">forms</a></li>
						<li className="innerList"><a href="forms2.html">forms2</a></li>
						<li className="innerList"><a href="forms3.html">forms3</a></li>
					</ul>
				</li>
				<li id="dropDownTrigger"><a href="#">forms</a></li>
        <li><a href="youTube.html">youTube</a></li>
				<li><a href="getData2.html">getData</a></li>
        <li><a href="trucks.html">trucks</a></li>
        <li><a href="pokemon.html">pokemon</a></li>
			</ul>
		</div>
		<div className="right-nav-container">

				<form>
					<label htmlFor="testInputBox">search</label>
					<input type="search" className="searchInput" id="testInputBox" name="search" />
				</form>

		</div>
	</nav>
	<div className="container">
		<div className="col col1"></div>
		<div className="col col2"> </div>
		<div className="col col3"> </div>
	</div>
	<br />
	<div id="testInput"></div>
	<div className="table-container">
		Click or Hover over Element or type a number from one to fifteen
		<input id="tableInput" />
		<table id="tableId">
			<thead id="table15">
			</thead>
      <tbody id="tableBody">
        <tr>
  				<td>element 1</td>
  				<td>element 2</td>
  				<td>element 3</td>
  				<td>element 4</td>
  				<td>element 5</td>
  			</tr>
  			<tr>
  				<td>element 6</td>
  				<td>element 7</td>
  				<td>element 8</td>
  				<td>element 9</td>
  				<td>element 10</td>
  			</tr>
  			<tr>
  				<td>element 11</td>
  				<td>element 12</td>
  				<td>element 13</td>
  				<td>element 14</td>
  				<td>element 15</td>
  			</tr>
      </tbody>
		</table>
		<br />
		<div id="showElem"></div>
		<button id="clearButton">Clear</button>
    <pre>
      Check out the pre tag.... for 'pre-formatted text'

      it preserves....

               spaces      unlike the p tag :)

    </pre>
		<p><b>This text is bold</b></p>
		<p><i>This text is italic</i></p>
		<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
		<p>Check it out <mark>mark</mark> girlfriend...</p>
		<p>Check it out <strong>strong</strong> girlfriend...</p>
		<p>Check it out <em>em</em> girlfriend...</p>
		<p>Check it out <del>del</del> girlfriend...</p>
		<p>Check it out <ins>ins</ins> girlfriend...</p>
		{/* <p style={pstyle}>
			Uses text-decoration:underline to underline...
		</p> */}
		<small>Small</small>
	</div>
</div>
	// {/* <script type="text/javascript" src="js/index.js"></script>
  // <script type="text/javascript" src="js/dropdown.js"></script> */}
		// <div>
		//
		// 	<h1>Hello Madeleine!</h1>
		//
		// 	<img src={ReactImage} alt="react" />
		// </div>
	)
}

export default Test;
