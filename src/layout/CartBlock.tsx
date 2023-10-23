
const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock'
import axios from "axios"
import style from '../pages/Home/index.module.css'
import { useEffect, useState } from "react"
function CartBlock() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <div className={style['section-cartblock']}>
        {
            data.map(({id , item , title , price , HighestBid , img , name})=>(
                <div className={style['cart-block-page']}>
                    <img src={`./img/${img}.png`} />
                    <div className={style['cart-min-block']}>
                        <h2>{item}</h2>
                        <div className={style['cart-img-row']}>
                            <img src={`./img/${img}.png`} />
                            <p>{name}</p>
                        </div>
                        <div className={style['block-space-between']}>
                            <div className={style['block-item']}>
                                <p style={{opacity:'0.5'}} >Price</p>
                                <p>{price}</p>
                            </div>
                            <div className={style['block-item']}>
                                <p style={{opacity:'0.5'}} >Highest Bid</p>
                                <p>{HighestBid}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartBlock