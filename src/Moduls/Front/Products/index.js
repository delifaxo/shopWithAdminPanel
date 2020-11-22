import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, Card } from 'react-bootstrap'
import img_card from '../../../images/img_card.png'
import { reservedProductId } from './crud'
import './index.scss'

export default class ProductsFront extends Component {

    state = {
        loader: {},
        error: {}
    }

    buyProduct = (id) => {
        this.setState({
            loader: {
                ...this.state.loader,
                [id]: true,
            }
        })

        reservedProductId(id)
        .catch(er => {
            this.setState({
                error: {
                    ...this.state.error,
                    [id]: 'ERROR',
                }
            }, () => {
                setTimeout(() => {
                    this.setState({
                        error: {
                            ...this.state.error,
                            [id]: false,
                        }
                    })
                }, 1000);
            })
        })
        .finally(() => {
            this.setState({
                loader: {
                    ...this.state.loader,
                    [id]: false,
                }
            })
        })
    }


    render() {
        const products = [
            { id: 1, name: 'Item - 1', coast: 100, limit: 1, },
            { id: 2, name: 'Item - 2', coast: 200, limit: 1, },
            { id: 3, name: 'Item - 3', coast: 300, limit: 1, },
            { id: 4, name: 'Item - 4', coast: 400, limit: 1, },
            { id: 5, name: 'Item - 5', coast: 450, limit: 1, },
            { id: 6, name: 'Item - 6', coast: 400, limit: 0, },
        ]
        const { loader, error } = this.state;
        return (
            <div className="product-list">
                {
                    products.map(item => {
                        return (
                            <Card key={item.id}>
                                {/* <Card.Img variant="top" src={img_card} /> */}
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.coast} $
                                    </Card.Text>
                                    <Button disabled={!item.limit || loader[item.id]} onClick={() => this.buyProduct(item.id)} variant="primary">
                                        {
                                            item.limit ? 'Buy' : 'Not available'
                                        }
                                        </Button>
                                    <Card.Text>
                                        {
                                            error[item.id]
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
