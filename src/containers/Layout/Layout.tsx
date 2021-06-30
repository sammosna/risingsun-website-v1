import * as React from 'react';

import { Navbar } from '~components';

/**
 * The property types which are used by the `Layout` container
 */
interface Props {
  children: React.ReactNode;
}

/**
 * A container that handles the global layout of the application
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
