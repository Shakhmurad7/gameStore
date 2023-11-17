import axios from "axios"
import { useEffect, useState } from "react"
import style from "../pages/Home/index.module.css"
import { Link } from "react-router-dom"
const url = `https://book-db-shakhmurad.vercel.app/NFT-post-cart-img`
function CartImg() {
    type dataname = {
        id:number,
        img:string,
        icon:string,
        item:string
    }
    const [data , setdata] = useState<any>([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <>
    <div className={style['container-content-block']}>

<div className={style['cart-container-page-4-4']}>

    <div className={style['content-big-container']}>

        {
            data.slice(0,2).map(({id , img , icon , item}:dataname)=>(
                <Link to={'/Marketplace'} >
                <div key={id}  className={style['content-block']}>
                    <img className={style['section-image']} src={`./img/${img}.png`} />
                    <h2>{item}</h2>
                    <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
                </div>
                </Link>
            ))
            
        }
        </div>

        <div className={style['content-big-container']}>
{
    data.slice(2,4).map(({id , img , icon , item}:dataname)=>(
        <Link to={'/Marketplace'} >
        
        <div key={id}  className={style['content-block']}>
            <img className={style['section-image']} src={`./img/${img}.png`} />
            <h2>{item}</h2>
            <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
        </div>
        </Link>
    ))
    
}
</div>
</div>

<div className={style['cart-container-page-4-4']}>



        <div className={style['content-big-container']}>
{
    data.slice(4,6).map(({id , img , icon , item}:dataname)=>(
        <Link to={'/Marketplace'} >
        
        <div key={id}  className={style['content-block']}>
            <img className={style['section-image']} src={`./img/${img}.png`} />
            <h2>{item}</h2>
            <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
        </div>
        </Link>
    ))
    
}
</div>
        <div className={style['content-big-container']}>
{
    data.slice(6,8).map(({id , img , icon , item}:dataname)=>(
        <Link to={'/Marketplace'} >
        
        <div key={id}  className={style['content-block']}>
            <img className={style['section-image']} src={`./img/${img}.png`} />
            <h2>{item}</h2>
            <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
        </div>
        </Link>
    ))
    
}
</div>
</div>
</div>
    </>
  )
}

export default CartImg