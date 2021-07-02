import React from 'react';

import { Navbar } from '~components';

/**
 * The property types which are used by the `Layout` container
 */
interface Props {
  children: React.ReactNode;
}

/**
 * A container that handles the global layout of the website
 *
 * @param props.children The child elements to display
 *
 * @returns The `Layout` container
 */
export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
