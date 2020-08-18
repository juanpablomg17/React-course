import React, { Component, Fragment } from 'react'

import { Button, Modal, ModalBody, ModalHeader, Col, Row, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';




const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


export default class CommentForm extends Component {

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

        alert("Current State is: " + JSON.stringify(values));
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
