import { Card, Button, Table, Tag, Panel, Row, Col, Input, Form, Upload } from 'antd';
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
import { YahooOutlined, UploadOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';

const firstData = [
  {
    key: '1',
    name: 'service.jpg',
    size: '1.6MB',
    time: '2023-09-08 17:24:51',
    category: 'Not set',
  },
  {
    key: '2',
    name: 'top.jpg',
    size: '1.1MB',
    time: '2023-09-08 17:24:49',
    category: 'Not set',
  },
  {
    key: '3',
    name: 'Smiya.pdf',
    size: '355.1KB',
    time: '2023-09-08 17:24:46',
    category: 'Not set',
  },
];

const firstColumns = [
  {
    title: 'File name',
    dataIndex: 'name',
  },
  {
    title: 'File size',
    dataIndex: 'size',
  },
  {
    title: 'Upload time',
    dataIndex: 'time',
  },
  {
    title: 'Category name',
    dataIndex: 'category',
  },
];

const secondColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Category name',
    dataIndex: 'sec_name',
  },
  {
    title: 'Category ID',
    dataIndex: 'sec_id',
  },
  {
    title: 'Category',
    dataIndex: 'sec_category',
  },
  {
    title: 'Number of items',
    dataIndex: 'sec_number',
  },
  {
    title: 'Last execution time',
    dataIndex: 'sec_last',
  },
  {
    title: 'Last execution result',
    dataIndex: 'sec_result',
  },
  {
    title: 'Check',
    dataIndex: 'check',
  },
];

const BasicForm = () => {
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

  const onSecondSelectChange = (newSecondSelectedRowKeys) => {
    setSecondSelectedRowKeys(newSecondSelectedRowKeys);
  };
  const rowSecondSelection = {
    selectedSecondRowKeys,
    onChange: onSecondSelectChange,
  };
  const hasSecondSelected = selectedSecondRowKeys.length > 0;

  return (
    <PageContainer>
      <Card
        title="CSV file upload"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form.Item name="upload" valuePropName="fileList">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button
              type="primary"
              style={{ backgroundColor: 'rgb(82, 196, 26)', color: 'white' }}
              icon={<PlusOutlined />}
            >
              CSV file registration
            </Button>
          </Upload>
          <Form.Item label="Search:" style={{ marginLeft: '60vw', maxWidth: '20vw' }}>
            <Input />
          </Form.Item>
        </Form.Item>

        <Row gutter={16}>
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
          <Button type="primary" danger style={{ marginLeft: '25vw' }}>
            Delete
          </Button>
        </Row>

        <Table
          dataSource={firstData}
          columns={firstColumns}
          bordered
          style={{ marginTop: '3px' }}
        />
      </Card>
      <Card
        title="Product list"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form.Item label="Search:" style={{ marginLeft: '60vw', maxWidth: '20vw' }}>
          <Input />
        </Form.Item>

        <Row gutter={16}>
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
          <Button type="primary" style={{ marginRight: '3px' }}>
            Listing
          </Button>
          <Button
            type="primary"
            warning
            style={{ marginRight: '3px', backgroundColor: 'rgb(250, 173, 20)', border: 'none' }}
          >
            Reacquisition
          </Button>
          <Button type="primary" danger style={{ marginLeft: '25vw' }}>
            Delete
          </Button>
        </Row>

        <Table columns={secondColumns} />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
