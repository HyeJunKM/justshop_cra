import React from 'react';

function HeaderComp(props){
  const {homePath,logoTitle,imgSrc,imgAlt, subMenu1, subMenu2, subMenu3, subMenu4} = props;

  ////// 상태관리 React.useState()
  // const [addClass1, setAddClass1] = React.useState(false); //기본값false
  // const [addClass2, setAddClass2] = React.useState(false); 
  // const [addClass3, setAddClass3] = React.useState(false); 
  // const [addClass4, setAddClass4] = React.useState(false); 

  const [addClass, setAddClass] = React.useState({
    addClass1: false,
    addClass2: false,
    addClass3: false,
    addClass4: false
  });

  const {addClass1,addClass2,addClass3,addClass4} = addClass;

  const onMouseEnter1=()=>{
    setAddClass({
      addClass1: true,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
    // setAddClass1(true);
    // setAddClass2(false);
    // setAddClass3(false);
    // setAddClass4(false);
  }
  const onMouseEnter2=()=>{
    setAddClass({
      addClass1: false,
      addClass2: true,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter3=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: true,
      addClass4: false
    })
  }
  const onMouseEnter4=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: true
    })
  }

  // //addClass클릭시 true로 변경
  // const onClickAddClass=(e)=>{
  //   e.preventDefault();
  //   alert('클릭');
  //   setAddClass(true);
  // }

  // //addClass2클릭시 false로 변경
  // const onClickAddClass2=(e)=>{
  //   e.preventDefault();
  //   alert('클릭');
  //   setAddClass(false);
  // }

  ///// 메인버튼에 onMouseEnter -> addClass true로 변경
  // const onMouseEnterAddClass=()=>{
  //   setAddClass(true);
  // }

  ///// nav 영역 onMouseLeave -> addClass false로 변경
  const onMouseLeaveAddClass=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }
  
  return(
    <header id="header">
      <div className="left">
        <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt}/></a></h1>
      </div>
      <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
          <ul>
            <li>
              <a href="#" onMouseEnter={onMouseEnter1} className={`main-btn ${addClass1&&'on'}`} title="탑">탑</a> 
                <div className={`sub sub1 ${addClass1&&'on'}`}> {/* <div className={addClass1?'sub sub1 on':'sub sub1'}></div> */}
                    <ul>
                      { // JSX 중괄호 안에 자바스크립트 코딩하기
                        subMenu1.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                      {/* <li><a href="#" title="{}">{}</a></li> */}
                    </ul>
                </div>
            </li>
            <li>
              <a href="#" onMouseEnter={onMouseEnter2} className={`main-btn ${addClass2&&'on'}`} title="아우터">아우터</a>
              <div className={`sub sub2 ${addClass2&&'on'}`}>
                    <ul>
                      {
                        subMenu2.map((item,idx)=>{
                          return(
                          <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                </div>
            </li>
            <li>
              <a href="#" onMouseEnter={onMouseEnter3} className={`main-btn ${addClass3&&'on'}`} title="팬츠">팬츠</a>
                <div className={`sub sub3 ${addClass3&&'on'}`}>
                    <ul>
                      {
                        subMenu3.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                </div>
            </li>
            <li>
              <a href="#" onMouseEnter={onMouseEnter4} className={`main-btn ${addClass4&&'on'}`} title="악세서리">악세서리</a>
                <div className={`sub sub4 ${addClass4&&'on'}`}>
                    <ul>
                      {
                        subMenu4.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

//헤더 컴포넌트 안에서 사용하는 모든 변수 defaultprops 설정
HeaderComp.defaultProps = {
  logoTitle: 'JUST 쇼핑몰',
  homePath: './index.html',
  imgSrc: "./img/logo.png",
  imgAlt: 'logo',
  subMenu1: ['블라우스','티','셔츠','니트'], // 항목이 두개 이상일 경우 {menu: '블라우스'}, {menu: '티'},... 이런식으로 작성
  subMenu2: ['자켓','코트','가디건','머플러'],
  subMenu3: ['청바지','짧은바지','긴바지','레깅스'],
  subMenu4: ['귀고리','목걸이','반지','팔찌']
}

export default HeaderComp;