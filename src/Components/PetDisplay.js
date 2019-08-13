import React, { Component } from 'react'
import './Pet.css'

export default class PetDisplay extends Component {
    constructor(){
        super()
        this.state={
            edit: false
        }
    }

    render() {
        return (
            <div>
                {!this.state.edit
                ?
                (<div className='pet-boxes'>
                <h4 className='pet-name'>Pet Name Will Go Here</h4>
                <button>Edit</button>
                <button>Delete</button>
                </div>
                )
                 :
                 (<div className='pet-boxes'>
                     <input placeholder='Edit Name Here'/>
                     <button>Submit</button>
                     <button>Delete</button>
                </div>)   
                }
            </div>
        )
    }
}
