import PageContainer from "../../companents/pageContainer"
import style from './sing.module.css'
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
function SingUP() {
  const [form , setform] = useState({name:'',password1:'',email:'' , password2:''})
  
  const submit = (e:any)=>{
  e.preventDefault()
    console.log(form);
    setform({
      name:'',
      password1:'',
      password2:'',
      email:''
    })
  }

  const handle =(e:any)=>{
    const {name , value} = e.target
    setform({...form , [name]:value})
  }
  return (
    <PageContainer>
        <div className={style['contaner-sing']}>
          <div className={style['sing-img']}>
              <img src={'./img/Image Placeholder (19).png'} />
          </div>
          <div className={style['sing-text']}>
              <h1>Create account</h1>
              <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
              <form onSubmit={submit}>
              <div className={style['sing-input']}>
                <div className={style['input-block-1']}>
                  <input type="text"   name="name" value={form.name} onChange={handle} placeholder="Username" />
                  <div className={style['BiUser']}><BiUser/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="email"  name="email" value={form.email} onChange={handle} placeholder="Email Address"  />
                  <div className={style['AiOutlineMail']}> <AiOutlineMail/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="password"  name="password1" value={form.password1} onChange={handle} placeholder="Password" />
                  <div className={style['RiLockPasswordLine']}> <RiLockPasswordLine/></div>
                </div>

                <div className={style['input-block-1']}>
                  <input type="password" name="password2" value={form.password2} onChange={handle} placeholder="Confirm Password" />
                  <div className={style['RiLockPasswordLine']}> <RiLockPasswordLine/></div>
                </div>
                <button type="submit" >Create account</button>
              </div>
              </form>
          </div>
        </div>
    </PageContainer>
  )
}

export default SingUP