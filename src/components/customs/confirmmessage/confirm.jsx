import { message, Popconfirm } from 'antd';
import React, { Children } from 'react';

const confirm = (e ) => {
   message.success('Click on Yes');
};

const cancel = (e ) => {
   message.error('Click on No');
};

const ConfirmMessage  = ({children}) => (
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
 {Children}
  </Popconfirm>
);

export default ConfirmMessage;