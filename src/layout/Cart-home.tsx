import axios from "axios"
import { useEffect, useState } from "react"
import style from '../pages/Home/index.module.css'
import { Link } from "react-router-dom"

const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cart'
function Carthome() {
    type dataname = { 
        id:number,
        title:string,
        img:string,
        itme:string,
        date:string
    }
    const [data , setdata] = useState<any>([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
           setdata(data)           
        })
    } , [])
  return (
<>
<div className={style['cart-cntent-container']}>

<div className={style['cart-contaner-4-4']}>
    <div className={style['cart-content']}>
    {
        data.slice(0,2).map(({id , itme , title , img , date }:dataname) => (  
            <div key={id} className="">
            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>

            ))
        }
    </div>

    <div className={style['cart-content']}>
    {
        data.slice(2,4).map(({id , itme , title , img , date }:dataname)=> (
            <div key={id} className="">

            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>
        
            
            ))
        }
    </div>
</div>

<div className={style['cart-contaner-4-4']}>

    <div className={style['cart-content']}>
    {
        data.slice(4,6).map(({id , itme , title , img , date }:dataname)=> (  
            <div key={id} className="">
            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>
            
            
            ))
        }
    </div>

    <div className={style['cart-content']}>
    {
        data.slice(6,8).map(({id , itme , title , img , date }:dataname)=> (  
            <div key={id} className="">
            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>
            
            
            ))
        }
    </div>
</div>

<div className={style['cart-contaner-4-4']}>
    
    <div className={style['cart-content']}>
    {
        data.slice(8,10).map(({id , itme , title , img , date }:dataname)=> (  
            <div key={id}  className="">

            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>
            
            
            ))
        }
    </div>
    
    <div className={style['cart-content']}>
    {
        data.slice(10,12).map(({id , itme , title , img , date }:dataname)=> (
            <div key={id} className="">
            <Link to={"/Ranking"}>
            <div key={id} className={style['cart']}>
                    <h2>{id}</h2>
                    <img src={`./img/${img}.svg`} />
                    <h3>{itme}</h3>
                <div className={style['cart-text-row']}>
                    <p className={style['cart-p']} >{title}</p>
                    <p>{date}</p>
                </div>
            </div>  
            </Link>
            </div>  
            
            
            ))
        }
    </div>
</div>
</div>
</>
  )
}

export default Carthome