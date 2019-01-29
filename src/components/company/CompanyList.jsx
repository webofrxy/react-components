import React, { Component } from 'react';
import { Table, Row, Col, Card, Input, Divider, Tag, Modal } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import SearchContent from '../common/SearchContent';
import { Button } from 'antd/lib/radio';
import axios from 'axios';
import { Route } from 'react-router-dom';


const confirm = Modal.confirm;

class CompanyList extends Component {
    constructor() {
        super();
        this.state = {
            buttonText: '搜索',
            name:'',
            address:'',
            list:[]
        }
        this.clearAll = this.clearAll.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.toDetail = this.toDetail.bind(this);
    };
    //组件渲染顺序问题
    componentDidMount(){
        this.searchChanage();
    }
    clearAll() {
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
    searchChanage = (newState) =>{
        axios.get(' https://www.easy-mock.com/mock/5a7282e38d0c633b9c4adc61/hzanchu/api/news/get_list').then((res)=>{
            let r = res.data;
            if(r.data.error === 0){
                this.setState({
                    list: r.data.data
                })
                console.log(this.state.list)
            }
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    showConfirm() {
        confirm({
          title: '确认删除这条数据吗?',
          content: 'Some descriptions',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
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
    //点击事件传参问题
    toDetail(record){
        console.log(record)
        this.props.history.push({pathname:'/app/company/detail',name:record.name})
    }
    
    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <span>{text}</span>,
        }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '链接',
            dataIndex: 'router',
            key: 'router',
        },{
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render: (img,record) => (<span>img</span>)
        },{
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            render: (time,record) => (<span>time</span>)
        },{
            title: '操作',
            dataIndex: 'action',
            key:'action',
            render: (text, record) => (
                <span>
                    <Button onClick={this.toDetail.bind(this,record)}> 查看</Button>
                    <Divider type="vertical" />
                    <Button onClick={this.showConfirm}>删除</Button>
                </span>

            )
        }

    ];
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="基础表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <SearchContent templateLeft={this.SearchList} templateRight={this.ButtonList} buttonText={this.state.buttonText} searchChanage={this.searchChanage} />
                                <Table columns={this.columns} dataSource={this.state.list} rowKey="name" />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            
        );
    }
} 

export default CompanyList;