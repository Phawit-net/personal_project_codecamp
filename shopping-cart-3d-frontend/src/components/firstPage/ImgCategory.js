import React, { Component } from 'react'
import { Carousel, Row, Col } from 'antd';
import './ImgCategory.css';

export class ImgCategory extends Component {

  handleClick() {
    console.log("Click")
  }
  render() {
    return (
      <>
        <Row style={{ width: '100vw' }}>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/image/ArchitectureCatIcon.png" alt='archIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Architectures'>
                {/* <a href='/main/1'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/ArchitectureCat.png" alt="building_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/ArchitectureCat2.png" alt="building_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/ArchitectureCat3.png" alt="building_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/AnimalCatIcon.png' alt='animalIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Animals'>
                {/* <a href='/main/4'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/AnimalCat.png' alt="animal_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/AnimalCat2.png' alt="animal_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/AnimalCat3.png' alt="animal_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/image/FurnitureCatIcon.png" alt ='furnitureIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Furnitures'>
                {/* <a href='/main/6'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FurnitureCat.png' alt="furniture_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FurnitureCat2.png' alt="furniture_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FurnitureCat3.png' alt="furniture_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FurnitureCat4.png' alt="furniture_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/CharacterCatIcon.png'alt='charIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Characters'>
                {/* <a href='/main/2'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/CharacterCat.png' alt="char_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/CharacterCat2.png' alt="char_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/CharacterCat3.png' alt="char_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/CharacterCat4.png' alt="char_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/FoodCatIcon.png'alt='foodIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Foods'>
                {/* <a href='/main/7'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FoodCat.png' alt="food_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FoodCat2.png' alt="food_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FoodCat3.png' alt="food_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/FoodCat4.png' alt="food_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/PlantCatIcon.png' alt='plantIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Plants'>
                {/* <a href='/main/8'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/PlantCat.png' alt="plant_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/PlantCat2.png' alt="plant_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/PlantCat3.png' alt="plant_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/PlantCat4.png' alt="plant_img4" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/PlantCat5.png' alt="plant_img5" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/VehicleCatIcon.png'alt='vehicleIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Vehicles'>
                {/* <a href='/main/3'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/VehicleCat.png' alt="vehicle_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/VehicleCat2.png' alt="vehicle_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/VehicleCat3.png' alt="vehicle_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/image/WeaponCatIcon.png" alt ='weaponIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Weapons'>
                {/* <a href='/main/5'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/WeaponCat.png" alt="weapon_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/WeaponCat2.png" alt="weapon_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/WeaponCat3.png" alt="weapon_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/WeaponCat4.png" alt="weapon_img4" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src="/image/WeaponCat5.png" alt="weapon_img5" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px ', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/image/ElectronicCatIcon.png' alt='elecIcon' style={{ position: "absolute", width: "100px", height: '100px', filter: "invert(100%)" }} />
              </div>
              <a href='/Main/Electronics'>
                {/* <a href='/main/9'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/ElectronicCat.png' alt="electronic_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/ElectronicCat2.png' alt="electronic_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='/image/ElectronicCat3.png' alt="electronic_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default ImgCategory