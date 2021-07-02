import * as React from 'react';

import { parseElementId } from '~util';

/**
 * The property types which are used by the `Section` component
 */
interface Props {
  id: string;
  children: React.ReactNode;
}

/**
 * A component that handles the creation of sections
 *
 * @param props.id The id of the section to create
 * @param props.children The child elements to display
 *
 * @returns The `Section` component
 */
export function Section({ id, children }: Props) {
  return <section id={parseElementId(id)}>{children}</section>;
}
