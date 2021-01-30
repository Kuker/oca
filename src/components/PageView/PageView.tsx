import React from 'react';

interface PageViewProps {
    href: string;
}

export const PageView = ({href}: PageViewProps) => {
    return <webview src={href}></webview>
}