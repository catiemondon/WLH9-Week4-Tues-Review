import React, { Component } from 'react'
import './Pet.css'
import axios from 'axios';

export default class PetDisplay extends Component {
    constructor(){
        super()
        this.state={
            edit: false,
            editName: ''
        }
    }

handleToggle=()=>{
    this.setState({
        edit: !this.state.edit
    })
}


handleInput=(val)=>{
    this.setState({
        editName: val
    })
}

handleUpdatePet=(id)=>{
    let updatedPet= {
        name: this.state.editName
    }
    axios.put(`/api/pets/${id}`, updatedPet)
    .then(res =>{
        this.props.updatePet(res.data)
        this.handleToggle()
    })
} 

handleDeletePet = () => {
    axios.delete(`/api/pets/${this.props.pet.id}`)
    .then(res => {
        this.props.deletePet(res.data)
        if(this.state.edit){
            this.handleToggle()
        }
    })
}

    render() {
        
        return (
            <div>
                {!this.state.edit
                ?
                (<div className='pet-boxes'>
                <h4 className='pet-name'>{this.props.pet.name}</h4>
                <img src={this.props.pet.image} alt='cute animals'/>
                <button onClick={this.handleToggle}>Edit</button>
                <button onClick={()=>this.handleDeletePet(this.props.pet.id)}>Delete</button>
                </div>
                )
                 :
                 (<div className='pet-boxes'>
                     <input placeholder='Edit Name Here' onChange={(e)=> this.handleInput(e.target.value)} value={this.state.editName}/>
                     <button onClick={()=>this.handleUpdatePet(this.props.pet.id)}>Submit</button>
                     <button onClick={()=>this.handleDeletePet(this.props.pet.id)}>Delete</button>
                </div>)   
                }
            </div>
        )
    }
}
