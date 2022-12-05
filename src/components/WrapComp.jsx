import React from 'react';
import HeaderComp from './HeaderComp';
import MainComp from './MainComp';
import FooterComp from './FooterComp';
import ModalComp from './ModalComp';

function WrapComp (){
    //모달 상태관리
    const [show, setShow] = React.useState(false);
    const modalOpen=()=>{
      setShow(true);
    } //모달열기
    const modalClose=()=>{
      setShow(false);
    } //모달닫기

  return (
    <div id="wrap">
      <HeaderComp/>
      <MainComp modalOpen={modalOpen}/>
      <FooterComp/>
      {
        show&&<ModalComp modalClose={modalClose}/>
      }
    </div>
    
  );
};

export default WrapComp;