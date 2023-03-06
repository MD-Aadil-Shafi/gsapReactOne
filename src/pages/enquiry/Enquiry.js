import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { API } from '../../API';
import { useNavigate } from 'react-router-dom';
import './enq.css'
import gsap from 'gsap';


const Enquiry = () => {
  const navigate = useNavigate()
    const [state,setState] = useState({
      name:'',
      email:'',
      message:'',
    })

    const {name,email,message} = state;
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      const tl = gsap.timeline({
          delay:1
      })
      tl.fromTo(
          ".envelope-div",
          {x:-400,scale:0.5,opacity:0},
          {x:0,scale:1,opacity:1 ,duration:1, delay:function(index){
              return 0.2 * index;//animate dalay of each element
          }}
      );
      tl.fromTo(
        ".name-inp",
        {opacity:0},
        {opacity:1 ,duration:1
        }
    );

  }, [])

    const handleChange = (e) =>{
      setState({...state,[e.target.name]:e.target.value})
    }

    const handleSubmit = async()=>{
      if(!email || !name || !message){
        return toast.error('All fields are required')
      }
      try{
        setLoading(true)
        let res = await axios.post(`${API}/contact/contact`,{...state})
        if(res.data.success === true){
          toast.success('message sent successfully');
          setState({...state},"")
          console.log(state)
          setTimeout(navigate('/'),3000)
          setLoading(false)
      }
      }catch(error){
        setLoading(false)
        //console.log(error)
        toast.error("Unable to send Message. Server Down. Please try later.")
      }
    }

    return (
      <div className='row justify-content-center enquiry-div mx-0'>
        <div className='col-md-4 p-5 envelope-div'>
        <img src='https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png' className='enq-img' alt=''/>
        </div> 
        <div className='col-md-6 p-5'>
            <h1 className='fw-light display-1 mb-2'>Enquiry</h1>

<div className="form-floating mb-3">
  <input type="text" onChange={handleChange} name='name' className="form-control" id="floatingInput" placeholder="John Doe" />
  <label htmlFor="floatingInput">Name</label>
</div>
<div className="form-floating mb-3">
  <input type="email" onChange={handleChange} name='email' className="form-control" id="floatingInput2" placeholder="name@example.com" />
  <label htmlFor="floatingInput2">Email address</label>
</div>
<div class="form-floating mb-5">
  <textarea class="form-control" onChange={handleChange} name='message' placeholder="Type your message" id="floatingTextarea" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea">Message</label>
</div>

<button className='btn btn-dark text-light w-100 px-5 name-inp' onClick={handleSubmit} disabled={loading===true}>
{loading === true ?
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                :
                "Send"    
                }
</button>

            
        </div>
        </div>
    )
}

export default Enquiry
