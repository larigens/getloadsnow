import React, { useEffect } from 'react';

export const HashHandler = () => {
  useEffect(() => {
    if (window.location.hash.length > 1) {
      document.getElementById("df_iframe").src = "https://www.directfreight.com/gsquared-home/" + window.location.hash.replace("#", "");
    }
  }, []);

  return <div></div>;
}
