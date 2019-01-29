import React from 'react';
import { Button } from 'antd';

class SearchContent extends React.Component{
    constructor(props){
        super(props);
        this.getList = this.getList.bind(this);
    }
    getList(){
        this.props.searchChanage();
    }
    render() {
        return (
            <div className="search-box">
                {this.props.templateLeft()}
                <Button type="primary" className="margin-r10" onClick={this.getList}>{this.props.buttonText}</Button>
                {this.props.templateRight()}
            </div>
        );
    }; 
    
}

SearchContent.defaultProps = {
    buttonText:'搜索'
};

export default SearchContent;