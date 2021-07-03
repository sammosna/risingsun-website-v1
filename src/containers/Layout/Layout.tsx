import React, { useState } from 'react';

import clsx from 'classnames';

import * as styles from './Layout.module.scss';

import { Navbar, Sidebar } from '~components';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /** Handles the opening of the sidebar */
  const handleSidebarOpen = () => setSidebarOpen(true);

  /** Handles the closing of the sidebar */
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <Navbar
        isSidebarOpen={sidebarOpen}
        sidebarOpenAction={handleSidebarOpen}
        sidebarCloseAction={handleSidebarClose}
      />
      <Sidebar open={sidebarOpen} closeAction={handleSidebarClose} />
      <main
        className={clsx(styles.content, {
          [styles.sidebarEffect]: sidebarOpen,
        })}
      >
        {children}
      </main>
    </>
  );
}
