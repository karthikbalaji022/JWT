import react,{useState,useContext} from "react";
import axios from 'axios'
import prosPass, { propsPass } from '../App'
function Dashboard(){
    const {present,SetPresent}=useContext(propsPass)
        var tokenStr =present===true?"Token available":"No tokens present";
        const tokenAvailable={color:present===true?"green":"red"}
        const [dataDiv,setData]=useState("Unauthorized access to the token");

    async function clickHandle(){
        if(localStorage.getItem("token")!==null){
            const token=localStorage.getItem("token");
        try{
            await axios({
                method:'get',
                url:"/api/v1/dashboard",
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }).then((res)=>{
                console.log(res)
                setData(res.data.msg)
            })
        }catch(e){
            console.log(e)
        }
    }
    }
    return (
        <div className="dashboard">
        <div className="dashboardHead">
            <h3>Dashboard</h3>
            <span style={tokenAvailable}>{tokenStr}</span>
        </div>
        <div className="dashboardBody">
            <div className="data">{dataDiv}</div>
            <button type="submit" className="dashboardSubmit" onClick={clickHandle}>Get Data</button>
        </div>
            
        </div>
    )
}

export default Dashboard