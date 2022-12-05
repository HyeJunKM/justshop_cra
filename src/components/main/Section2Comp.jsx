import React from 'react';

function Section2Comp({notice,gallery, modalOpen}){

  //공지사항, 갤러리 상태관리
  const [show, setShow] = React.useState(false);

  const onClickNotice = (e)=>{
    e.preventDefault();
    setShow(false);
  }
  const onClickGallery = (e)=>{
    e.preventDefault();
    setShow(true);
  }

  //공지사항 모달 오픈 이벤트
  const onClickModal=(e)=>{
    e.preventDefault();
    modalOpen(); //#wrap의 modalOpen 함수 실행
  }

  return (
    <section id="section2">
      <div className="left">
        <button onClick={onClickNotice} className={`notice-btn ${show&&'on'}`}>공지사항</button>
        <button onClick={onClickGallery} className={`gallery-btn ${show&&'on'}`}>갤러리</button>
        <div className={`notice ${show&&'on'}`}>
          <div className="gap">
            <ul>
              {
                notice.map((item,idx)=>{
                  return(
                    idx===0?
                    <li key={idx}><a href="#" onClick={onClickModal} className={"modal-btn"}>{item.제목}</a><span>{item.날짜}</span></li>
                    :
                    <li key={idx}><a href="#">{item.제목}</a><span>{item.날짜}</span></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className={`gallery ${show&&'on'}`}>
          <div className="gap">
            <ul>
              {
                gallery.map((item,idx)=>{
                  return(
                    <li key={idx}><div className="col-gap"><a href="#" title={item.title}><img src={item.imgSrc} alt=""/></a></div></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="title">
          <h2 style={{color:'rgb(95,0,128)', fontSize:'16px'}}>BANNER</h2>
        </div>
        <div className="banner">
          <a href="#" title="banner-link"><img src="./img/banner.jpg" alt=""/></a>
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h2 style={{color:'rgb(255,255,255)', fontSize:'16px'}}>DIRECT LINK</h2>
        </div>
        <div className="direct">
          <a href="#" title="direct-link"><img src="./img/direct.jpg" alt=""/></a>
        </div>
      </div>
    </section>
  )
}

//기본 props 만들기
Section2Comp.defaultProps = {
  notice: [
    {제목:"신규회원 대상 할인 이벤트 안내", 날짜:"2021.11.23"},
    {제목:"2022 S/S 시즌 신규 의류 안내", 날짜:"2021.11.19"},
    {제목:"반품/환불 규정에 대해 알려드립니다", 날짜:"2021.11.14"},
    {제목:"12월 재입고 품목을 알려드립니다", 날짜:"2021.11.07"}
  ],
  gallery: [
    {title:"img1", imgSrc:"./img/icon1.jpg"},
    {title:"img2", imgSrc:"./img/icon2.jpg"},
    {title:"img3", imgSrc:"./img/icon3.jpg"}
  ]
}

export default Section2Comp;