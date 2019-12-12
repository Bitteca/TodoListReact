import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm'
import TodoList from './TodoList';

class todo extends Component {
    state = {  }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default todo;