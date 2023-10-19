
import Footer from "../layout/footer"
import Header from "../layout/header"

function PageContainer({children}:any) {
  return (
    <>
    <Header/>

    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default PageContainer