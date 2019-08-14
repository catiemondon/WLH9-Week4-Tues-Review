

//This is where we will store our data for this project
let pets=[
    {id: 0, name:'Jeff Gerald' , image: 'https://i1.wp.com/meowlogy.com/wp-content/uploads/2017/08/Finger-Monkey-4.jpg?fit=810%2C1080&ssl=1'},
    {id: 1, name: 'Jimmy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHz5PR7f_yjnmeIxV5Wp0PMZ6-i2HX2q9FLk6f2o4lMw7jmEX'},
    {id: 2, name: 'Lil Jay Jay', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcbtm6u00H1H9kWTsmHlP2mxE2cHQuoDmtUEhOWvIYWjlKrpU'}
]

//This is where we will write the logic for our endpoints

module.exports={
    //this get endpoint will send our entire pets array to our front end
    getPets: (req, res)=>{

        res.status(200).send(pets)
    },

    //this post endpoint will create a new pet, then send the updated array with the new pet to the front end
    createPet: (req, res)=>{
        //here we will use to check if the pets array has a length (or items in it) with a ternary. If it does and runs true, then it will create a variable called id and set it equal to one more than the last id in the array. For example, if the last id in the array is equal to 2, it will create a new varialble called id equal to 3. this is how our Id's will increment when we create data. If there is nothing in the array, it will set the Id to 0.
        pets.length
        ? id =pets[pets.length -1].id + 1
        : id = 0

        //here we are storing the name from our front end and the image from our front end in an object, with the id we just generated above in the ternary. 
        const newPet = {
            name: req.body.name,
            image: req.body.image,
            id
        }

        //now we will push our new pet object into our pets array so we can use our new object
        pets.push(newPet)

        //lastly, we'll send that updated pets array with the new pet object back to our front end
        res.status(200).send(pets)
    },

    //this put endpoint will update a pets name (based on their ID), then send the updated array with the updated pet name to the front end
    updatePet: (req, res)=>{
        //first, we need to pull off the id that we're sending as params on the url from the front end
        const {id} =req.params

        //then, we need to pull off the updatedPet object that we send on the body of the request from the front end. 
        const updatedPet= req.body

        //in order to update the correct pets name, we will use the array 'find' method to match the id from our params with the pet that has the same id, and store it on the variable 'myPet'
        let myPet = pets.find(pet =>{
            return pet.id === +id
        })

        //then, we'll used that found pet from above and update its name with the updatedPet.name from the req.body on our front end
        myPet.name = updatedPet.name

        //lastly, we'll send the entire array, with updated pet name to the front end
        res.status(200).send(pets)
    },

    //this delete end point will delete a pet, based on their ID 
    deletePet: (req, res)=>{
        //first, we will grab the ID off of the params on the endpoint URL
        const {id} = req.params;

        //next, we will use the array method 'filter' on our pets array to find all the pets that don't have the matching ID. By setting it equal to our same array name, it will modify the value of our original array, making it equal all the pets but the one we wanted deleted. Aka, the desired deleted pet is no longer in the array and effectively 'deleted'
        pets = pets.filter((pokemon) => pokemon.id !== +id)

        //then we will send the modified array back to our front end. Reminder: because we filtered out the one we wanted deleted, it has been 'deleted' and is no longer being stored on our pets array.
        res.status(200).send(pets)
    }

}