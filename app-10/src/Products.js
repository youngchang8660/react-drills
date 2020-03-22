import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products')
        .then (res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        let productsList = this.state.products.map((product, index) => {
            if (product.image) {
                return (
                    <Link key={index} to ={`/details/${product.id}`}>
                        <img alt='product' src={product.image} width='200'/>
                    </Link>
                )
            }
        })
        return (
            <div>
                <h1>Products</h1>
                {productsList}
            </div>
        )
    }
}


export default Products