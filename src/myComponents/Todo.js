import React, { Component } from 'react';
import v4 from 'uuid';

export default class Todo extends Component {


    onChange = (e) => {
        this.props.check(e.target.id)
    }

    onClick = (e) => {
        this.props.delItem(e.target.id)
    }

    render() {
        // const titles = this.props.tasks.map(item => <p value={item.title} >{item.title}</p>)
        return (
            this.props.tasks.map(item =>
                <p key={v4()} style={{
                    fontSize: '1rem',
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    borderLeft: '1px solid black',
                    padding: '20px 15px',
                    backgroundColor: '#f4f4f4',
                    textDecoration: item.completed ? 'line-through' : 'none'
                }} value={item.title}><input type="checkbox" onChange={this.onChange} id={item.id} />{' ' + item.title} <button id={item.id} onClick={this.onClick} style={buttonStyle}>X</button></p>
            )
        )
    }

}

const buttonStyle = {
    float: 'right',
    padding: '2px 7px',
    color: 'white',
    backgroundColor: 'Red',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}