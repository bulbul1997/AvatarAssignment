import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/open-peeps";
import {useState,useEffect} from 'react'
import { useMemo } from "react";
import '../App.css';
export default function Hi() {
  const avatar = useMemo(() => {
    return createAvatar(style, {
      dataUri: true,
      seed: 'male',
      flip:true,
      size: 128
    });
  }, []);
 
  const [state,setState]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setState(json))
    },[])

  return <div>
    
    {state.map((response)=>(
            <div>
               <table>
                <tr>
                    <th>
                      Id
                    </th>
                    <th>
                        image
                    </th>
                </tr>
                <tr>
                    <td>
                       {response.id}
                    </td>
                    <td>
                       <img src={avatar}/>
                    </td>
                </tr>
             </table>
               
           
            </div>
           
 
        ))}
   
    </div>;
}
