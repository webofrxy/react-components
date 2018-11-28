import React from 'react';
import { Table } from 'antd';

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
},

];
const data = [
    {
        key:'1',
        name:'测试',
        address:'测试地址'
    },
    {
        key:'2',
        name:'测试2',
        address:'测试地址2'
    },

];

const CompanyList = () => (
    <Table columns={columns} dataSource={data} />
);

export default CompanyList;