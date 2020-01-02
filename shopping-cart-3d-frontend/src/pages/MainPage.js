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
    const location = this.props.location.pathname.split("/")[2]
    // const local = this.state.categoryList.filter(cat => cat.name == location ?cat : null).map(cat => cat.id)[0]
    // console.log(local)
    Axios.get("/categories")
      .then(result => {
        this.setState({
          categoryList: result.data,
          selectedCategoriesId: location
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
    // const location = this.props.location.pathname.split("/")[2]
    // const local = this.state.categoryList.filter(cat => cat.name == location ?cat : null).map(cat => cat.id)[0]
    console.log(e.key)
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
    console.log(this.state.categoryList)
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
