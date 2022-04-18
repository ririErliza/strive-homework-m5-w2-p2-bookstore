import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import MyNav from './components/MyNav';
import dataBooks from "./data/Books.json"




function App() {
  return (
    <div >
      <MyNav title="Yo!Bookstore"/>
      <MyBadge text="Badge" color="danger" />
      <BookList books={dataBooks} />
      
    </div>
  );
}

export default App;
