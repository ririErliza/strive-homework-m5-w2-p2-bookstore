import { Col, Card } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'




class SingleBook extends Component{
    state = {
        display: false,
      }
 
    render(){
        return(
            <Col xs={6} md={3} className="mb-3">
                <Card
                    key={this.props.book.asin}
                    className={ this.state.display ? " BorderOn" : " BorderOff" }
                >

                    <Card.Img variant="top" src={this.props.book.img} className="imageBook" onClick={() => this.setState({display: !this.state.display})}/>
                    <Card.Body>
                        <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
                       
                    </Card.Body>
                    <CommentArea/>
                   
                    
                </Card>
            </Col>
            
            )
        }
            
    }

export default SingleBook