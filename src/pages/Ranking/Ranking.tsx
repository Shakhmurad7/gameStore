
import { useEffect, useState } from 'react'
import PageContainer from '../../companents/pageContainer'
import style from './Ranking.module.css'
import axios from 'axios'
function Ranking() {
    const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock'
    const [tab , settab] = useState('today')
    const [data , setdata] = useState([])

    type dataname ={
        id:number,
        item:string,
        name:string
        price:string
        HighestBid:string   
        img:string
        cotegory:string
      }

    const tabs = (i:string)=>{
        settab(i)
    }
    useEffect(()=>{ 
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <PageContainer>
        <div className={style['ranking-top-text']}>
            <h1>Top Creators</h1>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>

        <div className={style['ranking-container']}>
            <h2 className={tab==='today'? style['active-tab'] : style['none-active']} onClick={()=>tabs('today')} >Today</h2>
            <h2 className={tab==='This Week'? style['active-tab'] :style['none-active']}   onClick={()=>tabs('This Week')}>This Week</h2>
            <h2 className={tab==='This Month'? style['active-tab'] : style['none-active']}   onClick={()=>tabs('This Month')}>This Month</h2>
            <h2 className={tab==='All Time'? style['active-tab'] : style['none-active']}  onClick={()=>tabs('All Time')} >All Time</h2>
        </div>

        <div className={style['ranking-data-top-text']}>
            <div className={style['ranking-left-data-text']}>
                <p>#</p>
                <p>Artist</p>
            </div>
            <div className={style['ranking-right-data-text']}>
                <p>Change</p>
                <p>NFTs Sold</p>
                <p className={style['p-element']} >Volume</p>
            </div>
        </div>

        <div className={style['ranking-data-container']}></div>
            {
                data.map(({id, item, price, HighestBid, img, name }:dataname)=>(
                    <div key={id} className={style['renking-data-block']}>
                        <div className={style['data-left']}>
                             <h3>{id}</h3>
                                <div className={style['data-img-text']}>
                                    <img src={`./img/${img}.png`} />
                                    <h2>{item}</h2>
                                </div>
                        </div>
                        <div className={style['data-right']}>
                            <p className={style['color-p']} >+{price} %</p>
                            <p>{name}</p>
                            <p>{HighestBid}</p>
                        </div>

                    </div>
                )
                
                
                )
            }
        
    </PageContainer>
  )
}

export default Ranking