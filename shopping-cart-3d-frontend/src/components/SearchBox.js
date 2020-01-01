import React, { Component } from 'react'
import { Input, Col } from 'antd';

export class SearchBox extends Component {

    render() {
        const { Search } = Input;
        return (
          <Col span={6} style={{display:'flex',justifyContent:'center'}}>
            <Search
                placeholder="Search 3d model"
                style={{ width: 200,height:60,fontSize:25}}/>
          </Col>
        )
      }
    }
    
    export default SearchBox