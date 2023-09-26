import {
  Card,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  RangePicker,
  Table,
} from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './style.less';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    period: '',
    country: '',
    feedback: '',
    rate: '',
  },
];

const columns = [
  {
    title: 'ASIN',
    dataIndex: 'asin',
  },
  {
    title: 'Code',
    dataIndex: 'asin',
  },
  {
    title: 'Latest lowest price',
    dataIndex: 'asin',
  },
  {
    title: 'Cheapest price',
    dataIndex: 'asin',
  },
  {
    title: 'Detection time',
    dataIndex: 'asin',
  },
];

const secondData = [
  {
    key: '1',
    preparation: '',
    secondFeedback: '',
    secondRate: '',
  },
];

const secondColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Category Name',
    dataIndex: 'c_name',
  },
  {
    title: 'Category ID',
    dataIndex: 'c_id',
  },
  {
    title: 'Category',
    dataIndex: 's_category',
  },
  {
    title: 'Number of items',
    dataIndex: 'number',
  },
  {
    title: 'Sales quantity',
    dataIndex: 'sales',
  },
  {
    title: 'Last execution time',
    dataIndex: 's_last',
  },
  {
    title: 'Last execution result',
    dataIndex: 's_result',
  },
];

const BasicForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedSecondRowKeys, setSecondSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <PageContainer>
      <Card
        title="Automatic update settings"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Form.Item label="Start time">
            <Input defaultValue="2023-09-14 12:00" readOnly={true} />
          </Form.Item>
          <Form.Item label="Repeat interval">
            <Select defaultValue="6">
              <Select.Option value="6">6 hours</Select.Option>
              <Select.Option value="7">7 hours</Select.Option>
              <Select.Option value="8">8 hours</Select.Option>
              <Select.Option value="9">9 hours</Select.Option>
              <Select.Option value="10">10 hours</Select.Option>
              <Select.Option value="11">11 hours</Select.Option>
              <Select.Option value="12">12 hours</Select.Option>
              <Select.Option value="13">13 hours</Select.Option>
              <Select.Option value="14">14 hours</Select.Option>
            </Select>

            <div style={{ padding: '10px' }}>
              *Update price, stock quantity, and display/hide settings.
            </div>

            <div style={{ padding: '10px' }}>
              *Only products whose prices have changed since the last update will be updated.
            </div>

            <div style={{ padding: '10px' }}>
              <b>however</b>
            </div>

            <Select value="24">
              <Select.Option value="24">24 hours</Select.Option>
              <Select.Option value="36">36 hours</Select.Option>
              <Select.Option value="48">48 hours</Select.Option>
            </Select>

            <div style={{ padding: '10px' }}>
              <b>If it exceeds the limit, update all specified items once.</b>
            </div>

            <div style={{ padding: '10px' }}>
              *When updating all specified items, the items set on the initial settings screen will
              be updated.
            </div>

            <div style={{ padding: '10px' }}>
              *Only products whose prices have changed since the last update will be updated. If you
              want to force update all products, please use the "Update Selection List" button.
            </div>

            <div style={{ padding: '10px' }}>
              *If the process is not completed within the time set as the repeat interval, the
              process at that point will be skipped and will resume at the skipped time + repeat
              interval.
            </div>
          </Form.Item>

          <Form.Item label="Last execution result" style={{ fontWeight: '700' }}>
            <div>2023-09-14 22:28, We have started updating all specified items.</div>
          </Form.Item>

          <Form.Item label="Next execution time" style={{ fontWeight: '700' }}>
            <div>2023-09-15 04:28</div>
          </Form.Item>

          <Form.Item style={{ marginLeft: '40vw' }}>
            <Button type="primary" style={{ marginRight: '3px' }}>
              Setting
            </Button>
            <Button type="primary" danger>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card
        title="List of products with sudden price changes detected"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Table dataSource={data} columns={columns} />
      </Card>
      <Card
        title="Product category list"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Table dataSource={data} columns={secondColumns} />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
