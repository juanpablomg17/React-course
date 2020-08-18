import React, { Fragment, Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";


import { Button, Modal, ModalBody, ModalHeader, Col, Row, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Link } from 'react-router-dom';



function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}





function RenderComments({comments, addComment, dishId}){

    
       if (comments != null) {

        let list = comments.map((comments)=>{

            return(
                <li key={comments.id} >
                    <div>
            <p>{comments.comment}  --------    Stars: {comments.rating}</p>
                        <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </div>
                </li>

            )
        })

        return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}/>

                    
                </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    

}


export default function Details(props) {
    const dish = props.dish;
    

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
                            <RenderDish dish={props.dish}/>           

                            <RenderComments 
                                comments={props.comments} addComment={props.addComment}
                                dishId={props.dish.id}/>
                    </div>
                </div>

            </Fragment>
        );
    }
    else {
        return <div></div>
    }
}




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));



class CommentForm extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isModelOpen: false
        };


    }


    toggleMOdal = () => {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }

    handleSubmit = (values) => {
        this.toggleMOdal();

        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

      
    }



    render() {
        return (
            <Fragment>

                <Button onClick={this.toggleMOdal} className="fa fa-pencil fa-lg" outline color="secondary">
                    Submit Comment
                </Button>


                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleMOdal}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>
                                    Rating
                                </Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        className="form-control" name="rating"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                </Col>


                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>
                                    Your Name
                                </Label>
                                <Col md={12}>
                                    <Control.text model=".author" name="author" id="author" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />

                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            
                                            minLength: '  Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />




                                </Col>

                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>
                                    Comment
                                </Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" id="comment" className="form-control"
                                        rows="6">


                                    </Control.textarea>

                                </Col>

                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>


                        </LocalForm>


                    </ModalBody>
                </Modal>

            </Fragment>
        )
    }
}











