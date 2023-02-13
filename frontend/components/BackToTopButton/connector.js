import { connect } from 'react-redux';
import { isWhitelistedRoute } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {bool} Route is on whitelist
 */
const mapStateToProps = state => ({
  isVisible: isWhitelistedRoute(state),
});

export default connect(mapStateToProps);
