import React from 'react';

function FooterComp(){
  return(
    <footer id="footer">
      <div className="left">
        <h2><a href="#" title="Just 쇼핑몰"><img src="./img/footerLogo.png" alt=""/></a></h2>
      </div>
      <div className="center">
        <div className="row1">
          <span><a href="#" title="개인정보처리방침">개인정보처리방침</a></span>
          <span><i>|</i></span>
          <span><a href="#" title="운영방침">운영방침</a></span>
          <span><i>|</i></span>
          <span><a href="#" title="오시는 길">오시는 길</a></span>
        </div>
        <div className="row2">
          <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <div className="right">
        <span><a href="#" title="facebook"><img src="./img/sns1.jpg" alt=""/></a></span>
        <span><a href="#" title="twitter"><img src="./img/sns2.jpg" alt=""/></a></span>
        <span><a href="#" title="instagram"><img src="./img/sns3.jpg" alt=""/></a></span>
      </div>
    </footer>
  )
}

export default FooterComp;