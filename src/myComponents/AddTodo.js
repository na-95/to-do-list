import React, { Component } from 'react'
import v4 from 'uuid'

export default class AddTodo extends Component {

    state = {
        title: '',
    }

    onChange = (e) => {

        this.setState({
            title: e.target.value,
            completed: false,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title, v4());
        this.setState({
            title: ''
        })
    }


    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                    <input name="title" placeholder='Add Items Here...' style={{
                        flexGrow: '1',
                        padding: '5px',

                    }} type="text" onChange={this.onChange} value={this.state.title} />
                    <input style={{
                        padding: '5px',
                        cursor: 'pointer'
                    }} type="submit" />
                </form>
            </div >
        )
    }
}

