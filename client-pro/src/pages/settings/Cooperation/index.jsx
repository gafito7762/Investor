import { Card, Button, Table, Tag, Panel, Row, Col, Form, Input } from 'antd';
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

const data = [];

const columns = [
  {
    title: 'Account Name',
    dataIndex: 'acc_name',
  },
  {
    title: 'URL',
    dataIndex: 'url',
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
        title="Account List"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Row gutter={24}>
          <Col flex={6}>
            <Button type="primary" style={{ marginRight: '3px' }}>
              Select All
            </Button>
            <Button type="primary" style={{ marginRight: '3px' }}>
              Full release
            </Button>
            <Button type="primary">Select all displayed</Button>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: '3px' }}>
          <Col flex={6}>
            <Button type="primary" style={{ marginRight: '3px' }}>
              New addition
            </Button>
            <Button type="primary" danger>
              NG acquistion
            </Button>
            <div style={{ marginLeft: '40vw', maxWidth: '20vw' }}>
              <Form.Item label="Search:">
                <Input />
              </Form.Item>
            </div>
          </Col>
        </Row>
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
          dataSource={data}
          columns={columns}
          rowSelection={rowSelection}
          style={{ maxWidth: '60vw' }}
        />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
