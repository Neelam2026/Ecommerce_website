import { useEffect, useState } from "react"
import {useNavigate,useLocation } from "react-router-dom"
import "../Styles/Products.css"

export const Product=()=>{
    const search = useLocation().search;
    const sort=new URLSearchParams(search).get('_sort') || "price"
    const sortvalue =new URLSearchParams(search).get('_order') || "desc"

    const navigate=useNavigate()
    const [products,setProduct]=useState([])
useEffect(()=>{
    getData()
},[])
const getData=async()=>{
    let products= await fetch("http://localhost:8080/products")
    let p=await products.json()
    setProduct(p)
    console.log("p",p)
}
const SortbyPrice=async(e)=>{
    let products= await fetch(`http://localhost:8080/products?_sort=price&_order=${e.target.value}`)
    let p=await products.json()
    navigate(`/products?_sort=price&_order=${e.target.value}`)
    setProduct(p)
    
}


    return (
        <div className="box">
        <div>
            <select onChange={SortbyPrice}>
                <option value="desc">High</option>
                <option value="asec">Low</option>

            </select>
        </div>
            <div className="Container">
            {products.map((e,i)=>{
                return (
                    <div key={e.i}>
                    <div><img src={e.image_url}></img></div>
                     <div>{e.name}</div>
                     <div>Details:{e.description}</div>
                     <div>Qty: {e.quantity}</div>
                     <div>₹ {e.price}</div>
                    </div>
                )
            })}

            </div>
        </div>
    )
} 