import React , {useState , useEffect} from 'react'
import {  useNavigate } from "react-router-dom";
import Chart from './Chart';
import '../App.css'

export default function Apicalling() {
     const navigate = useNavigate();
    const [users , setusers] = useState();
    const [categ , setcategory] = useState();


    
    const getuser= async ()=>{
    
       const resp = await fetch('https://fakestoreapi.com/products');
       setusers(await resp.json());
        
    }

    useEffect(()=>{
        getuser();
    } , []);

   const getchart=()=>{
    navigate("/Chart");
   }


  return(
    <div>
      <h1 className='center'>LIST oF USERS</h1>
      <select name="select1" id="category" onClick={(e)=>{
        setcategory(e.target.value)}
      }>
      <option value="Select">Select category</option>
  <option value="electronics">electronics</option>
  <option value="jewlery">jewlery</option>
  <option value="Mens">Mens clothing</option>
  <option value="Womens">Womens clothing</option>
</select>
   <input placeholder='search item'  onClick={(e)=>{
        setcategory(e.target.value)}
      } />

      <div className='container-fluid mt-5'>
      <div className='row text-center'>
        {
          users.filter((curr)=>{
            if(categ==="" || categ==="select"){
                return curr;
            }
            else if(curr.category.toLowercase().include(categ)){
                return curr;
            }
          }  
          )
          .map((curr)=>(   
                    <div className='col-10 col-md-4 mt-5'>
                    <div class='card p-2'>
                    <div class='image'> <img src={curr.image} class='rounded' width='155' /></div>
                    <div class='ml-3 w-100'>
                        <h4 class='mb-0 mt-0 textleft'>{curr.id}</h4>

                     </div>
                        </div>
                    </div>
                )
          )
            }


  
      </div>

      </div>
      <button className='Butt1' onClick={getchart()}>Analyse</button>
    </div>
  )
}
