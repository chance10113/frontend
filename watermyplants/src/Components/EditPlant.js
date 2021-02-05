import React, { useEffect , useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../Util/axiosWithAuth';


// To edit plant, prop drill formValue state from Card.js
// Change that state on the handleChange function
// Submit that Changed state as an axios(withAuth) put request
// Prop drill changed Plant state to update Plant list
// Push back to Home Component
const initialItem = {
    id:'',
    user_id:'',
    nickname:'',
    species:'',
    h2o_frequency:'',
    image_url:'',



}

const EditPlant = (props) => {
    let {id} = useParams();
    const newID = id.replace(/:/g, ''); 
   

    
    const {push} = useHistory();
    const [item,setItem] = useState(initialItem)
    console.log(item)
   
   
    useEffect(()=>{
        axiosWithAuth()
        .get(`https://water-my-plants-four.herokuapp.com/plants/${newID}`)
        .then(res=>{
            console.log(res)
            setItem(res.data)
        })
        .catch(err=>{
            console.log('Grab item error', err.response)
        })
    },[newID])
 
  
  

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://water-my-plants-four.herokuapp.com/plants/${newID}`, item)
        .then(res=>{
            props.setPlants(res.data)
            push('/plantlist')
        })
        .catch(err=>{
            console.log('edit error', err.response)
        })

    }
    return(
        <div>
          <form onSubmit={handleSubmit}>
              <label>
                  Nickname:
             <input 
             type='text'
             name='nickname'
             value={item.nickname}
             onChange={handleChange} 
             />
             </label>
             <label>species:
               <input 
             type='text'
             name='species'
             value={item.species}
             onChange={handleChange} 
             />
             </label>
             <label>
                 H2o
             <input 
             type='text'
             name='h2o_frequency'
             value={item.h2o_frequency}
             onChange={handleChange} 
             />
             </label>
             <label>image url
               <input 
             type='text'
             name='image_url'
             value={item.image_url}
             onChange={handleChange} 
             />
             </label>
            
             <button>Edit Plant</button>

         </form> 
        
        </div>
    )
}
export default EditPlant;