import { Card,Accordion,Button, Form } from 'react-bootstrap'


const AddComment = () => {

    return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Add your comment
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Rate the book</Form.Label>
                                <Form.Control
                                    as="select"
                                    required

                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                       
                           
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write here...</Form.Label>
                                <Form.Control as="textarea" rows={3} />
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

export default AddComment