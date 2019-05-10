import React, { Component } from 'react';
import '../App.css'
import BookList from './BookList'
class App extends Component {

   state = {
      value: '',
      items: '',
   }

   handleInput = (e) => {
      this.setState({
         value: e.target.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.value.length === 0) return
      if (prevState.value !== this.state.value) {

         const API = `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}`;

         fetch(API)
            .then(response => response.json())
            .then(data => {
               this.setState({
                  items: data.items
               })

            })
      }
   }
   render() {

      return (
         <>

            <input
               onChange={this.handleInput}
               value={this.state.value} type="text"
               placeholder="Wpisz tytuł książki..."
            />

            <BookList items={this.state.items} value={this.state.value} />
         </>
      );
   }
}

export default App;
