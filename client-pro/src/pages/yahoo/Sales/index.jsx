import { Card, Button, Table, Tag, Panel, Row, Col, Checkbox } from 'antd';
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
import { ReloadOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const firstData = [];

const columns = [
  {
    title: 'OrderID',
    dataIndex: 'order',
  },
  {
    title: 'ItemID',
    dataIndex: 'item',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'UnitPrice',
    dataIndex: 'unit',
  },
];

const secondData = [
  {
    number: '2',
    str_search: '^.*保証.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '5',
    str_search: '^.*出品者.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '6',
    str_search: '^.*店舗.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '9',
    str_search: '	^.*返品.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '10',
    str_search: '^.*交換.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '11',
    str_search: '^.*連絡.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '12',
    str_search: '^.*評価.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '13',
    str_search: 'もっと読む',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '14',
    str_search: '(?i)^.*アマゾン|amazon|ａｍａｚｏｎ|Ａｍａｚｏｎ.*$	',
    str_replacement: '',
    regular_expression: '正規表現',
  },
  {
    number: '15',
    str_search: '	^.*金額.*$',
    str_replacement: '',
    regular_expression: '正規表現',
  },
];

const secondColumns = [
  {
    title: '#',
    dataIndex: 'number',
  },
  {
    title: 'String to search for',
    dataIndex: 'str_search',
  },
  {
    title: 'String after replacement',
    dataIndex: 'str_replacement',
  },
  {
    title: 'Regular expression',
    dataIndex: 'regular_expression',
  },
  {
    title: 'Invalidation',
    dataIndex: 'sec_invalidation',
    render: () => [<Checkbox />],
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
        title="Sales data CSV upload"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ backgroundColor: '#52c41a', color: 'white' }}
        >
          Upload
        </Button>
      </Card>
      <Card
        title="Order list"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
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
        <Table columns={columns} rowSelection={rowSecondSelection} style={{ maxWidth: '60vw' }} />
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
