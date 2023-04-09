import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectComponent= () => (
  <Space wrap>
    {/* <Select
      defaultValue="master card"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'master card', label: 'master card' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    /> */}
 
   
    <Select
      defaultValue="master card"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'master card', label: 'master card' }]}
    />
  </Space>
);

export default SelectComponent;