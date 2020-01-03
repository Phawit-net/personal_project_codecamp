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
    let cat = [
      {id :1 ,name:'Architectures'},
      {id :2 ,name:'Characters'},
      {id :3 ,name:'Vehicles'},
      {id :4 ,name:'Animals'},
      {id :5 ,name:'Weapons'},
      {id :6 ,name:'Furnitures'},
      {id :7 ,name:'Foods'},
      {id :8 ,name:'Plants'},
      {id :9 ,name:'Electronics'}
    ]
    const local = cat.filter(cat => cat.name == location ?cat : null).map(cat => cat.id)[0] + ''
    Axios.get("/categories")
      .then(result => {
        this.setState({
          categoryList: result.data,
          selectedCategoriesId: local
        });
      })

    Axios.get("/subcategories")
      .then(result => {
        this.setState({
          subCategoryList: result.data
        });
      })

      Axios.get(`/products/${local}`)
      .then(result => {
        this.setState({
          productList: result.data
        });
      })  
  }

  handleClick = e => {
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
