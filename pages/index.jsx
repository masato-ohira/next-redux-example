import Layout from '~/layouts/default'
import { withRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { setRoute, setName } from '~/store/modules/route'

const routeSelector = state => state.route

// const getProps = (props) => {
//   console.log({
//     router: props.router
//   })
// }

const IndexPage = withRouter((props) => {
  // useDispatch で store に紐付いた dispatch が取得できます。
  const dispatch = useDispatch()

  // useSelector で store の state が取得できます。
  const route = useSelector(routeSelector)

  return (
    <Layout>
      <div className="box">
        <div className="title is-3">Home</div>
        <div onClick={dispatch.bind(this, setRoute(props.router.route))} className="button">
          GET Router
        </div>
        <div>{ route.name }</div>
      </div>
    </Layout>
  )
})

export default IndexPage
