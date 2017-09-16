import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <FormattedMessage
                        id="header"
                        defaultMessage={`Hello you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                        values={{name: <b>{name}</b>, unreadCount: 1}}
                    />
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}
