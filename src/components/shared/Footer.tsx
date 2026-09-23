import React from 'react';

const Footer = () => {
    return (
    <footer className="flex justify-between bg-gray-900 text-gray-400">
         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-5">
            <h1 className="text-xl font-bold">Footer</h1>
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} FitLog. All rights reserved.
            </p>
        </div>
        </footer>
    );
};

export default Footer;