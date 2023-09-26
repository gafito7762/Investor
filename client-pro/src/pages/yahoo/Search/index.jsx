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

const firstData = [
  {
    key: '1',
    limit: '1500',
    rate: '125',
    postage: 'Fixed: 1200 yen',
    commission: '8%',
  },
  {
    key: '2',
    limit: '3000',
    rate: '128',
    postage: 'Fixed: 1300 yen',
    commission: '8%',
  },
  {
    key: '3',
    limit: '5000',
    rate: '131',
    postage: 'Fixed: 1400 yen',
    commission: '8%',
  },
  {
    key: '4',
    limit: '8000',
    rate: '134',
    postage: 'Fixed: 1500 yen',
    commission: '8%',
  },
  {
    key: '5',
    limit: '15000',
    rate: '137',
    postage: 'Fixed: 2000 yen',
    commission: '8%',
  },
  {
    key: '6',
    limit: '30000',
    rate: '140',
    postage: 'Fixed: 2500 yen',
    commission: '8%',
  },
  {
    key: '7',
    limit: '50000',
    rate: '145',
    postage: 'Fixed: 2500 yen',
    commission: '8%',
  },
  {
    key: '8',
    limit: '9999999',
    rate: '145',
    postage: 'Fixed: 2500 yen',
    commission: '8%',
  },
];

const firstColumns = [
  {
    title: 'Upper limit price (yen)	',
    dataIndex: 'limit',
  },
  {
    title: 'Multiplication rate (%)	',
    dataIndex: 'rate',
  },
  {
    title: 'Postage',
    dataIndex: 'postage',
  },
  {
    title: 'Commission',
    dataIndex: 'commission',
  },
];

const secondData = [
  {
    key: '1',
    sides: '737',
    length: '210',
    width: '297',
    thickness: 'Twenty Three',
    weight: '1000',
    fee: '530',
  },
  {
    key: '2',
    sides: '600',
    length: '',
    width: '',
    thickness: '',
    weight: '2000',
    fee: '880',
  },
  {
    key: '3',
    sides: '800',
    length: '',
    width: '',
    thickness: '',
    weight: '5000',
    fee: '980',
  },
  {
    key: '4',
    sides: '1000',
    length: '',
    width: '',
    thickness: '',
    weight: '10000',
    fee: '1080',
  },
  {
    key: '5',
    sides: '1200',
    length: '',
    width: '',
    thickness: '',
    weight: '10000',
    fee: '1150',
  },
  {
    key: '6',
    sides: '1400',
    length: '',
    width: '',
    thickness: '',
    weight: '15000',
    fee: '1300',
  },
  {
    key: '7',
    sides: '1600',
    length: '',
    width: '',
    thickness: '',
    weight: '25000',
    fee: '1450',
  },
  {
    key: '8',
    sides: '1700',
    length: '',
    width: '',
    thickness: '',
    weight: '30000',
    fee: '3130',
  },
  {
    key: '9',
    sides: '1800',
    length: '',
    width: '',
    thickness: '',
    weight: '50000',
    fee: '3560',
  },
  {
    key: '10',
    sides: '1900',
    length: '',
    width: '',
    thickness: '',
    weight: '50000',
    fee: '4160',
  },
  {
    key: '11',
    sides: '2000',
    length: '',
    width: '',
    thickness: '',
    weight: '50000',
    fee: '5010',
  },
];

const secondColumns = [
  {
    title: '3 sides (mm)',
    dataIndex: 'sides',
  },
  {
    title: 'Length (mm)',
    dataIndex: 'length',
  },
  {
    title: 'Width (mm)',
    dataIndex: 'width',
  },
  {
    title: 'Thickness (mm)',
    dataIndex: 'thickness',
  },
  {
    title: 'Weight (g)',
    dataIndex: 'weight',
  },
  {
    title: 'Fee (yen)',
    dataIndex: 'fee',
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
          dataSource={firstData}
          columns={firstColumns}
          rowSelection={rowSelection}
          style={{ maxWidth: '60vw' }}
          pagination={false}
        />
      </Card>
      <Card
        title="Free Table"
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
            {hasSecondSelected ? `Selected ${selectedSecondRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          dataSource={secondData}
          columns={secondColumns}
          rowSelection={rowSecondSelection}
          style={{ maxWidth: '60vw' }}
          pagination={false}
        />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
