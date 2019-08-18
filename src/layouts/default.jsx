// import styles from '~/styles/index.scss'
import AppHeader from '~/layouts/header/app-header'

const Layout = ({children}) => (
  <div>
    {/* <style jsx>{styles}</style> */}
    <AppHeader/>
    <div className="container">
      {children}
    </div>
  </div>
)
export default Layout
