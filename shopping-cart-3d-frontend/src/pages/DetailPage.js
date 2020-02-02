import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Axios from '../config/api.service'
import PriceCard from '../components/detail/PriceCard';
import UserCard from '../components/detail/UserCard';
import ImageCard from '../components/detail/ImageCard';
import FullPath from '../components/detail/FullPath';
import DetailCard from '../components/detail/DetailCard';
import { connect } from 'react-redux'
import { addcart } from '../redux/actions/actions'
import ProductModel from '../components/ProductModel';
import * as THREE from "three";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const OrbitControls = require('three-orbit-controls')(THREE);

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoryPath: [],
      subCategoryPath: [],
      format: [],
      user: []
    };
  }

  async componentDidMount() {
    const location = this.props.location.pathname.split("/")[2]
    const result1 = await Axios.get(`/details/${location}`)
    this.setState({ productList: result1.data })
    const result2 = await Axios.get(`/catPath/${this.state.productList.category_id}`)
    this.setState({ categoryPath: result2.data })
    const result3 = await Axios.get(`/subPath/${this.state.productList.sub_category_id}`)
    this.setState({ subCategoryPath: result3.data })
    const result4 = await Axios.get(`/format/${this.state.productList.id}`)
    this.setState({ format: result4.data })
    const result5 = await Axios.get(`/users/${this.state.productList.user_id}`)
    this.setState({ user: result5.data })

    const modelObj = `/${this.state.productList.name}.obj`
    const matShade = `/${this.state.productList.name}.mtl`
    const jpgTexture = `/${this.state.productList.name}.png`

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff)
    var camera = new THREE.PerspectiveCamera(70, 1070 / 600, 0.1, 1000);
    var container = document.getElementById('product_model');
    var renderer = new THREE.WebGLRenderer();
    var CANVAS_WIDTH = 1070,
      CANVAS_HEIGHT = 600;
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
    container.appendChild(renderer.domElement);

    camera.position.z = 300;
    camera.position.y = 50;
    camera.position.x = -200;

    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.campingFactor = 0.25;
    controls.enableZoom = true;
    controls.enablePan = true;

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(187, 100%, 95%)'), 0.8);
    keyLight.position.set(-100, 0, 100);

    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(27, 100%, 96%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    var mtlLoader = new MTLLoader();
    mtlLoader.load(matShade, function (materials) {

      materials.preload();

      var objLoader = new OBJLoader();
      objLoader.load(modelObj, function (object) {

        var texture = new THREE.TextureLoader().load(jpgTexture);
        texture.crossOrigin = '';
        object.traverse(function (child) {   // aka setTexture
          if (child instanceof THREE.Mesh) {
            child.material.map = texture;
          }
        });
        scene.add(object);
      });
    });

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

  }

  handleClick = () => {
    this.props.addcart(
      this.state.productList.id,
      this.state.productList.name,
      this.state.productList.price,
      this.state.productList.image,
      this.state.user.username)
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Row style={{ margin: '17px 150px 17px 150px' }} type='flex'>
          <FullPath
            catPath={this.state.categoryPath.name}
            subPath={this.state.subCategoryPath.name}
            productName={this.state.productList.name} />
        </Row>
        <Row style={{ margin: '0px 130px 0px 130px' }} type='flex'>
          <Col span={16} style={{ padding: '0px 0px', borderRadius: '4px', border: '1px solid #c2c2c2' }}>
            <Col span={24}>
              <div id="product_model"></div>
            </Col>
            {/* <ProductModel objName ={this.state.productList.name}/> */}
            {/* <ImageCard
              image={this.state.productList.image}
              productName={this.state.productList.name} /> */}
          </Col>
          <Col span={8} style={{ padding: '0px 20px' }}>
            <PriceCard
              cart_product={this.state.productList}
              price={this.state.productList.price}
              handleClick={this.handleClick} />
            <UserCard
              username={this.state.user.username}
              avatar={this.state.user.avatar} />
          </Col>
          <Col span={24} style={{ padding: '30px 20px' }}>
            <DetailCard
              description={this.state.productList.description}
              file_formats={this.state.format}
              published_date={this.state.productList.published_date}
              polygons_type={this.state.productList.polygons_type}
              polygons_count={this.state.productList.polygons_count}
              vertices_count={this.state.productList.vertices_count}
              texture={this.state.productList.texture}
              material={this.state.productList.material}
              rigged={this.state.productList.rigged}
              animated={this.state.productList.animated}
              uv_mapped={this.state.productList.uv_mapped}
              unwrapped={this.state.productList.unwrapped} />
          </Col>
        </Row>
      </>
    )
  }
}

const mapDispatchToProps = {
  addcart: addcart
}

export default connect(null, mapDispatchToProps)(DetailPage)