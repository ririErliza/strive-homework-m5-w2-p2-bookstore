import { Col, Card } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'




class SingleBook extends Component{
    state = {
        display: false,
        selected: false,
      }
 
    render(){
        return(
            <Col xs={6} md={3} className="mb-3">
                <Card
                    key={this.props.book.asin}
                    className={ this.state.display ? " BorderOn" : " BorderOff" }
                    
                >

                    <Card.Img variant="top" src={this.props.book.img} className="imageBook" onClick={() => this.setState({display: !this.state.display})}/>
                    <Card.Body onClick={() => this.setState({ selected: !this.state.selected })}>
                        <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
                       
                    </Card.Body>

                    {this.state.selected && <CommentArea asin={this.props.book.asin} />}
                   
                    
                </Card>
            </Col>
            
            )
        }
            
    }

export default SingleBook

// state = {
//     display: false, //this is from previous homework to change border color when image is clicked
//     selected: false, //this is for this hw to make comment area appear when card body is clicked
//   }