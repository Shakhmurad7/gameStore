
import { useState } from 'react'
import PageContainer from '../../companents/pageContainer'
import style from './Ranking.module.css'
function Ranking() {
    const [tab , settab] = useState('today')

    const tabs = (i:string)=>{
        settab(i)
    }
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
                <p>Volume</p>
            </div>
        </div>
    </PageContainer>
  )
}

export default Ranking