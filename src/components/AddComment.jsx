import { Component } from 'react'
import { Card,Accordion,Button, Form } from 'react-bootstrap'



class AddComment extends Component {
    state ={
        userComment :{
            name: '',
            rate: 1,
            comment:'',
            elementId : this.props.asin,

        }
    }

    submitComment= (e)=>{
        e.preventDefault()
        console.log("Submit comment!")
        

        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify(this.state.userComment),
            headers: {
                "Content-Type":"application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTAxOTUzMDgsImV4cCI6MTY1MTQwNDkwOH0.R40slCRU5znakDH4Eulwg2ZXXzzrhk0mhwcNDWP8WRA"
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.ok){
                alert("Comment added!")
            } else{
                alert("error")
            }
        })
        .catch((error)=>console.log(error))
    }

    render(){
    return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Add your comment
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form onSubmit={this.submitComment}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                placeholder="Your name..." 
                                value={this.state.userComment.name}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    this.setState({
                                        userComment:{
                                            ...this.state.userComment,
                                            name:e.target.value}
                                                })
                                            }}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Rate the book</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.userComment.rate}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        this.setState({
                                            userComment:{
                                                ...this.state.userComment,
                                                rate:e.target.value}
                                                    })
                                                }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} 
                                placeholder="Your comment..." 
                                value={this.state.userComment.comment}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    this.setState({
                                        userComment:{
                                            ...this.state.userComment,
                                            comment:e.target.value}
                                                })
                                            }}/>
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Add
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>

              
         
            </Card>
                                              
    )

}
}

export default AddComment