// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkVersion, initSettings } from '../../modules/metadata'
import App from './App'

const actionCreators = {
  checkVersion,
  initSettings
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(null, mapDispatchToProps)(App)
