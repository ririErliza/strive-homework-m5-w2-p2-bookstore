import { Component } from 'react'
import { Accordion, Card} from 'react-bootstrap'
import AddComment from './AddComment'
import CommentList from './CommentList'

class CommentArea extends Component {
    state={
        comments:[],
    }

    componentDidMount = () =>{
        this.getComments()
    }

    getComments = () =>{
        fetch("https://striveschool-api.herokuapp.com/api/comments/"+
        this.props.asin, {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTAxOTUzMDgsImV4cCI6MTY1MTQwNDkwOH0.R40slCRU5znakDH4Eulwg2ZXXzzrhk0mhwcNDWP8WRA"
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.ok){
                let data = response.json()
                this.setState({
                    comments:data,
                })
            } else{
                alert("error")
            }
        })
        .catch((error)=>console.log(error))
    }
    


    render(){
    return (
        <Accordion>
            {this.state.comments.map((comment)=> (
                 <Card>
                 <Accordion.Toggle as={Card.Header} eventKey="1">
                 Read all comments
                 </Accordion.Toggle>
                 <Accordion.Collapse eventKey="1">
                     <Card.Body>

                        <li key={comment._id}>{comment.name}|{comment.rate}|{comment.comment}</li>
                         {/* <SingleComment /> */}
                      
                     </Card.Body>
                 </Accordion.Collapse>
             </Card>
                // <CommentList />
            )
            )};
            
            <AddComment asin={this.props.asin}/>
        </Accordion>                                                
    )
}
}


export default CommentArea