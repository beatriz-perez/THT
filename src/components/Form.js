import React, { Component } from 'react'

// Componentes:
import SelectInput from './FormComponents/SelectInput';
import NumberInput from './FormComponents/NumberInput';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.preventSubmit = this.preventSubmit.bind(this);
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {info:{amount, from, to}, media, task} = this.props;

        return (
            <form>
                <SelectInput                    
                    name="from" 
                    value={from} 
                    task={task}
                    media={media}
                    labelText="de"
                    compare={to}
                />
                <SelectInput                    
                    name="to" 
                    value={to} 
                    task={task}
                    media={media}
                    labelText="a"
                    compare={from}
                />
                <NumberInput
                    name="amount" 
                    value={amount} 
                    task={task} 
                    labelText="amount"
                    sampleText="1"
                />
            </form>
        )
    }
}
