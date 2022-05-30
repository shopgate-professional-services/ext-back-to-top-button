import { css } from 'glamor';
import { themeName } from '@shopgate/pwa-common/helpers/config';

const isIOS = themeName.includes('ios');

const bottomRight = css(isIOS ? {
  position: 'fixed',
  bottom: 50,
  right: 0,
  zIndex: 1,
} : {
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 1,
}).toString();

const arrowButton = css({
  padding: '15px',
  fontSize: '32px',
  opacity: '0.5',
}).toString();

export default {
  bottomRight,
  arrowButton,
};
