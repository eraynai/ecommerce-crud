import React, { Component } from 'react'

class EditTodo extends Component {
  state = {
    item_description: '',
    itemOptions: '',
    item_size: '',
    item_price: '',
  }

  async componentDidMount() {
    try {
      let fetchItemsResponse = await fetch(
        '/api/item/' + this.props.match.params.id
      )
      let item = await fetchItemsResponse.json()
      this.setState({
        item_description: item.item_description,
        itemOptions: item.itemOptions,
        item_size: item.item_size,
        item_price: item.item_price,
      })
    } catch (err) {
      console.error('Error', err)
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      const fetchResponse = await fetch(
        '/api/item/update/' + this.props.match.params.id,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item_description: this.state.item_description,
            itemOptions: this.state.itemOptions,
            item_size: this.state.item_size,
            item_price: this.state.item_price,
          }),
        }
      )
      this.props.history.push('/')
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad Request')
    } catch (err) {
      console.err('Error', err)
    }
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Update Item</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Item Description</label>
            <input
              type='text'
              className='form-control'
              name='item_description'
              value={this.state.item_description}
              onChange={this.handleChange}
            />
          </div>

          <div className='form-group size' style={{ marginTop: 20 }}>
            <h6>Choose A Size</h6>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='item_size'
                id='small'
                value='Small'
                checked={this.state.item_size === 'Small'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>Small</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='item_size'
                id='medium'
                value='Medium'
                checked={this.state.item_size === 'Medium'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='item_size'
                id='large'
                value='Large'
                checked={this.state.item_size === 'Large'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>Large</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='item_size'
                id='xl-large'
                value='XL-Large'
                checked={this.state.item_size === 'XL-Large'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>XL-Large</label>
            </div>
          </div>
          <div className='form-group size' style={{ marginTop: 20 }}>
            <h6>Choose A Category</h6>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='itemOptions'
                id='tShirt'
                value='T-Shirt'
                checked={this.state.itemOptions === 'T-Shirt'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>T-Shirt</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='itemOptions'
                id='sweater'
                value='Sweater'
                checked={this.state.itemOptions === 'Sweater'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>Sweater</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='itemOptions'
                id='shorts'
                value='Shorts'
                checked={this.state.itemOptions === 'Shorts'}
                onChange={this.handleChange}
              />
              <label className='form-check-label'>Shorts</label>
            </div>
          </div>
          <div className='form-group' style={{ marginTop: 20 }}>
            <label>Item Price</label>
            <input
              type='text'
              className='form-control'
              name='item_price'
              value={this.state.item_price}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group' style={{ marginTop: 20 }}>
            <input
              type='submit'
              value='Submit Edited Item'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default EditTodo
