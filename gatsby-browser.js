/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import PropTypes from 'prop-types';

import { Layout } from './src/containers';

import './src/styles/global.scss';

/**
 * An element which is used to wrap a pageview with given elements
 * @param element The React element to render
 * @returns The elements wrapped in the Layout container
 */
export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

/**
 * The property types which are used by the `wrapPageElement` wrapper
 */
wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
