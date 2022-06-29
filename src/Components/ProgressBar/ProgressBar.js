import React from 'react';

import sty from './ProgressBar.module.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className={sty.bar}>
      <div className={sty.barHolder}>
        <div
          className={sty.barLen}
          style={{
            width: percentage,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
