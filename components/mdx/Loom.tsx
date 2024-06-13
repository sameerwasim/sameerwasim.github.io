import React from 'react';

const Loom = ({ loomURL }) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: '50.416666666666664%',
      height: 0,
    }}
  >
    <iframe
      src={loomURL}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      title='Loom Video'
    ></iframe>
  </div>
);

export default Loom;
