import { createSelector } from 'reselect';
import { getCurrentRouteHelper as getCurrentRoute } from '@shopgate/engage/core';
import { SEARCH_BAR_WHITELIST } from '../constants';

/**
 * Creates a selector to determine if a route is whitelisted
 * @returns {bool}
 */
export const isWhitelistedRoute = createSelector(
  getCurrentRoute,
  route => !!SEARCH_BAR_WHITELIST.find(entry => route.pattern === entry)
);
