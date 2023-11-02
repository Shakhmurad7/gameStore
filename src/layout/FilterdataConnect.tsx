import axios from "axios"
import { useEffect, useState } from "react"
import style from '../pages/Home/index.module.css';
import styles from '../pages/Connect/connect.module.css'

const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock';
function FilterdataConnect() {
    const [data , setdata] = useState<any>([])
    const [flter , setflter] = useState<any>('all')
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])

        type dataname ={
            id:number,
            item:string,
            name:string
            price:string
            HighestBid:string
            img:string
        }

    const tab =(i:string)=>{
        setflter(i)
    }
    const filterdata = data.filter((item:any)=>{
        if(flter === 'all'){
            return data
        }
        else{
          return item.cotegory === flter
        }
    
    })
  return (
      <>
<div className={styles['filter-container']}>
        <div className={styles['filtir-page']}>
            <h2 className={ flter==='all'? styles['filtir-page-h2'] : styles['']}  onClick={()=>tab('all')}  >Created</h2>
            <h2 className={ flter==='owned'? styles['filtir-page-h2'] : styles['']} onClick={()=>tab('owned')} >owned</h2>
            <h2 className={ flter==='collection'? styles['filtir-page-h2'] : styles['']} onClick={()=>tab('collection')} >Collection</h2>
        </div>
</div>

    <div className={style['section-cartblock-col']}>
        <div className={ style['section-cart-block']}>

            {
                filterdata.slice(0,3).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                    <div key={id} className={styles['cart-block-page']}>
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
            filterdata.slice(3,6).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                <div key={id} className={styles['cart-block-page']}>
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
            filterdata.slice(6,9).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                <div key={id} className={styles['cart-block-page']}>
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
</div>
        </>
  )
}

export default FilterdataConnect