import React from "react";
import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import { data } from "./components/data";
import Valid from "./components/Valid";
// import n from "./components/img/pokemon-symbol-logo-png-31.png"
import Single from "./components/Single";
import Ref from "./components/Ref";

const App = () => {

  return (
    <>
      <Navbar/>
      {/* <div className="row col-md-12">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div> */}

      {/* <Valid/> */}
      <Single/>
      <Ref/>
    </>
  );
}

export default App;




// import React from 'react'
// import Card from './components/Card'
// import { data } from './components/data'
// import Navbar from './components/Navbar'
// import Count from './components/Count'
// import Valid from './components/Valid'

// const App = () => {

//   return (
//     <>
//       {/* <Navbar/> */}
//       {/* <div className="row col-md-12">
//       <div className="col-md-3">
//          <Card data={data}/>
//       </div>
      
     
//    </div> */}
//       {/* <div className='row'>
//           <Card data={data} />
//       </div> */}


//       {/* <About/> */}
//       <Count/>

//     </>
//   )
// }

// export default App