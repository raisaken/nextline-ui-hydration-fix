import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
// import { debounce } from "lodash";
// import classNames from 'classnames';
import { theme } from '~/styles/theme';
// import styles from "./readmore.module.css";

const ReadMore = ({ lines }: { lines: string }) => {
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const containerRef = useRef(null);

  //   useEffect(() => {
  //     const hasClamping = (el: Element) => {
  //       const { clientHeight, scrollHeight } = el;
  //       return clientHeight !== scrollHeight;
  //     };
  //     const checkButtonAvailability = () => {
  //       if (containerRef.current) {
  //         // Save current state to reapply later if necessary.
  //         const hadClampClass = containerRef.current.classList.contains(
  //           styles.clamp
  //         );
  //         // Make sure that CSS clamping is applied if aplicable.
  //         if (!hadClampClass) containerRef.current.classList.add(styles.clamp);
  //         // Check for clamping and show or hide button accordingly.
  //         setShowButton(hasClamping(containerRef.current));
  //         // Sync clamping with local state.
  //         if (!hadClampClass) containerRef.current.classList.remove(styles.clamp);
  //       }
  //     };

  //     const debouncedCheck = debounce(checkButtonAvailability, 50);

  //     checkButtonAvailability();

  //     //Might need to check browser compatibility across all browsers
  //     let resizeObserver = new ResizeObserver(() => {
  //       debouncedCheck();
  //     });

  //     resizeObserver.observe(containerRef.current as unknown as Element);
  //   }, [containerRef]);

  const handleClick = () => setClamped(!clamped);
  const lineArray = Object.values(lines[0]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className={classNames('long-text', clamped && 'clamp')}
        ref={containerRef}
      >
        {lineArray.map((line,index) => {
          // line[0].isSelected === true && console.log(line[0], typeof line);
          return (
            line[0].isSelected === true && (
              <Typography
              key={index}
                sx={{
                  fontWeight: '400',
                  fontSize: '13px',
                  lineHeight: '20px',
                }}
              >
                {line[0].lineData}
              </Typography>
            )
          );
        })}
      </div>
      {showButton && (
        <Typography
          variant="caption"
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            color: theme.palette.primary.main,
            alignSelf: 'flex-end',
          }}
        >
          See {clamped ? 'more' : 'less'}
        </Typography>
      )}
    </div>
  );
};

export default ReadMore;
