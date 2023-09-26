import { Card, Button, Table, Tag, Panel, Row, Col, Pagination, Form, Input } from 'antd';
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
    number: '1',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '2',
    number: '2',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '3',
    number: '3',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '4',
    number: '4',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '5',
    number: '5',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '6',
    number: '6',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '7',
    number: '7',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '8',
    number: '8',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '9',
    number: '9',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
  {
    key: '10',
    number: '10',
    items: 'ASIN',
    keyword: 'B07X3J35CS',
    method: '完全一致',
  },
];

const columns = [
  {
    title: '#',
    dataIndex: 'number',
  },
  {
    title: 'Applicable Items',
    dataIndex: 'items',
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
  },
  {
    title: 'Retrieval Method',
    dataIndex: 'method',
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
    <>
      <PageContainer>
        <Card
          title="NG word(local)"
          headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
        >
          <Row gutter={16}>
            <Col flex={6}>
              <Button type="primary" style={{ marginRight: '3px' }} danger>
                Delete
              </Button>
              <Button
                type="success"
                style={{ marginRight: '3px', backgroundColor: '#52c41a', color: 'white' }}
                success
              >
                Edit
              </Button>
              <Button type="primary">Addition</Button>
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
    </>
  );
};

export default BasicForm;
