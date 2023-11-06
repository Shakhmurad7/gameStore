import PageContainer from '../../companents/pageContainer';
import markplace from './marketplace.module.css'
import axios from "axios"
import styles from '../Connect/connect.module.css'
import style from '../Home/index.module.css'
import { useEffect, useState } from "react"
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock';
function Marketplace() {

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
            cotegory:string
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

const ownedCount = data.filter((item: dataname) => item.cotegory === 'owned').length;
  return (
    <>
    <PageContainer>

        <div className={markplace['container-marketplace']}>
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className={markplace['icon-marketplace']}>
                <input type="text" placeholder='Search your favourite NFTs' />
                <div className={markplace['LiaSearchSolid']}><LiaSearchSolid/></div>
            </div>
        </div>

    <div className={styles['filter-container']}>
        <div className={styles['filtir-page']}>
            <div className={ flter==='all'? styles['filtir-page-h2'] : styles['filtir-page-h2-none']}  onClick={()=>tab('all')} >
                <h2>NFTs</h2>
                <p>{data.slice(0,9).length}</p>
            </div>
            <div className={ flter==='owned'? styles['filtir-page-h2'] : styles['filtir-page-h2-none']}  onClick={()=>tab('owned')} >
                <h2>Collections</h2>
                <p>{ownedCount}</p>
            </div>
        </div>
</div>





        <div className={style['section-cartblock-col']}>
        <div className={ style['section-cart-block']}>

            {
                filterdata.slice(0,3).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                    <Link to={`/connect/${id}`}>
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
                </Link>
            ))
        }
        </div>

        <div className={ style['section-cart-block']}>
               {
            filterdata.slice(3,6).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                <Link to={`/connect/${id}`}>
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
            </Link>
            ))
            }
            </div>
            <div className={ style['section-cart-block']}>
               {
                   filterdata.slice(6,9).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                <Link to={`/connect/${id}`}>
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
            </Link>
            ))
            }
            
            </div>

            <div className={ style['section-cart-block']}>
               {
                   filterdata.slice(9,12).map(({id, item, price, HighestBid, img, name }:dataname)=>(
                <Link to={`/connect/${id}`}>
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
            </Link>
            ))
            }
            
            </div>
</div>

    </PageContainer>
    </>
  )
}

export default Marketplace