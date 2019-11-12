import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {},
            active: true,
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}?attributes=title,price,initial_quantity,pictures,condition`)
            .then((response) => {
                this.setState({ 
                    data: response.data,
                    active: false,
                });
            });
    }

    render() {
        if ( this.state.active ) {
            return <Loading style={{ color: 'black' }} />;
        }

        return (<div>
            <h1>Teste</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button>OI</button>
        </div>);
    }
}

export default Product;