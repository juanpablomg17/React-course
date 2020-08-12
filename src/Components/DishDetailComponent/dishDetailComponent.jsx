import React, { Fragment } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import { Link } from 'react-router-dom';




export default function Details(props) {
    const dish = props.dish;
    const comments = props.comments;

    if (dish != null) {
        return (


            <Fragment>

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home' >Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to='/menu' >Menu</Link>
                            </BreadcrumbItem>
                             <BreadcrumbItem active>{props.dish.name } </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>

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
                            {comments.map((com) => {
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









