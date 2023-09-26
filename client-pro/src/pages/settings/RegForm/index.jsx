import { Card, Button, Table, Tag, Panel, Row, Col, Form, Input, Checkbox, TextArea } from 'antd';
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
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const firstData = [
  {
    id: '1',
    name: 'caption (with explanation)',
  },
  {
    id: '2',
    name: 'caption (no explanation)	',
  },
  {
    id: '3',
    name: 'explantion(with explanation)',
  },
  {
    id: '4',
    name: 'explantion (no explanation)',
  },
];

const firstColumns = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => (
      <>
        <Button type="primary" danger icon={<DeleteOutlined />}>
          Delete
        </Button>
        <Button type="primary" icon={<EditOutlined />}>
          Edit
        </Button>
      </>
    ),
  },
];

const BasicForm = () => {
  const title = 'Product title';
  const originalTitle = 'Product title (no editing)';
  const productDetails = 'Description of csv file (contains HTML)';
  const productCharacteristics = 'Feathers1~ of csv file 9';
  const brand = 'Product brand';
  const xasin = 'ASIN with the initial letter changed to X';
  const productSizeHeight = 'Product size height';
  const productSizeWidth = 'Product size width';
  const productSizeDepth = 'Product Size Depth';
  const productSizeWeight = 'Product Size Weight';
  const productCategory = 'Product Product Category';

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
        title="Input"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Row>
          <Col span={12}>
            <Table dataSource={firstData} columns={firstColumns} pagination={false} />
          </Col>
          <Col span={12} style={{ paddingRight: '18px' }}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'introduction']} label="Registration format">
                <Input.TextArea row={8} />
              </Form.Item>

              <div style={{ paddingLeft: '13vw' }}>
                <h2>Regarding registration formats, currently supported items are as follows:</h2>
                <ul>
                  <li>
                    ${'{'}Title{'}'}: {title}
                  </li>
                  <li>
                    ${'{'}Original product title{'}'}: {originalTitle}
                  </li>
                  <li>
                    ${'{'}Product details{'}'}: {productDetails}
                  </li>
                  <li>
                    ${'{'}Product characteristics{'}'}: {productCharacteristics}
                  </li>
                  <li>
                    ${'{'}Brand{'}'}: {brand}
                  </li>
                  <li>
                    ${'{'}XASIN{'}'}: {xasin}
                  </li>
                  <li>
                    ${'{'}Product size.Height{'}'}: {productSizeHeight}
                  </li>
                  <li>
                    ${'{'}Product size.Width{'}'}: {productSizeWidth}
                  </li>
                  <li>
                    ${'{'}Product Size.Depth{'}'}: {productSizeDepth}
                  </li>
                  <li>
                    ${'{'}Product Size.Weight{'}'}: {productSizeWeight}
                  </li>
                  <li>
                    ${'{'}Product Category{'}'}: {productCategory}
                  </li>
                </ul>
              </div>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" danger>
                  Addition
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
