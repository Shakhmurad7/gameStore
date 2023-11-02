import PageContainer from '../../companents/pageContainer'
import style from './connect.module.css'
import {BiCopy} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import FilterdataConnect from '../../layout/FilterdataConnect';

function Connect() {
  return (
    <PageContainer>
        <div className={style['container']}>
        </div>
        <div className={style['connect-contaner']}>
            <div className={style['connect-page-right']}>
                <img className={style['connect-img']} src={'./img/Avatar Placeholder.png'} />
                <h1>Shakhmurad</h1>
                <div className={style['connect-block-row']}>

                    <div className={style['connect-block']}>
                        <h2>250k+</h2>
                        <p>Volume</p>
                    </div>

                    <div className={style['connect-block']}>
                        <h2>50+</h2>
                        <p>NFTs Sold</p>
                    </div>

                    <div className={style['connect-block']}>
                        <h2>3000+</h2>
                        <p>Followers</p>
                    </div>

                </div>
                <div className={style['connect-page-center']}>
                    <h2>Bio</h2>
                    <p>The internet's friendliest designer kid.</p>
                </div>
                <div className={style['connect-icon-text']}>
                    <h2>Links</h2>
                    <div className={style['connect-icon']}>
                        <img src={'./img-icon/DiscordLogo.svg'}/>
                        <img src={'./img-icon/InstagramLogo.svg'} />
                        <img src={'./img-icon/TwitterLogo.svg'} />
                        <img src={'./img-icon/YoutubeLogo.svg'} />
                    </div>
                </div>
            </div>
            <div className={style['connect-page-left']}>
                    <div className={style['connect-block-1-left']}>
                        <BiCopy/>
                        <p>0xc0E3...B79C</p>
                    </div>
                    <div className={style['a']}>
                        <AiOutlinePlus/>
                        <p>Follow</p>
                    </div>
                </div>
        </div>

            <FilterdataConnect/>
    </PageContainer>
  )
}

export default Connect