import React from "react";
import "./proj.css";
import image1 from './images/proj.PNG';
import image2 from './images/password.PNG';
import image3 from './images/port.PNG';
import image4 from './images/burger.PNG';
import image5 from './images/trail.PNG';
const proj = () => (
  <div>	  
    <h1>projects</h1>
    <article class="proj1">
	<header>
		<h2><a href="https://genetworku.github.io/tmtg/">Project 1</a></h2>
	</header>
	<a href="https://genetworku.github.io/tmtg/" class="image1"><img class="img" src={image1} alt="project1 pic" /></a>
	<p>Due to the hard times we are facing this site is designed to distract the mind. We will generate a list of tasks that should be completed before your reward, The list might be long but the reward is great!</p>
	<ul class="actions special">
		<li><a href="https://github.com/genetworku/tmtg" class="button">Details</a></li>
	</ul>
	</article>
	<article>
		<header>
			<h2><a href=" https://genetworku.github.io/Password-Generator/">project 2</a></h2>
		</header>
		<a href=" https://genetworku.github.io/Password-Generator/" class="image-fit"><img class="img" src={image2} alt="password generator pic" /></a>
		<p>This Password-Generator website uses to create random password.</p>
		<ul class="actions special">
			<li><a href="https://github.com/genetworku/Password-Generator" class="button">Details</a></li>
		</ul>
	</article>
	<article>
		<header>
			<h2><a href="https://genetworku.github.io/portfolio/">project 3</a></h2>
		</header>
		<a href="https://genetworku.github.io/portfolio/" class="image-fit"><img class="img" src={image3} alt="portfolio page pic" /></a>
		<p>portfolio website has three pages such as about page, portfolio page and contact page.</p>
		<ul class="actions special">
			<li><a href="https://github.com/genetworku/portfolio" class="button">Details</a></li>
		</ul>
	</article>
	<article>
		<header>
			<h2><a href=" https://burger-place.herokuapp.com/">project 4</a></h2>
		</header>
		<a href="https://burger-place.herokuapp.com/" class="image-fit"><img class="img" src={image4} alt="burger pic" /></a>
		<p>Following the MVC design pattern, this burger app logger with MySQL, Node, Express, Handlebars and a homemade ORM.</p>
		<ul class="actions special">
			<li><a href="https://github.com/genetworku/Burger" class="button">Details</a></li>
		</ul>
	</article>

	<article>
		<header>
			<h2><a href=" https://trail-master.herokuapp.com/index">project 5</a></h2>
		</header>
		<a href="https://trail-master.herokuapp.com/index" class="image-fit"><img class="img" src={image5 } alt="trail pic" /></a>
		<p>Following the MVC design pattern, this trail-master app logger with sequelize, Node, Express, Handlebars and mustache.</p>
		<ul class="actions special">
			<li><a href="https://github.com/genetworku/Trail_Finder" class="button">Details</a></li>
		</ul>
	</article>
  </div>
);

export default proj;
