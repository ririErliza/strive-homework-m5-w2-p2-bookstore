import { Card,Accordion } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = () => {

    return (
      
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Read all comments
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <SingleComment />
                     
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
                                                    
    )
}

export default CommentList