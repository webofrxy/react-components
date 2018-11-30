import React, { Component } from 'react';
import { Table, Row, Col, Card, Input, Divider, Tag, Modal } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import SearchContent from '../common/SearchContent';
import { Button } from 'antd/lib/radio';

const confirm = Modal.confirm;

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <span>{text}</span>,
}, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
},{
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    render: (tag,record) => (<Tag>{record.tag}</Tag>)
},{
    title: '操作',
    dataIndex: 'action',
    key:'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <Button onClick={showConfirm}>Delete</Button>
        </span>

    )
}

];
const data = [
    {
        key:'1',
        id:'1',
        name:'测试',
        address:'测试地址',
        tag:'标签1'
    },
    {
        key:'2',
        id:'2',
        name:'测试2',
        address:'测试地址2',
        tag:'标签2'
    },

];



class CompanyList extends Component {
    constructor() {
        super();
        this.state = {
            buttonText: '搜索',
            name:'',
            address:'',
        }
        this.clearAll = this.clearAll.bind(this);
    }
    clearAll() {
        let that = this
        console.log(that.state)
        this.setState({
            name:'',
            address: ''
        })
    }
    handlerName(e){
        const value = e.target.value;
        this.setState({
            name: value
        })
    }
    handlerAddress(e){
        const value = e.target.value;
        this.setState({
            address: value
        })
    }
    ButtonList = () => (
        <Button onClick={this.clearAll}>重置</Button>
    )
    SearchList = () => (
        <div className="search-wrap">
            <div>
                <label>名称</label>
                <Input placeholder="请输入搜索名称" value={this.state.name} onChange={this.handlerName.bind(this)} className="input-w170" />
            </div>
            <div>
                <label>地址</label>
                <Input placeholder="请输入搜索地址" className="input-w170" value={this.state.address} onChange={this.handlerAddress.bind(this)} />
            </div>
        </div>
    )
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="基础表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <SearchContent templateLeft={this.SearchList} templateRight={this.ButtonList} buttonText={this.state.buttonText} />
                                <Table columns={columns} dataSource={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            
        );
    }
} 



function showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
}

export default CompanyList;