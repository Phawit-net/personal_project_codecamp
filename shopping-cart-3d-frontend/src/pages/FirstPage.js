import React, { Component } from 'react'
import { Row } from 'antd';
import SearchBox from '../components/SearchBox';
import ImgCategory from '../components/firstPage/ImgCategory';
import CanvasView from '../components/firstPage/CanvasView';

export default class FirstPage extends Component {
    render() {
        return (
            <>
                <div>
                    <Row type='flex' justify="center" align="middle" >
                        <SearchBox/>
                        <CanvasView/>
                    </Row>
                    <ImgCategory/>
                </div>
            </>
        )
    }
}
