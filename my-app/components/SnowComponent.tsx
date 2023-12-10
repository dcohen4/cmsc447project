// components/SnowComponent.tsx

"use client"
import React, { useEffect } from 'react';

const SnowComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../js/snow.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default SnowComponent;
