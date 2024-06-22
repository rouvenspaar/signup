'use client'
import { useEffect, useState } from 'react';

export function DownloadLink() {
  const [os, setOS] = useState('');

  const path = "https://releases.astro-log.app/preview/latest/" + os ;

  function click() {
    console.log(path)
  }

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.match(/Win/i)) {
      setOS('AstroLog_preview.msi');
    } else if (userAgent.match(/Mac/i)) {
      setOS('AstroLog_preview.dmg');
    } else if (userAgent.match(/Android/i)) {
      setOS('AstroLog_preview.msi');
    } else if (userAgent.match(/Linux/i)) {
      setOS('AstroLog_preview.deb');
    } else if (userAgent.match(/iOS/i)) {
      setOS('AstroLog_preview.dmg');
    } else {
      setOS('AstroLog_preview.msi');
    }
  }, []);

  return <a href={path} className="text-[#c02d39] underline hover:text-[#a0232d]" onClick={click}>here</a>;
};
