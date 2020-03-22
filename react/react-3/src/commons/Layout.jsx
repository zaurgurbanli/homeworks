import React from 'react';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}