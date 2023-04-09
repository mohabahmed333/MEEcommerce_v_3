import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './DateContainer.scss'
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const DateContainer = () => (
  <Space direction="vertical" size={12}>
    {/* <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled /> */}
    <div  className='d-flex Date_container'>
    <p>flter By Date</p>
    <RangePicker
      defaultValue={[dayjs('2023-01-03', dateFormat), dayjs('2023-11-22', dateFormat)]}
      disabled={[false, true]}
    />
    </div>

  </Space>
);
export default DateContainer;