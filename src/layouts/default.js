import styles from '../styles/index.scss'
import AppHeader from './header/app-header'

const Layout = ({children}) => (
  <div style={styles}>
    {/* <style jsx>{styles}</style> */}
    <AppHeader/>
    <div className="container">
      {children}
    </div>
  </div>
)
export default Layout
