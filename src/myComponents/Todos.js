import React, { Component } from 'react'
import Todo from "./Todo";
import AddTodo from './AddTodo';
import v4 from 'uuid';

export default class Todos extends Component {
    state = {
        tasks: [{
            title: 'Wash laundry',
            completed: false,
            id: v4()
        }, {
            title: 'Cook food',
            completed: false,
            id: v4()
        }, {
            title: 'Destroy india',
            completed: false,
            id: v4()
        }]
    }

    check = (id) => {
        let newState = this.state.tasks.map(item => {
            if (item.id === id) {
                return {
                    title: item.title,
                    completed: !(item.completed),
                    id: item.id
                }
            }
            return item;
        })

        this.setState({
            tasks: newState
        })
    }

    addItem = (item, id) => {
        let newItem = {
            title: item,
            completed: false,
            id: id
        }
        this.setState({
            tasks: [...this.state.tasks, newItem]
        })
    }

    delItem = (id) => {
        let newState = this.state.tasks.filter(item => !(item.id === id))
        this.setState({
            tasks: newState
        })
    }


    render() {
        return (
            <div>
                <AddTodo addItem={this.addItem} submit={this.onSubmit} />
                <Todo delItem={this.delItem} check={this.check} tasks={this.state.tasks} />
            </div>
        )
    }
}
