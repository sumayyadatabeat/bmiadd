import { useState,useEffect } from "react"

export const useProductList=()=>{
    const [products,setProducts]=useState([])

    const getProducts=async()=>{
        const productList=await fetch('https://fakestoreapi.com/products');
        const productListJson=await productList.json();
        setProducts(productListJson)
    }
    useEffect(()=>{
        getProducts()
    },[])
    return {products};
}