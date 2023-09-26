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
    title: 'Shipping preparation period',
    dataIndex: 'period',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">In Stock</Select.Option>
          <Select.Option value="explanation">~7 days</Select.Option>
          <Select.Option value="sec_explanation">~2 days</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
  {
    title: 'Shipping country',
    dataIndex: 'country',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">Domestic shipping</Select.Option>
          <Select.Option value="explanation">Overseas shipping</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
  {
    title: 'Feedback',
    dataIndex: 'feedback',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">500~</Select.Option>
          <Select.Option value="explanation">50~</Select.Option>
          <Select.Option value="sec_explanation">5~</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
  {
    title: 'High evaluation rate',
    dataIndex: 'rate',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">90%~</Select.Option>
          <Select.Option value="explanation">80%~</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
];

const secondData = [
  {
    key: '1',
    preparation: '',
    secondFeedback: '',
    secondRate: '',
  },
];

const secondColumns = [
  {
    title: 'Shipping preparation period',
    key: 'preparation',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">In Stock</Select.Option>
          <Select.Option value="explanation">~7 days</Select.Option>
          <Select.Option value="sec_explanation">~2 days</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
  {
    title: 'Feedback',
    dataIndex: 'secondFeedback',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">500~</Select.Option>
          <Select.Option value="explanation">50~</Select.Option>
          <Select.Option value="sec_explanation">5~</Select.Option>
        </Select>
      </Form.Item>,
    ],
  },
  {
    title: 'High evaluation rate',
    dataIndex: 'secondRate',
    render: () => [
      <Form.Item>
        <Select>
          <Select.Option value="caption">Unspecified</Select.Option>
          <Select.Option value="sec_caption">90%~</Select.Option>
          <Select.Option value="explanation">80%~</Select.Option>
        </Select>
      </Form.Item>,
    ],
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
        title="Input"
        headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff', color: '#1890ff' }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Form.Item label="Quantity in stock *">
            <Input defaultValue="1" />
          </Form.Item>
          <Form.Item label="Abstract">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Additional1">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Additional2">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Additional3">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Sp-additional">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          {/*-------------------------------------------------*/}
          <div>
            <h1>Template with product description</h1>
          </div>
          <Form.Item>
            <Radio.Group value={1}>
              <Radio value={1}>Default</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Caption">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Explanation(HTML not allowed)">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>

          {/*-------------------------------------------------*/}
          <div>
            <h1>Template without product description</h1>
          </div>
          <Form.Item>
            <Radio.Group>
              <Radio value={1}>Default</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Caption">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Explanation(HTML not allowed)">
            <Select>
              <Select.Option value="caption">Caption(with explanation)</Select.Option>
              <Select.Option value="sec_caption">Caption(no explanation)</Select.Option>
              <Select.Option value="explanation">Explanation(with explanation)</Select.Option>
              <Select.Option value="sec_explanation">Explanation(no explanation)</Select.Option>
            </Select>
          </Form.Item>

          <div>
            <h1>Conditions for obtaining the lowest price</h1>
            <h3>
              ① In-house shipping seller
              <Checkbox /> use
            </h3>
          </div>

          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            style={{ maxWidth: '70vw' }}
          />

          <div>
            <h3>②FBA shipping seller</h3>
          </div>

          <Table
            dataSource={secondData}
            columns={secondColumns}
            pagination={false}
            style={{ maxWidth: '70vw' }}
          />

          {/*------------Yahoo! Shopping FTP-----------*/}
          <div>
            <h1>Yahoo! Shopping FTP</h1>
          </div>

          <Form.Item label="FTP account">
            <Input defaultValue="store-your-thousand" />
          </Form.Item>

          <Form.Item label="FTP password">
            <Input defaultValue="Yourthousand2023" />
          </Form.Item>

          {/*--------------CSV Items for new listings----------*/}
          <Form.Item label="Delivery">
            <Input defaultValue="1" />
          </Form.Item>

          <Form.Item label="Lead-time-instock">
            <Input defaultValue="1" />
          </Form.Item>

          <Form.Item label="Lead-time-outstock">
            <Input defaultValue="3000" />
          </Form.Item>

          {/*-----------Lowest price conditions when listing and updating prices-------------*/}
          <div>
            <h1>Lowest price conditions when listing and updating prices</h1>
          </div>

          <Form.Item label="When newly listed">
            <Input defaultValue="300" addonAfter="円" />
            <span>
              *When listing a new item, if the lowest price is lower than the set price, the item
              will not be listed.
            </span>
          </Form.Item>

          <Form.Item label="When updating the lowest price">
            <Input defaultValue="300" addonAfter="円" />
            <span>
              *When acquiring and updating price/inventory information, if the lowest price is lower
              than the set value, the inventory will be set to 0 and updated.
            </span>
          </Form.Item>

          <Form.Item label="Maximum listing price *">
            <Input defaultValue="200000" addonAfter="円" />
            <span>
              *If the listing price is higher than the set value, the item will not be listed. If it
              is already listed, it will be deleted.
            </span>
          </Form.Item>

          <Form.Item label="When the lowest price suddenly drops *">
            <Input addonAfter="%" />
            <span>
              *If it is less than the set percentage from the latest lowest price, it will not be
              used.
            </span>
          </Form.Item>

          {/*--------Packing size conditions when listing/updating prices----------*/}

          <div>
            <h1>Packing size conditions when listing/updating prices</h1>
          </div>

          <Form.Item label="When newly listed *">
            <Input defaultValue="160" addonAfter="cm" />
            <span>
              *When listing a new item, if the packaging size (total of three sides) is larger than
              the set value, the item will not be listed.
            </span>
          </Form.Item>

          <Form.Item label="When updating the lowest price *">
            <Input defaultValue="160" addonAfter="cm" />
            <span>
              *When acquiring and updating price/inventory information, if the packaging size (total
              of three sides) is larger than the set value, it will be updated as private.
            </span>
          </Form.Item>

          {/*-------------Maximum handling weight when listing/updating prices-------------*/}

          <div>
            <h1>Maximum handling weight when listing/updating prices</h1>
          </div>

          <Form.Item label="When newly listed *">
            <Input defaultValue="50" addonAfter="kg" />
            <span>
              *When listing a new product, if the shipping weight of the product is greater than the
              set value, it will not be listed.
            </span>
          </Form.Item>

          <Form.Item label="When updating the lowest price *">
            <Input defaultValue="50" addonAfter="kg" />
            <span>
              *When acquiring and updating price/inventory information, if the shipping weight of
              the product is greater than the set value, it will be updated as private.
            </span>
          </Form.Item>

          {/*----------Evaluation score conditions for new listings------------*/}

          <div>
            <h1>Evaluation score conditions for new listings</h1>
          </div>

          <Form.Item label="Exclusion range">
            <Select defaultValue="default">
              <Select.Option value="default">1 or more and less and 2</Select.Option>
              <Select.Option>1 or more and less and 3</Select.Option>
              <Select.Option>1 or more and less and 4</Select.Option>
            </Select>

            <span>
              *If the evaluation score is within the set value range, it will not be listed.
            </span>
          </Form.Item>

          {/*------------Small size product certification standards------------*/}

          <div>
            <h1>Small size product certification standards</h1>
          </div>

          <Form.Item label="Length">
            <Input defaultValue="34" addonAfter="cm 以内" />
          </Form.Item>

          <Form.Item label="Width">
            <Input defaultValue="25" addonAfter="cm 以内" />
          </Form.Item>

          <Form.Item label="Thickness">
            <Input defaultValue="3" addonAfter="cm 以内" />
          </Form.Item>

          <Form.Item label="Packing weight">
            <Input defaultValue="1" addonAfter="kg 以内" />
          </Form.Item>

          {/*------------CSV file items when updating-------------*/}

          <div>
            <h1>CSV file items when updating</h1>
          </div>

          <Form.Item label="CSV Item"></Form.Item>

          {/*----------Setting the number of deletions when deleting listed items---------*/}

          <div>
            <h1>Setting the number of deletions when deleting listed items</h1>
          </div>

          <Form.Item label="Number of deletions *">
            <Input defaultValue="2" />
          </Form.Item>

          {/*----------Notes image-----------*/}

          <div>
            <h1>Notes image</h1>
          </div>

          <Form.Item label="Automatically added when new listing">
            <Checkbox style={{ marginLeft: '3px' }} />
          </Form.Item>

          <Form.Item label="Image data" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  No image
                </div>
              </div>
            </Upload>

            <span>
              Images that can be uploaded to the store are only in GIF, JPEG, and PNG formats, with
              the extension .gif/.jpg/.jpe/.jpeg/.png. Please keep the size under 200KB.
            </span>
          </Form.Item>

          {/*--------Default value to use only the top image for new listings----------*/}

          <div>
            <h1>Default value to use only the top image for new listings</h1>
          </div>

          <Form.Item label="Use only the top image">
            <Checkbox checked={true} />
          </Form.Item>

          {/*------Notification when lowest price update error occurs---------*/}
          <div>
            <h1>Notification when lowest price update error occurs</h1>
          </div>

          <Form.Item label="Receive by email">
            <Checkbox checked={true} />
          </Form.Item>

          <Form.Item label="Email address">
            <Input defaultValue="post@your-thousand.jp" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" danger>
              Keep
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
