import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import './search.css';

// const style = {
//     backgroundColor: 'black'
// };

class Search extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
        };
    }

    onSearch = (event) => {
        const { value } = event.currentTarget;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                
                this.setState({
                    results: data.results,
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    renderItem(item) {
        return (
            <li key={ `item_${item.id}` }>
                { item.title }
                <Button 
                    label="Abrir o produto" 
                    to={ `/product/${item.id}` }
                    // style={ style }
                    class="btn-go-product"
                />
            </li>
        );
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={ this.onSearch }
                    placeholder="Buscar produtos, marcas e muito mais…"
                />

                <ul>
                    { this.state.results.map(this.renderItem)  }
                </ul>
            </div>
        );
    }
}

export default Search;