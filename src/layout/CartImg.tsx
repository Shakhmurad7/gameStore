import axios from "axios"
import { useEffect, useState } from "react"
import style from "../pages/Home/index.module.css"
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

    <div className={style['content-big-container']}>

        {
            data.slice(0,4).map(({id , img , icon , item}:dataname)=>(
                <div key={id}  className={style['content-block']}>
                    <img className={style['section-image']} src={`./img/${img}.png`} />
                    <h2>{item}</h2>
                    <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
                </div>
            ))
            
        }
        </div>

        <div className={style['content-big-container']}>
{
    data.slice(4,8).map(({id , img , icon , item}:dataname)=>(
        <div key={id}  className={style['content-block']}>
            <img className={style['section-image']} src={`./img/${img}.png`} />
            <h2>{item}</h2>
            <img className={style['icon-img']} src={`./img/${icon}.svg`}  />
        </div>
    ))
    
}
</div>
</div>
    </>
  )
}

export default CartImg