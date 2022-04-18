import { Component } from 'react'
import { Accordion} from 'react-bootstrap'
import AddComment from './AddComment'
import CommentList from './CommentList'

class CommentArea extends Component {
    render(){
    return (
        <Accordion>
            <CommentList />
            <AddComment asin={this.props.asin}/>
        </Accordion>                                                
    )
}
}

export default CommentArea