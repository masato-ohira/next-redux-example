import Layout from '~/layouts/default'
import { withRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { setName, setPath } from '~/store/modules/route'

const routeSelector = state => state.route
const IndexPage = withRouter((props) => {

  // useDispatch で store に紐付いた dispatch が取得できます
  const dispatch   = useDispatch()
  // useSelector で store の state が取得できます
  const routeState = useSelector(routeSelector)

  return (
    <Layout>
      <div className="box">
        <div className="title is-3 has-text-centered">Home</div>
        <div className="buttons is-centered">
          <a
            className="button is-link"
            onClick={() => dispatch(setName())}>
            TEST Async
          </a>
          <a
            className="button is-primary"
            onClick={() => dispatch(setPath(props.router))}>
            GET Router
          </a>
        </div>
        <div className="field has-text-centered">
          <table className="table is-fullwidth">
            <colgroup>
              <col width="20%" />
              <col/>
            </colgroup>
            <thead>
              <tr>
                <th>async</th>
                <th>route</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ routeState.name }</td>
                <td>{ routeState.path }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
})

export default IndexPage
