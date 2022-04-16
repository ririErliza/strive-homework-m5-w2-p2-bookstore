import { Accordion} from 'react-bootstrap'
import AddComment from './AddComment'
import CommentList from './CommentList'

const CommentArea = () => {

    return (
        <Accordion>
            <CommentList />
            <AddComment />
        </Accordion>                                                
    )
}

export default CommentArea