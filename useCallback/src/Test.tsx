import React from 'react';

interface IProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const Test: React.FC<IProps> = React.memo(({ handleClick }) => {
  console.log('test渲染');
  return <button onClick={handleClick}>Test</button>;
});

export default Test;
