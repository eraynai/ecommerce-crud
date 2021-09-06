import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Delete from './delete'

class ItemList extends Component {
  state = {
    items: [],
  }

  async componentDidMount() {
    try {
      let fetchItemsResponse = await fetch('/api/item/')
      let items = await fetchItemsResponse.json()
      this.setState({ items: items })
    } catch (err) {
      console.error('Error', err)
    }
  }

  getOneDelete = async (id) => {
    try {
      let fetchItems = await fetch(`/api/item/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      let newItemList = await fetchItems.json()
      this.setState({ items: newItemList })
    } catch (err) {
      console.error('Err', err)
    }
  }
  render() {
    return (
      <>
        <h3>Items List</h3>
        <div>
          {this.state.items.length
            ? this.state.items.map((items) => (
                <table
                  className='table table-striped'
                  style={{ MarginTop: 20 }}
                >
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Item Category</th>
                      <th>Item Price</th>
                      <th>Item Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{items.item_description}</td>
                      <td>{items.itemOptions}</td>
                      <td>{items.item_size}</td>
                      <td>{items.item_price}</td>
                      <td>
                        <Link to={'/edit/' + items._id}>Edit</Link>
                      </td>
                      <td>
                        <Delete
                          id={items._id}
                          getOneDelete={this.getOneDelete}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))
            : 'You have no previous items'}
        </div>
      </>
    )
  }
}

export default ItemList
