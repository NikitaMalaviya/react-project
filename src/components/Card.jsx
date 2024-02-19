import React from "react"
import img from "./img/e3b50c50af97828e90f53cafead7f5b0.png"


const Card = ({ data }) => {

    console.log(data);


    return (
        <>
            {
                data?.map((val, ind) => {

                    return (
                        <React.Fragment key={ind}>
                            <div className="col-md-3">
                                <div className="card" style={{ width: '18rem' }} >
                                    <img className="card-img-top" src={img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <p className="card-text">{val.desc}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )

}

export default Card