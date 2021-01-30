import React from 'react';

interface PageViewProps {
  href: string;
}

export const PageView = ({ href, ...other }: PageViewProps | any) => {
  return <webview src={href} {...other}></webview>;
};
