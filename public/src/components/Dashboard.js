import react,{useState} from "react";
import axios from 'axios'

function Dashboard(){
    var tokenStr="No tokens present";
    const [dataDiv,setData]=useState("Unauthorized access to the token");
    async function clickHandle(){
        try{
            await axios({
                method:'get',
                url:"/api"
            }).then((res)=>{
                console.log(res)
                setData(res.data.msg)
            })
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="dashboard">
        <div className="dashboardHead">
            <h3>Dashboard</h3>
            <span>{tokenStr}</span>
        </div>
        <div className="dashboardBody">
            <div className="data">{dataDiv}</div>
            <button type="submit" className="dashboardSubmit" onClick={clickHandle}>Get Data</button>
        </div>
            
        </div>
    )
}

export default Dashboard