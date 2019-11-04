import React from 'react'

export default () => (
  <div
    style={{
      textAlign: 'center',
      width: '70%',
      marginLeft: '15%',
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '1.15rem',
      color: 'var(--theme-ui-colors-background,#282A36)'
    }}>
    <span>TTFB: Time to First Byte </span>
    <span>FP: First Paint</span>
    <span>FCP: First Contentful Paint</span>
    <span>TTI: Time To Interactive</span>
  </div>
);
