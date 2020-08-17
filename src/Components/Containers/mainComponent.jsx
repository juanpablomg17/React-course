import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from '../Menu/menuComponent';
import Details from '../DishDetailComponent/dishDetailComponent';
import Header from '../HeaderComponent/HeaderComponent';
import Footer from '../footer/FooterComponent';
import Home from '../HomeComponent/HomeComponent';
import Contact from '../contact/ContactComponent';
import About from '../About/About';




const mapStateToProps = state => {
  return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }    
}



class Main extends Component {

  constructor(props) {
    super(props);
 
  }

  



  render() {

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} promotion={this.props.promotions.filter((promo) => promo.featured)[0]}  leader={this.props.leaders.filter((lead) => lead.featured)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Details dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const AboutPage = () => {
      return(
          <About leaders={this.props.leaders} />
      );

    }
    
    return (
      <div>
        <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
          <Route exact path="/">
            {HomePage ? <Redirect to="/home" /> : <HomePage />}
          </Route>
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/aboutus" component={AboutPage}/>
              <Route exact path="/contactus" component={Contact}/>


           
            </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));