import React, { Component } from 'react'
import './Pet.css'
import PetDisplay from './PetDisplay';



export default class Pet extends Component {
    render() {
        return (
            <div className='pets-flex-div'>
                <div>
                    <input placeholder='Enter Pet Name' />
                    <input placeholder='Enter Image URL' />
                    <button>Add Pet</button>
                </div>
                <div className='pets'>
                 
                </div>
            <PetDisplay />
            </div>
        )
    }
}
