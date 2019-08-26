import Link from 'next/link'
import { withRouter } from 'next/router'
import './app-header.scss'

// ------------------------------
const isActive = (path, propsRoute) => {
  if ( path == propsRoute ) {
    return 'is-active'
  }
}

// ------------------------------
export default withRouter((props) => (
  <>
    <header className="l-app-header">
      <div className="hero is-small is-link">
        <div className="hero-body">
          <div className="has-text-centered">
            <div className="title">app-name</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tabs is-link is-centered">
          <ul>
            <li className={isActive('/', props.router.route)}>
              <Link href="/"><a>HOME</a></Link>
            </li>
            <li className={isActive('/about', props.router.route)}>
              <Link href="/about"><a>ABOUT</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </>
))
