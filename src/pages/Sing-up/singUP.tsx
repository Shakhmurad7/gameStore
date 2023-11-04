import PageContainer from "../../companents/pageContainer"
import style from './sing.module.css'
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function SingUP() {
  return (
    <PageContainer>
        <div className={style['contaner-sing']}>
          <div className={style['sing-img']}>
              <img src={'./img/Image Placeholder (19).png'} />
          </div>
          <div className={style['sing-text']}>
              <h1>Create account</h1>
              <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
              <div className={style['sing-input']}>

                <div className={style['input-block-1']}>
                  <input type="text"  placeholder="Username" />
                  <div className={style['BiUser']}><BiUser/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="email" placeholder="Email Address"  />
                  <div className={style['AiOutlineMail']}> <AiOutlineMail/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="password"  placeholder="Password" />
                  <div className={style['RiLockPasswordLine']}> <RiLockPasswordLine/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="password"  placeholder="Confirm Password" />
                  <div className={style['RiLockPasswordLine']}> <RiLockPasswordLine/></div>
                </div>

                <button>Create account</button>
              </div>
          </div>
        </div>
    </PageContainer>
  )
}

export default SingUP