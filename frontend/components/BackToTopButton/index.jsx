import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import connect from './connector';
import { ViewContext } from '@shopgate/engage/components/View';
import Icon from '@shopgate/pwa-common/components/Icon';

// SVG Content
const content = (
  `<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 
    6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.201 22.5 1.5 17.799 1.5 12ZM15.22 12.53C15.512 12.823 
    15.988 12.823 16.28 12.53C16.573 12.238 16.573 11.762 16.28 11.47L12.53 7.72C12.238 7.426 11.762 7.426 
    11.47 7.72L7.72 11.47C7.426 11.762 7.426 12.238 7.72 12.53C8.012 12.823 8.488 12.823 8.78 12.53L11.25 
    10.06V15.75C11.25 16.164 11.586 16.5 12 16.5C12.414 16.5 12.75 16.164 12.75 15.75V10.06L15.22 12.53Z" />`
);

/**
 * The ArrowUp component
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const ArrowUp = props => <Icon content={content} {...props} />;

/**
 * The BackToTopButton component
 */
const BackToTopButton = ({ isVisible }) => {
  const { scrollTop } = useContext(ViewContext);
  const handleButtonClick = () => {
    scrollTop();
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.bottomRight}>
      <button className={styles.arrowButton} onClick={handleButtonClick}>
        <ArrowUp />
      </button>
    </div>
  );
}

BackToTopButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

BackToTopButton.defaultProps = {
  isVisible: false,
};

export default connect(BackToTopButton);
