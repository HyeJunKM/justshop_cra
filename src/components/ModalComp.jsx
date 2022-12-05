import React from 'react';

function ModalComp({modalClose}){
  const onClickModalClose=(e)=>{
    e.preventDefault();
    modalClose();
  }
  return(
    <div id="modal">
      <div class="m-wrap">
        <div class="m-container">
          <div class="title">
            <h2>신규회원 대상 할인 이벤트 안내</h2>
          </div>
          <div class="content">
            <ul>
              <li>즐거운 쇼핑 환경을 위해 항상 노력하는 JUST 쇼핑몰입니다.</li>
              <li>고객님들께 한 단계 더 나아가 보답하는 ON쇼핑몰이 되고자 신규회원 대상 10% 할인 이벤트를 실시하고 있습니다.</li>
              <li>웹과 모바일에서 모두 이용 가능하며, 수준 높은 서비스를 위해 앞으로도 꾸준히 노력할 것을 약속드립니다.</li>
              <li><img src="./img/icon1.jpg" alt=""/></li>
            </ul>
          </div>
          <div class="button-box">
            <button onClick={onClickModalClose} class="m-close">닫기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComp;