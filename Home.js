import React from 'react';
import veg from './images/vegetable.png';
import food from './images/food.png';

const Home=()=>{
	return(
			<div class="newcontainer">
  				
  				<div class="row justify-content-md-center">
  					
  					<h1> For Food lovers </h1>
  					</div>

  					<div class="row justify-content-md-center">
     				<p> This website is totally dedicated to the recipes of foods from different parts of the world.
     				    I m professional chef so, this website is basically <br/> for protrayal of my passion regarding food. 
     				    Food is very important part of life for every people around the world. Good food makes people  <br/>healthy mentally and physically.
     				    To make delicious recipes of foods is an art and skill which is achieved with constant practice and hardwork.<br/> Moreover researching on different ingredients of food is also 
     				    essential to create tasty food. </p>
    			</div>

    			<div className="header-img">
    				<img src={veg} style={{width:"200px", height:"200px"}}/>

    			</div>
    			<div className="food-img">
    				<img src={food} style={{width:"150px", height:"150px"}}/>
    			</div>
  				
  				

		</div>
		
		)
}
export default Home;