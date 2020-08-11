import React, { Fragment } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";




export default function Details(props) {
    const dish = props.d;

    if (dish != null) {
        return (


            <Fragment>

                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1 mt-3">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1 mt-3 ">
                    
                        <h4>Comments</h4>
                        {dish.comments.map((com) => {
                            return (
                                <div>

                                    <p>
                                        <span>{com.comment}</span>
                                    </p>

                                    <p >
                                        <span>-- {com.author} {com.date}</span>
                                    </p>


                                </div>
                            )

                        })}
                    
                </div>

                    </div>
                </div>
              
            </Fragment>
        );
    }
    else {
        return <div></div>
    }
}







