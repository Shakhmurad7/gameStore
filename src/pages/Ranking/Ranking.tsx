
import PageContainer from '../../companents/pageContainer'
import style from './Ranking.module.css'
function Ranking() {
  return (
    <PageContainer>
        <div className={style['ranking-top-text']}>
            <h1>Top Creators</h1>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
    </PageContainer>
  )
}

export default Ranking