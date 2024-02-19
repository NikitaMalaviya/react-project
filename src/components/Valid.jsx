import React,{useState} from "react";

const Valid = ()=>{
    const[fname, setfname] = useState("")
    const[lname, setlname] = useState("")
    const[email, setemail] = useState("")
    const[number, setnumber] = useState("")
    const[add, setadd] = useState("")

    

    let submit =()=>{


        // console.log(fname,"fname");

        const data = {
            fname,
            lname,
            email,
            number,
            add,
        }

        console.log(data);
    }

    return(

        <div>
            {/* <h1>{fname}</h1>
            <h2>{number}</h2> */}
            <label>First Name:-</label>
            <input type="text" placeholder="FirstName" onChange={(e)=>setfname(e.target.value)}/>
            <input type="text" placeholder="LastName" onChange={(e)=>setlname(e.target.value)}/>
            <br />
            <label>Email:-</label>
            <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            <br />
            <label>Number:-</label>
            <input type="number" placeholder="number" onChange={(e)=>setnumber(e.target.value)}/>
            <br />
            <label>Address:-</label>
            <input type="text" placeholder="Address" onChange={(e)=>setadd(e.target.value)}/>
            <br /><br />
            <button onClick={submit}>Submit</button>

        </div>
    )
}

export default Valid