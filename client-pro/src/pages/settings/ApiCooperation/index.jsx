import { Card, Button, Table, Tag, Panel, Row, Col, Input, Form } from 'antd';
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
import { YahooOutlined } from '@ant-design/icons';

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
        title="API Cooperation"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Row gutter={16}>
          <Col flex={6}>
            <h1>Yahoo! Shopping API cooperation</h1>
          </Col>

          <Col flex={16}>
            <Button
              type="primary"
              danger
              icon={<YahooOutlined style={{ fontSize: '30px' }} />}
              size="large"
            >
              Log In
            </Button>
            <h4 style={{ color: 'blue' }}>
              Last login date and time during collaboration: 2023-09-04 10:03
            </h4>

            <h4>
              If the link is successful, new listings and all specified item updates will be done
              using the FTP method,
              <br /> and everything else will be linked with the Yahoo Shop using the API method.
            </h4>

            <h4>
              If it is not linked, new listings and lowest price updates will be linked with the
              Yahoo shop <b>as usual via FTP.</b>
            </h4>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '10px' }}>
          <Col flex={6}>
            <h1>Selling partner API collaboration</h1>
          </Col>

          <Col flex={16}>
            <Button
              type="primary"
              size="large"
              style={{ marginBottom: '3vh', marginRight: '30vw' }}
            >
              Log in to Seller Central
            </Button>

            <h4>Or enter your Seller ID and Refresh Token in the form below</h4>

            <Form>
              <Form.Item label="Seller ID *">
                <Input defaultValue="A3KSGGTID3SGF2" />
              </Form.Item>

              <Form.Item label="Refresh token *">
                <Input.TextArea
                  rows={8}
                  defaultValue="Atzr|IwEBIGHhq_FhakkWCtitKbjmKXTfkHzOss4KQRkQ90QvCypWugSRSzLg-G09hfwENsl67cRLcm5Be9kxVQCode4Kz9WhtNhnFpUdnZHxWjZk3vBVBVg4CgvesLsfNitgIfGfSekgnlFNAkLJq1qRaFIfmypsixP7hF0H4vBVAqpaS7edsN3AYjy8gXSoCSYzybvYBp14Tjly1sOpsjwELSuwu4JLRa1-7ZzMQGI_MyMAP7_s7wq-jFJm49WP2MR-JzM5QhQs5p5kbvtrryxbRmRA1R06F1rOV_cOu68NECjTpltaDTi_53esfpitCWd9xjGoJEb9Eo5LzZUO43DCC2pLqBR8qmpyhZnLEg6YdPvOfNm_bQ"
                />
              </Form.Item>
            </Form>

            <Button type="primary" size="large" style={{ marginLeft: '30vw' }}>
              Keep
            </Button>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
