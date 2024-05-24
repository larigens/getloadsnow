import React, { useEffect } from 'react';
import { HelmetCP } from '../components/Helmet.js';

export const Login = () => {
    useEffect(() => {
        // Open the login window when the component mounts
        const loginWindow = window.open(
            'https://www.directfreight.com/gsquared-home/user/login',
            'Login',
            'width=600,height=400'
        );

        // If the loginWindow is null, it means the popup was blocked
        if (!loginWindow) {
            alert("Popup blocked! Please allow popups and try again.");
            return;
        }

        // Set an interval to check if the window is closed
        const timer = setInterval(() => {
            if (loginWindow.closed) {
                clearInterval(timer);
                // Redirect the user or perform an action on your site
                window.location.href = 'https://getloadsnow.com/';
            }
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timer);
    }, []); // Empty dependency array to run only on mount and unmount

    return (
        <>
            <HelmetCP 
                pageTitle={'Login - Load Board for Trucking Companies'} 
                pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} 
                pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} 
            />
            {/* Your login UI or message can be placed here */}
        </>
    );
};
