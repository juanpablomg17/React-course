import React, {Component} from 'react';


import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


export default class Details extends Component{

    constructor(props){
        super(props);

        this.state =  {
            dish : this.props.d
        }
       
    }

  


    render(){



        return(

            <Card>
            <CardImg top src={this.props.d.image} alt={this.props.d.name} />
            <CardBody>
                <CardTitle>{this.props.d.name}</CardTitle>
                <CardText>{this.props.d.description}</CardText>
            </CardBody>
        </Card>
        );

            

        


       

    }


}