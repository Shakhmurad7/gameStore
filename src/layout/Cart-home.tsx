import axios from "axios"
import { useEffect, useState } from "react"
import style from '../pages/Home/index.module.css'

const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cart'
function Carthome() {
    const [data , setdata] = useState<any>([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
           setdata(data)
           console.log(data);
           
           
        })
    } , [])
  return (
<>
<div className={style['cart-cntent-container']}>

<div className={style['cart-content']}>
    {
        data.slice(0,4).map(({id , itme , title , img , date }:any)=> (  
            <>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </>
            
            ))
        }
    </div>

    <div className={style['cart-content']}>
    {
        data.slice(4,8).map(({id , itme , title , img , date }:any)=> (  
            <>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </>
            
            ))
        }
    </div>

    <div className={style['cart-content']}>
    {
        data.slice(8,12).map(({id , itme , title , img , date }:any)=> (  
            <>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </>
            
            ))
        }
    </div>
</div>
</>
  )
}

export default Carthome