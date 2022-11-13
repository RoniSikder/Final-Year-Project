import React from 'react'
import { useNavigate } from 'react-router'
import SearchBar from '../SearchBar';
import { Shop_Data } from '../Shop_Data';

const OrderPage_Landing = ({setTemp}) => {
    let navigation = useNavigate()
    return (
        <>
            <SearchBar/>
            <div className="home_container">
                <h3>Total {Shop_Data.length} Restaurants Found..</h3>
                <div className="shopList">
                    {
                        Shop_Data.map(x =>
                            <div onClick={()=>{navigation("/shop_details");setTemp(x.id)}} className="card" style={{width: "18rem"}}>
                                <img src={x.shop_image} className="card-img-top" alt="..." style={{height: "400px"}}/>
                                <div className="card-body">
                                    <h5 className="card-text">{x.namea}</h5>
                                    <p className="card-text">{x.address}</p>
                                    <p className="card-text">{x.details}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default OrderPage_Landing