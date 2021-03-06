import React, { Component } from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, Checkbox,
    Row, Col,
  } from 'antd';

const { Option } = Select;

class CompanyDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            name:props.location.name?props.location.name:'-',
            select_order: props.location.status?props.location.select_order:'0',
            select_way: props.location.select_way?props.location.select_way:'0'
        }
        console.log(this.props.location.name)
    }
    componentDidMount(){
       
    }
    //提交
    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    //上传
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        return(
            <div>
                <h4>详情页</h4>
                <p>页面名称：{this.state.name}</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Plain Text"
                    >
                        <span className="ant-form-text">China</span>
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Select"
                        hasFeedback
                    >
                        {getFieldDecorator('select_order', {
                            initialValue:this.state.status,
                            rules: [
                                { required: true, message: '请选择订单状态' },
                            ],
                    })(
                        <Select placeholder="请选择订单状态">
                            <Option value="0">未付款</Option>
                            <Option value="1">已付款</Option>
                            <Option value="2">未发货</Option>
                        </Select>
                    )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Select[multiple]"
                    >
                        {getFieldDecorator('select_way', {
                        rules: [
                            { required: true, message: '请选择配送方式', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="请选择配送方式">
                            <Option value="0">中通快递</Option>
                            <Option value="1">圆通快递</Option>
                            <Option value="2">韵达快递</Option>
                        </Select>
                    )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="InputNumber"
                    >
                        {getFieldDecorator('input-number', { initialValue: 3 })(
                            <InputNumber min={1} max={10} />
                    )}
                        <span className="ant-form-text"> machines</span>
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Switch"
                    >
                        {getFieldDecorator('switch', { valuePropName: 'checked' })(
                            <Switch />
                        )}
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Slider"
                    >
                    {getFieldDecorator('slider')(
                        <Slider marks={{
                            0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
                            }}
                        />
                    )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Radio.Group"
                    >
                    {getFieldDecorator('radio-group')(
                        <Radio.Group>
                            <Radio value="a">item 1</Radio>
                            <Radio value="b">item 2</Radio>
                            <Radio value="c">item 3</Radio>
                        </Radio.Group>
                    )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                    label="Radio.Button"
                    >
                    {getFieldDecorator('radio-button')(
                        <Radio.Group>
                            <Radio.Button value="a">item 1</Radio.Button>
                            <Radio.Button value="b">item 2</Radio.Button>
                            <Radio.Button value="c">item 3</Radio.Button>
                        </Radio.Group>
                    )}
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Checkbox.Group"
                    >
                    {getFieldDecorator("checkbox-group", {
                        initialValue: ["A", "B"],
                    })(
                        <Checkbox.Group style={{ width: "100%" }}>
                        <Row>
                            <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                            <Col span={8}><Checkbox disabled value="B">B</Checkbox></Col>
                            <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                            <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                            <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                        </Row>
                        </Checkbox.Group>
                    )}
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Rate"
                    >
                    {getFieldDecorator('rate', {
                        initialValue: 3.5,
                    })(
                        <Rate />
                    )}
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Upload"
                    extra="longgggggggggggggggggggggggggggggggggg"
                    >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                    )}
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Dragger"
                    >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                        })(
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                        )}
                    </div>
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{ span: 12, offset: 6 }}
                    >
                    <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'validate_other' })(CompanyDetail);