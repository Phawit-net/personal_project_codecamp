import React, { Component } from 'react'
import { Carousel, Row, Col } from 'antd';
import './ImgCategory.css';
import { Link } from 'react-router-dom'

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
                <img  src="https://drive.google.com/uc?id=1J0gDpk5BsLRh2ck_J7vYBN9AHG-2Xv9m" style={{position: "absolute", width: "100px", height: '100px' ,filter:"invert(100%)"}} />
              </div>
              <a href='/Main/Architectures'>
              {/* <a href='/main/1'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl' alt="building_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1sgtSTGX-VBQUbtfKjGccrE9GxRUPpjP0' alt="building_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=16Aan8TFAZaJx9OaOIjOxJuBlrFJtPhJS' alt="building_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1zteA9-guY6LOgadIfq1oSHLpWBpaImQj" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Animals'>
              {/* <a href='/main/4'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1BeFRCp54NVcxZ4i1OC11lRPXE6Nr5i0k' alt="animal_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=14dwj4-Rey2pPfBa2aLwvw9ZAUhwC5MbO' alt="animal_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1dnwRKyLQkD2L6vozYO97NmGsE1GYKkt_' alt="animal_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1WwKQZplSffQIt_7MMvFLDcrQgovw7M3t" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Furnitures'>
              {/* <a href='/main/6'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1-pTNUPFJaQx40A8mgKirvRqKLmhkEkgB' alt="furniture_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1H4daiA5p0cphZgaw2WwRsYlOtYbTGd6e' alt="furniture_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1XeFcPt8bOIo2sklL63M1OWtRzo-b9G7s' alt="furniture_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1s2s1NCNDhHY-6mBin5ZeRvsHwWLsqTzl' alt="furniture_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1ddNeayh5R4C9GQ6uHaYq5VSiFopFXJMS" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Characters'>
              {/* <a href='/main/2'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1092pfWZYty9JAGo6eHEWdEkFSFajgwgt' alt="char_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1sutLLRTScEof4Y7iUpQsP8593Rf1Gjuo' alt="char_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1Z1n3_hqiPeQbSHaG_JNoz7sI6b3hCCp7' alt="char_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1QNWkgKqRuAsGick00I2ASkKDNok_eGMs' alt="char_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1COB1IGbavEElgd0lE3p8risH09gTEzj6" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)"}} />
              </div>
              <a href='/Main/Foods'>
              {/* <a href='/main/7'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1ss1pU9XSaPMXRlXpWMXqS5ogn3ejR_xM' alt="food_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1gbRXlS7njIVZTXjO-m94DrOa7cehSJ-G' alt="food_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1RJ6q83RG11jkU3ob38P9nz6AzsU7CNZt' alt="food_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1wk0YSk1pEMhLxaGmmpt2hQynsqhgTgkD' alt="food_img4" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=157yEhJLBOXBlKvJ7czg6oU9Uoel7wxDG" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Plants'>
              {/* <a href='/main/8'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1mdjOR7-ml_X3XwJZM1cFfw1RP-P-PpdH' alt="plant_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=12GtEPw_QAbTHR1VyWB5J4ZkB1vSloaNs' alt="plant_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1DM82hWIN-1M-pPOXfeI-HOdwdAP9mChC' alt="plant_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1gurEM9ox1_j-LEqYGDVVLsh8c-sTtMmu' alt="plant_img4" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=11wDnhc8bL0v-tlyrZHbFs0STmdVVcsuW' alt="plant_img5" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1fKh1z1wpHWG_QXFGt3r-hzmjL_ehkmm-" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Vehicles'>
              {/* <a href='/main/3'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1LTETk-5QSqSXlRQBBWytXbnz7b9cK3Dk' alt="vehicle_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1_DxPITOfMKEa4UfOtoygKIfpk8gwSk0U' alt="vehicle_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=14mEjK9w09PhZxPn8Yh4PtO_KAKDkPBm6' alt="vehicle_img3" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1ZwVbC1NVBjnMfvwXOehlhbUGZv7EwZYE" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)" }} />
              </div>
              <a href='/Main/Weapons'>
              {/* <a href='/main/5'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1joOT1zYIUYYXjDaCWkQ3yLR5-unX4_me' alt="weapon_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1eILHGsM48gOnmw0XYVMKGJfcsGI_0pnv' alt="weapon_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1sh1sv9Pr84Vo2Gac8_FkHPmJAccSJWxV' alt="weapon_img3" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1CEFJGuRfhJhNP5ApUvIFk8_sffvXzlr1' alt="weapon_img4" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1W6KELmTxSwNVPrtvuGR-N205uyJksC5P' alt="weapon_img5" />
                  </div>
                </Carousel>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div style={{ position: "absolute", width: '492px ', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://drive.google.com/uc?id=1Y-1kfaoYeKVYWwWwE_bjnzRpvjRO4kgO" style={{ position: "absolute", width: "100px", height: '100px',filter:"invert(100%)"}} />
              </div>
              <a href='/Main/Electronics'>
              {/* <a href='/main/9'> */}
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1VHE0Ji34jzZ-r3Jb0no28OcLvLiyJyoi' alt="electronic_img1" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=1D_7bmdjypHE-65kZ8SgpG5HkD3MRGeeS' alt="electronic_img2" />
                  </div>
                  <div>
                    <img style={{ width: 492, height: 480 }} src='https://drive.google.com/uc?id=19Mgxd8V4n2OXlwmKi3GUX6tmuiK0dsfW' alt="electronic_img3" />
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