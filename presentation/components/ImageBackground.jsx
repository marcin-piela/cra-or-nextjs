import React from 'react'

export default ({ src, title, size, children, style }) => (
  <div
    style={{
      background: 'white',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      ...style
    }}>
    <h1 style={{color: 'var(--theme-ui-colors-background,#282A36)'}}>
      {title}
    </h1>
    <img src={src} style={{maxWidth: size, margin: '20px'}} alt="Background"/>
    {children}
  </div>
);