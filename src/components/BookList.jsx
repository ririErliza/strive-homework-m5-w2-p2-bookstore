import { Component } from "react";
import { Container, Row} from "react-bootstrap";

import SingleBook from "./SingleBook";


class BookList extends Component{
    state = {
        searchQuery: ''
    }
   render(){
    return (
        <Container>
            <Row className="justify-content-center">
                <input type="text" placeholder="Search title..." className="w-75" 
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
                />
            </Row>

            <Row className="justify-content-center mt-4">
            <h5> Click title to see comments</h5>
            </Row>
            
            <Row className="mt-4">
                
                {this.props.books
                .filter((book)=> book.title.toLowerCase().includes(this.state.searchQuery))
                .map(book=>(<SingleBook key={book.asin} book={book}/> 
                ))}
            </Row>
        </Container>
       ) 
    
    }


   }

   


export default BookList