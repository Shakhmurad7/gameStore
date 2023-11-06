import PageContainer from '../../companents/pageContainer';
import style from './marketplace.module.css'
import { LiaSearchSolid } from "react-icons/lia";

function Marketplace() {
  return (
    <>
    <PageContainer>
        <div className={style['container-marketplace']}>
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className={style['icon-marketplace']}>
                <input type="text" placeholder='Search your favourite NFTs' />
                <div className={style['LiaSearchSolid']}><LiaSearchSolid/></div>
            </div>
        </div>
    </PageContainer>
    </>
  )
}

export default Marketplace