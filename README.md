# 오픈마켓 (<img src="public/assets/Logo-hodu.png" width="120"/>)

> 안녕하세요! 👋 누구나 구매자, 판매자가 될 수 있는 오픈마켓 <img src="public/assets/Logo-hodu.png" width="120"/> 입니다.

## 설치 방법

레포지토리 클론 : `$ git clone https://github.com/yunwoo-yu/ddowamarket.git`

yarn 설치 : `$ npm install yarn`

실행 : `$ yarn start`

배포 사이트 :

## 🛠 사용 STACK 🛠

- Front-End

  - HTML5 / CSS3
  - SASS / styled-components / styled-reset
  - React / React-router(v6) / React Context
  - Axios

- Design
  - figma ( 제공 )

## STACK 선정 이유 🙆‍♂️

- 전역 상태관리

  - context와 reduxRTK 중 고민 했지만 프로젝트의 규모가 크지 않음을 고려하여 context로 결정했습니다.
  - recoil과 react query의 조합도 생각했지만 미숙하여 보류 ( 추후 리팩토링 가능성 있음 )

- CSS - in - JS
  - button의 색상이나 width값만 props로 변경하여 컴포넌트의 재사용성을 높이고 싶어 결정했습니다.

## Design Patterns⭐️

- Container/Presentational 패턴
  - 컴포넌트를 깔끔하게 관리.
  - container 컴포넌트 대신 pages폴더에 container를 대신할 page컴포넌트를 만들어 각종 데이터 fetch와 전역으로 관리할 필요없는 상태들을 작성하고 props로 컴포넌트 전달.

## 나 혼자 만들고 지키는 컨벤션👨‍💻

#### commit message 컨벤션

- Git-flow 참고. ( 할일:공백'내용'
  - feat: 기능 추가
  - fix: 에러, 버그, 문서 수정 등
  - refac: 코드 리팩터링
  - (필요한 사항 있으면 추가 예정)

#### 기본 컨벤션

- 함수 15줄 이하로 작성.
- depth는 3이하로 작성.
- 시맨틱한 태그 최대한 사용.
- 각각의 함수는 한가지 일만 잘 하도록 구현 `SOLID 단일 책임 원칙`
- 변수 선언 키워드는 var은 사용하지 않는다. (let, const 사용)

## 업데이트 예정

- (0.1.0 출시 이후 타입스크립트 및 recoil, react query
  || redux rtk query 업데이트 예정)

* 0.0.1
  - 작업 진행 중

## 정보

유윤우 – [@티스토리 주소](https://frontend-development.tistory.com/) – 이메일주소: skypnal12@naver.com
