import React, { Component } from 'react'
import './Pet.css'
import PetDisplay from './PetDisplay';
import axios from 'axios'


export default class Pet extends Component {
    constructor(){
        super()
        this.state={
            pets: [],
            petName: '',
            petImage: ''
        }
    }

    componentDidMount=()=>{
        axios.get('/api/pets')
        .then(res =>{
            this.setState({
                pets: res.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    handleImage=(val)=>{
        this.setState({
            petImage: val
        })
    }

    handleName(val){
        this.setState({
            petName: val
        })
    }

    handleAddPet = () => {
        axios.post('/api/pets',  {name: this.state.petName, image: this.state.petImage})
       .then(res => {
           this.setState({
               pets: res.data
           })
       })
       this.setState({petName: ''})
       this.setState({petImage: ''})
   }

   handleDeletePet = (data) => {
        this.setState({
        pets: data
        })
    }

   updatePet =(data)=>{
        this.setState({
        pets: data
        })
    }

    render() {
        console.log(this.state)
        const mappedPets= this.state.pets.map((pet, i)=>{
            return(
                <PetDisplay key={i} pet={pet} updatePet={this.updatePet} deletePet={this.handleDeletePet} />
            )
        })
        return (
            <div className='pets-flex-div'>
                <div>
                    <input placeholder='Enter Pet Name' onChange={(e)=>this.handleName(e.target.value)} value={this.state.petName}/>
                    <input placeholder='Enter Image URL' onChange={(e)=>this.handleImage(e.target.value)} value={this.state.petImage}/>
                    <button onClick={this.handleAddPet}>Add Pet</button>
                </div>
                <div className='pets'>
                 {mappedPets}
                </div>

            </div>
        )
    }
}
