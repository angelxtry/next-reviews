'use client';

import { useState } from 'react';

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded border px-2 py-1 text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      {clicked ? 'Link copied!' : 'Share Link'}
    </button>
  );
};

export { ShareLinkButton };
