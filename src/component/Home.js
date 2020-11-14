import React, {useEffect , useState } from 'react';
import Additem from "./Additem";
import phoneimg from '../component/images/phone-app.webp';
import Appstore from '../component/images/appstore_2x.webp';
import Googleplay from '../component/images/playstore_2x.webp';




function Homepage(){
const [list , setList] = useState([]);
const [loading , setLoading] = useState(true);

useEffect( ()=>{
    if(loading){
        let _list = []
        for (var i= 0;i<20; i++){
            _list.push(<Additem placeholder={true} />);
        }
        
        setList(_list);
        console.log("chl rha ha sir",_list[0])
    }
}, list);




    return(
        <React.Fragment>
    <div className="home-page ">
        <div className="add-list flex">
        {list}
        </div>
        <button className="load-more fontr c333 s20 fontb anim">
                    Load More
        </button>
        
    </div>
    <div className="app-ribbon flex aic">
        <div className="img">
            <img src={phoneimg} alt="" className="bl" />
        </div>
        <div className="meta">
        <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
        <h2 className="slogan font s18 color"> Buy, sell and find just about anything using the app on your mobile</h2>
        </div>
        <div className="links">
        <h2 className="title fontb s20 color">GET YOUR APP TODAY</h2>
        <div className="flex as">
        <a href="#" className="noul bl"><img src={Appstore} alt="" /></a><br />
        <a href="#" className="noul bl"><img src={Googleplay} alt="" /></a></div>
        </div>

    </div>
    </React.Fragment>
    
    )
}
export default Homepage;