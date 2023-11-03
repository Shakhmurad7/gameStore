import { useParams } from "react-router"
import PageContainer from "../companents/pageContainer"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../pages/Connect/connect.module.css"
const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock/';
import {TbWorld} from "react-icons/tb";
import {IoMdEye} from "react-icons/io";
import CartBlock from "./CartBlock"
import style from '../pages/Home/index.module.css'
import { Link } from "react-router-dom"

function Single() {
    const {id} = useParams()
    const [data , setdata] = useState<any>([])
    useEffect(()=>{
        axios(url + id).then(({data})=>{
            setdata(data)
        })
    },[])
  return (
    <PageContainer>
        <div className={styles['single-img']}>
            <img src={`../img/${data.img}.png`} />
        </div>
        <div className={styles['single-container-text']}>
             <div className={styles['single-item']}>
                <h1>{data.item}</h1>
                <p>Minted on Sep 30, 2022</p>
             </div>
             <div className={styles['single-title']}>
                <h3>Description</h3>
                <p>
                     The Orbitians
                    is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe. The most advanced  <br /><br />  and friendly of the bunch are Orbitians.They live in a metal space machines, high up in the sky and only have one foot on  These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generationinvaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not <br /><br /> know any other way to be. Upside-Downs believe that   will be able to win thie war if they could only get an eye into Orbitian territory, so they ve taken to make human beings theirtarget.
                </p>
             </div>
             <div className={styles['single-Details']}>
                    <h3>Details</h3>
                    <div className={styles['single-icon']}>
                            <TbWorld/>

                            <p>View on Etherscan</p>
                    </div>
                    <div className={styles['single-icon']}>
                            <TbWorld/>
                            <p>View Original</p>
                    </div>
             </div>

        </div>
<div className={style['cart-container']}>
  <div className={style['section-cart-top-text']}>
    <div className={style['section-text-left']}>
      <h2>Discover More NFTs</h2>
      <p>Explore new trending NFTs</p>
    </div>
        <Link to={'/connect'}>
            <div className={style['section-text-right']}>
                <IoMdEye/>
                <p>See All</p>
            </div>
        </Link>
  </div>
    <CartBlock/>
</div>
    </PageContainer>
  )
}

export default Single