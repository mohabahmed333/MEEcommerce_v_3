import { Tooltip } from 'antd';
import React from 'react';

const ToolTip = ({text,children,color}) => (
  <Tooltip title={text} placement={'leftBottom'} color={color}>
    {children}
  </Tooltip>
);

export default ToolTip;