import React, { Component } from 'react'
import './CanvasView.css'
import * as THREE from "three";
import { Col } from 'antd';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import modelObj from '../../object/cover.obj';
import matShade from '../../object/cover.mtl';
import jpgTexture from '../../object/cover.jpg';
// import modelFbx from '../object/cover.fbx';

const OrbitControls = require('three-orbit-controls')(THREE);


export default class CanvasView extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===

        var jpgTexture2 = 'https://doc-00-28-docs.googleusercontent.com/docs/securesc/5i29pmvqe7ru4mnpqotrd83dk3v0apt0/2mccg61fhvku6nkvo5h9d6t9m8nm7oc0/1576339200000/13404213866040070116/13404213866040070116/1X8YdeCylTzDkQjBghg6VLxih4UZYfU93?authuser=0'

        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xd6efff)
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var container = document.getElementById('canvas');
        var renderer = new THREE.WebGLRenderer();
        var CANVAS_WIDTH = window.innerWidth / 1.4,
            CANVAS_HEIGHT = window.innerHeight / 1.4;
        renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
        container.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00f050 });
        var cube = new THREE.Mesh(geometry, material);
        // scene.add( cube );
        camera.position.z = 40;
        camera.position.y = 20;
        camera.position.x = 5;

        var controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.campingFactor = 0.25;
        controls.enableZoom = true;
        controls.enablePan = true;

        // var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        // keyLight.position.set(-100, 0, 100);

        // var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        // fillLight.position.set(100, 0, 100);

        // var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        // backLight.position.set(100, 0, -100).normalize();

        // scene.add(keyLight);
        // scene.add(fillLight);
        // scene.add(backLight);
        const light = new THREE.DirectionalLight(0xfff8ee, 1.5);

        // move the light back and up a bit
        light.position.set(10, 15, 5);

        // remember to add the light to the scene
        scene.add(light);

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
            //   cube.rotation.x += 0.01;
            //   cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return (
            <Col span={18}>
                <div className='canvas'>
                    <div id="canvas"></div>
                </div>
            </Col>
        )
    }
}
