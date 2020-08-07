import React, { Component } from 'react';


import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


export default class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: this.props.d
        }

    }

  


    render() {

        const comments = this.props.d.comments.map((com) => {
            return(
                <div>
              
                <p>
                    <span>{com.comment}</span>
                </p>
                <p>
                    <span>{com.rating} Stars</span>
                </p>
                <p >
                    <span>-- { com.author } {com.date  }</span>
                </p>


            </div>
            )

        })

        return (
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <CardImg width="100%"  top src={this.props.d.image} alt={this.props.d.name} />
                        <CardBody>
                            <CardTitle>{this.props.d.name}</CardTitle>
                            <CardText>{this.props.d.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-6">
                <h3>Comments</h3>
                   {comments}


                </div>

            </div>

        );








    }


}