import React, { Component } from "react";
import { Menu, Row, Col} from "antd";
import "./CategoryList.css";

export default class CategoryList extends Component {
  renderCategoryList() {
    return this.props.categoryList.map(cat => (
      <Menu.Item key={cat.id} style={{ width: 90 }}>
        <a href = {`/Main/${cat.name}`}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <img src={cat.icon} alt={cat.name} style={{ paddingTop: "5px" }} />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center"}}>
          <span style ={{color:'#fff'}}>{cat.name}</span>
        </Col>
        </a>
      </Menu.Item>
    ));
  }
  renderSubCategoryList(catId) {
    return this.props.subCategoryList
      .filter(filter => filter.category_id === catId)
      .map(subCat => (
        <Menu.Item key={subCat.id} style={{ width: 90 }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <span style ={{color:'#fff'}}>{subCat.name}</span>
          </Col>
        </Menu.Item>
      ));
  }

  render() {
    const { onClick,onSubClick,selectedId,selectedSubId } = this.props
    return (
      <Row>
        <Menu
          selectedKeys={[(selectedId === null) ? null : selectedId.toString()]}
          onClick={onClick}
          mode="horizontal"
          style={{
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#555b68"
          }}>
          {this.renderCategoryList()}
        </Menu>
        <Menu
          selectedKeys={[(selectedSubId === null) ? null : selectedSubId.toString()]}
          onClick = {onSubClick}
          mode="horizontal"
          style={{
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#23272c",
            color: "#fff"
          }}>
          {this.renderSubCategoryList(selectedId)}
        </Menu>
      </Row>
    );
  }
}
