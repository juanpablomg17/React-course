import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from '../Menu/menuComponent';
import Details from '../DishDetailComponent/dishDetailComponent';
import Header from '../HeaderComponent/HeaderComponent';
import Footer from '../footer/FooterComponent';
import Home from '../HomeComponent/HomeComponent';
import Contact from '../contact/ContactComponent';
import About from '../About/About';

// DATA
import { DISHES } from '../data/dishes';
import { COMMENTS } from '../data/comments';
import { LEADERS } from  '../data/leader';
import { PROMOTIONS } from '../data/promotions'; 




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
  
    };
  }



  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]}  leader={this.state.leaders.filter((lead) => lead.featured)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Details dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const AboutPage = () => {
      return(
          <About leaders={this.state.leaders} />
      );

    }
    
    return (
      <div>
        <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/aboutus" component={AboutPage}/>
              <Route exact path="/contactus" component={Contact}/>


           
            </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;