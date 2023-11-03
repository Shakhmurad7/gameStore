import { useParams } from "react-router"
import PageContainer from "../companents/pageContainer"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../pages/Connect/connect.module.css"
const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock/';
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
    </PageContainer>
  )
}

export default Single