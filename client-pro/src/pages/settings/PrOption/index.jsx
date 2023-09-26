import { Card, Button, Table, Tag, Panel, Row, Col } from 'antd';
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
    title: 'Upper limit listing price (yen)',
    dataIndex: 'limit',
  },
  {
    title: 'Option setting rate (%)',
    dataIndex: 'rate',
  },
];

const text = (
  <p
    style={{
      paddingLeft: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

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
        title="Setting List"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Row gutter={16}>
          <Col flex={6}>
            <Button type="primary" style={{ marginRight: '3px' }}>
              New addition
            </Button>
            <Button type="primary" style={{ marginRight: '3px' }}>
              Edit
            </Button>
            <Button type="primary" danger>
              Delete
            </Button>
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
          pagination={false}
        />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
