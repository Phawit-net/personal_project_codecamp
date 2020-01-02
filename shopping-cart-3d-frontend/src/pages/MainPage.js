import React, { Component } from "react";
import ProductCard from "../components/product/ProductCard";
import CategoryList from "../components/product/CategoryList";
import Axios from '../config/api.service'

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList: [],
      productList: [],
      selectedCategoriesId: null,
      selectedSubCategoriesId : null
    };
  }

  componentDidMount() {
    Axios.get("/categories")
      .then(result => {
        this.setState({
          categoryList: result.data,
          selectedCategoriesId: result.data[0].id
        });
      })

    Axios.get("/subcategories")
      .then(result => {
        this.setState({
          subCategoryList: result.data
        });
      })

      Axios.get("/products/1")
      .then(result => {
        this.setState({
          productList: result.data
        });
      })  
  }

  handleClick = e => {
    this.setState({
      selectedCategoriesId: e.key,
      selectedSubCategoriesId: null
    }, () => {
      Axios.get(`/products/${this.state.selectedCategoriesId}`)
        .then(result => {
          this.setState({
            productList: result.data
          });
        })
    })
  }

  handleSubClick = e => {
    console.log(e.key)
    this.setState({
      selectedSubCategoriesId: e.key
    }, () => {
      Axios.get(`/products/subcategory/${this.state.selectedSubCategoriesId}`)
        .then(result => {
          this.setState({
            productList: result.data
          });
        })
    })
  }

  render() {
    return (
      <div>
        <CategoryList
          categoryList={this.state.categoryList}
          subCategoryList={this.state.subCategoryList}
          onClick={this.handleClick}
          onSubClick = {this.handleSubClick}
          selectedId={this.state.selectedCategoriesId}
          selectedSubId ={this.state.selectedSubCategoriesId}/>
        <ProductCard
          productList={this.state.productList}/>
      </div>
    );
  }
}
