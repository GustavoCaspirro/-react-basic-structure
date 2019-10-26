import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super(); // ele importa tudo que está na classe pai (neste caso Component)

        this.state = {
            results:[],
        };
    }
    onSearch = (event) => {
        //console.log("Valor:", event.currentTarget.value);
        //const valueInputSearch = event.currentTarget.value;
        const { value } = event.currentTarget;

        if(value.length >= 3) {
            axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                // handle success
                //console.log(data);
                this.setState({
                    results: data.results,
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
        }
    }

    renderItem(item) {
        return (
            <li key={ item.id }>
                { item.title }
            </li>
        );
    }

    render() {
        return(
            <div>
                <input type="text" onChange={ this.onSearch }/>

                <ul>
                    { this.state.results.map(this.renderItem) }
                </ul>
            </div>
        );
    }
}

export default Search;