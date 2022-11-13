import React from 'react'
import { Shop_Data } from '../Shop_Data';

const Shop_Details = ({ temp }) => {
    return (
        <>
            <div className="shop_container">
                <div className="header">
                    <h3>{Shop_Data[temp - 1].namea}</h3>
                    <p>{Shop_Data[temp - 1].details}</p>
                </div>
                <div className="shop_item">
                    {

                        Shop_Data[temp - 1].products.map(x =>
                            <div className="card mb-3" style={{Width: "50rem"}}>
                                <div className="row g-0">
                                    <div className="col-md-4" >
                                        <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{x.product_name}</h5>
                                            <p className="card-text">{x.price}</p>
                                            <p className="card-text">{x.product_des}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Shop_Details