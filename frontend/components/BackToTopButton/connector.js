import { connect } from 'react-redux';
import { isWhitelistedRoute } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
    isVisible: isWhitelistedRoute(state),
});

export default connect(mapStateToProps);
