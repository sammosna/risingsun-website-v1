import * as React from 'react';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h1>{title}</h1>;
}
