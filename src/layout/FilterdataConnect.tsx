import axios from "axios"
import { useEffect, useState } from "react"
import style from '../pages/Home/index.module.css';

const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock';
function FilterdataConnect() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <div className={style['section-cartblock-col']}>
        <>
        <div className={ style['section-cart-block']}>

            {
                data.slice(0,3).map(({id, item, price, HighestBid, img, name })=>(
                <div key={id} className={style['cart-block-page']}>
                <img src={`/img/${img}.png`} alt={name} />
                <div className={style['cart-min-block']}>
                    <h2>{item}</h2>
                    <div className={style['cart-img-row']}>
                        <img src={`/img/${img}.png`} alt={name} />
                        <p>{name}</p>
                    </div>
                    <div className={style['block-space-between']}>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Price</p>
                            <p>{price}</p>
                        </div>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Highest Bid</p>
                            <p>{HighestBid}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
        </div>

        <div className={ style['section-cart-block']}>
               {
            data.slice(3,6).map(({id, item, price, HighestBid, img, name })=>(
                <div key={id} className={style['cart-block-page']}>
                <img src={`/img/${img}.png`} alt={name} />
                <div className={style['cart-min-block']}>
                    <h2>{item}</h2>
                    <div className={style['cart-img-row']}>
                        <img src={`/img/${img}.png`} alt={name} />
                        <p>{name}</p>
                    </div>
                    <div className={style['block-space-between']}>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Price</p>
                            <p>{price}</p>
                        </div>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Highest Bid</p>
                            <p>{HighestBid}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }
            </div>
            <div className={ style['section-cart-block']}>
               {
            data.slice(6,9).map(({id, item, price, HighestBid, img, name })=>(
                <div key={id} className={style['cart-block-page']}>
                <img src={`/img/${img}.png`} alt={name} />
                <div className={style['cart-min-block']}>
                    <h2>{item}</h2>
                    <div className={style['cart-img-row']}>
                        <img src={`/img/${img}.png`} alt={name} />
                        <p>{name}</p>
                    </div>
                    <div className={style['block-space-between']}>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Price</p>
                            <p>{price}</p>
                        </div>
                        <div className={style['block-item']}>
                            <p style={{ opacity: '0.5' }}>Highest Bid</p>
                            <p>{HighestBid}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }
            </div>
        </>
</div>
  )
}

export default FilterdataConnect