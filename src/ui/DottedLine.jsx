import React from 'react';

const DottedLine = ({ horizontal, color, length, thickness, gap }) => {
  const style = {
    display: horizontal ? 'block' : 'inline-block',
    width: horizontal ? length : thickness,
    height: horizontal ? thickness : length,
    backgroundImage: horizontal
      ? `repeating-linear-gradient(to right, ${color}, ${color} ${thickness}, transparent ${thickness}, transparent calc(${thickness} + ${gap}))`
      : `repeating-linear-gradient(to bottom, ${color}, ${color} ${thickness}, transparent ${thickness}, transparent calc(${thickness} + ${gap}))`,
  };

  return <div style={style}></div>;
};

export default DottedLine;