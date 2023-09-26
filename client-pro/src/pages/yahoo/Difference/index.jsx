import { Card, Button, Table, Form, Input } from 'antd';
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

const data = [
  {
    key: '1',
    limit: '99999999',
    rate: '0.1',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Category Name',
    dataIndex: 'name',
  },
  {
    title: 'Category ID',
    dataIndex: 'c_id',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Number of items',
    dataIndex: 'number',
  },
];

const secondColumns = [
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Investor',
    dataIndex: 'sec_name',
  },
  {
    title: 'Yafusho',
    dataIndex: 'sec_result',
  },
];

const BasicForm = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
        title="Difference detection using Yahoo! Shopping API"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Button type="primary">Difference detection</Button>
      </Card>
      <Card
        title="Search results"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form.Item label="search:" style={{ marginLeft: '60vw' }}>
          <Input style={{ maxWidth: '10vw' }} />
        </Form.Item>

        <Button type="primary" style={{ marginRight: '3px' }}>
          Select all displayed
        </Button>
        <Button type="primary" style={{ marginRight: '3px' }}>
          Full release
        </Button>
        <Button type="primary" style={{ marginRight: '3px' }}>
          Relisting
        </Button>
        <Button type="primary" danger>
          Delete
        </Button>

        <div>
          <span
            style={{
              marginLeft: 8,
              marginTop: '10px',
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          columns={secondColumns}
          rowSelection={rowSelection}
          style={{ maxWidth: '60vw' }}
          pagination={false}
        />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
