import React from 'react';
import Api from './ref_focus';
import axios from 'axios';


class Appapi extends React.Component {
  state = { RandomJoke: '', categories: [], jokeByCategory: "" }
  async componentDidMount() {
    const objcategories = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    const categories = objcategories.data
    this.setState({ categories: categories });
  }

  gettindRandomJoke = async () => {
    try {
      const data = await axios.get('https://api.chucknorris.io/jokes/random')
      const randomJoke = data.data.value;
      this.setState({ RandomJoke: randomJoke });
    } catch (err) {
      console.error(err);
    }
  }
  getCategories = async (category) => {
    const objjoke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}&limit=1`)
    const joke = objjoke.data.value;
    this.setState({ jokeByCategory: joke });
  }

  render() {
    return (
      <div>
        {/* <Api /> */}
        <button onClick={this.gettindRandomJoke}> random joke</button>
        <h3>  {this.state.RandomJoke}</h3>
        <br />
        <br />
        {this.state.categories.map((category) => (
          <button key={category} onClick={() => this.getCategories(category)}>{category}</button>
        ))}
        <br />
            {this.state.jokeByCategory}
            
      </div>
    );
  }
}

export default Appapi;