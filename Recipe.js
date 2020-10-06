import React from 'react';
import capresesalad from './images/caprese.jpg';
import crabsalad from './images/crabsalad.jpg';
import Brie from './images/brie.jpg';
import Tartare from './images/tartar.jpg'
import Etonmess from './images/etonmess.jpg';
import Amusebouche from './images/Amusebouche.png';

const Recipe=()=>{
	return(
		<div class="container">
  <div class="row">
    <div class="col-sm">
      
		<div class="card" >
  <img class="card-img-top" src={capresesalad} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">CapreseSalad</h5>
    <p class="card-text">It is italian salad</p>
    <a href="/capresesalad" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
		
    </div>
    <div class="col-sm">
     	<div class="card" >
  <img class="card-img-top" src={crabsalad} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">CrabSalad</h5>
    <p class="card-text">It is popular salad </p>
    <a href="/crabsalad" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
     	<div class="card" >
  <img class="card-img-top" src={Brie} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Fried Brie</h5>
    <p class="card-text">Fried brie served with hazalnut and honey.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-sm">
      
		<div class="card" >
  <img class="card-img-top" src={Tartare} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Steak Tartare</h5>
    <p class="card-text">It is raw steak dish.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
		
    </div>
    <div class="col-sm">
     	<div class="card" >
  <img class="card-img-top" src={Etonmess} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">EtonMess</h5>
    <p class="card-text">It is famous english dessert.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
     	<div class="card" >
  <img class="card-img-top" src={Amusebouche} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Amusebouche</h5>
    <p class="card-text">It is small appetizer.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
	
		)
}
export default Recipe;