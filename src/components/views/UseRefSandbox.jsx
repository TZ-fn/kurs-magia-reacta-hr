import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './UseRefSandbox.module.scss';

const UseRefSandbox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, { x: '-500%', opacity: 0, duration: 2 });
  });

  return (
    <div>
      <h2 className='title'>UseRefSandbox</h2>
      <div className={styles.square} ref={boxRef} />
    </div>
  );
};

export default UseRefSandbox;
