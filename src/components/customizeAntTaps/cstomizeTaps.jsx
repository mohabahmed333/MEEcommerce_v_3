import { Tabs } from 'antd';

const CustomizeTaps = ({items}) => {
    const onChange = (key) => {
        console.log(key);
      };
    const items = [...items];

return(

<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
)
};
export default App;