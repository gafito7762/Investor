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
    title: 'File name',
    dataIndex: 'asin',
  },
  {
    title: 'File size',
    dataIndex: 'asin',
  },
  {
    title: 'Upload time',
    dataIndex: 'asin',
  },
];

const secondData = [];

const secondColumns = [
  {
    title: 'ASIN',
  },
  {
    title: 'Description of item',
  },
  {
    title: 'Product features',
  },
  {
    title: 'Update date and time',
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
        title="CSV file"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <h4>This is an Asin list of products currently on sale.</h4>
        <Button type="primary">Download all ASINs</Button>

        <h4 style={{ marginTop: '3vh' }}>
          The items to be updated are the product description and product features.
        </h4>
        <Button type="primary" danger icon={<PlusOutlined />}>
          Upload
        </Button>

        <Form.Item label="search:" style={{ marginLeft: '60vw' }}>
          <Input style={{ maxWidth: '10vw' }} />
        </Form.Item>

        <div>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Select all
          </Button>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Full release
          </Button>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Select all displayed
          </Button>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Load
          </Button>
          <Button type="primary" danger style={{ marginLeft: '40vw' }}>
            Delete
          </Button>
        </div>

        <Table dataSource={data} columns={columns} />
      </Card>
      <Card
        title="Product list"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form.Item label="ASIN search:" style={{ marginLeft: '60vw' }}>
          <Input style={{ maxWidth: '10vw' }} />
        </Form.Item>

        <div>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Select all
          </Button>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Full release
          </Button>
          <Button type="primary" style={{ marginRight: '3px' }}>
            Select all displayed
          </Button>
          <Button type="primary" danger style={{ marginLeft: '40vw' }}>
            Delete
          </Button>
        </div>

        <div>
          <Button type="primary" style={{ margin: '3px' }}>
            Reflected on the product being exhibited
          </Button>
        </div>

        <Table dataSource={secondData} columns={secondColumns} />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
