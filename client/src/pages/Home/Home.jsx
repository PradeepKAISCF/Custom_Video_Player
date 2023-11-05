import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import { getAllVideo } from "../../actions/video";
import Videoplayer from "../Videoplaye";
function Home() {
  const dispatch = useDispatch()
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  //console.log(vids)
   

  return (
    <div>
        <h1>Videos Uploaded</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gridGap:'20px', padding:'20px'}}>
        {
            vids?.reverse().map(vi=>
                {
                    return (
                        <div key={vi._id} >
                            <Link to={`/videopage/${vi?._id}`}>
                                <video src={`http://localhost:5000/${vi.filePath}`} style={{width:'1500pxx' ,height:'150px'}}/>
                            </Link>
                            <h5 style={{textAlign:'center'}}>{vi.videoTitle}</h5>
                        </div>
                    )
                })
        }
      </div>
    </div>
  );
}

export default Home;
