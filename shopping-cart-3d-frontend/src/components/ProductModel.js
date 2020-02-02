import React, { Component } from 'react'
import * as THREE from "three";
import { Col } from 'antd';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const OrbitControls = require('three-orbit-controls')(THREE);
export default class ProductModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj:''
    };
  }

   componentDidMount() {
    // === THREE.JS CODE START ===

    console.log(this.state)
    const modelObj = `/${this.state}.obj`
    const matShade = `/${this.state}.mtl`
    const jpgTexture = `/${this.state}.png`

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

  render() {
    const { objName } = this.props;
    return (
      <Col span={24}>
        <div id="product_model"></div>
      </Col>
    )
  }
}
