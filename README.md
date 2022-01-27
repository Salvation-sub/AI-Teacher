# 에티 (AI Teacher)

## 개발

- 김호균

## 배포 주소

- https://ai-teacher.vercel.app/

## 프로젝트 소개

- AI 선생님이 가르치는 온라인 교육 서비스
- 원하는 주제로 대본을 써서 등록하면 AI 선생님 동영상으로 등록되어 가르칩니다.
- 학생들은 수강평을 등록할 수 있습니다.
- 원하는 강의를 좋아요를 눌러 확인할 수 있습니다.

## 프로젝트 기간

- 2022.1.14 ~ 2022.1.25

## 구현 목록

### Front-end

- 모든 페이지 웹/앱 반응형 구현
- 로그인 / 회원가입 페이지 (validation 포함)
- 홈화면 페이지(카테고리화 및 슬라이더 배너)
- 강의목록 페이지(좋아요 기능)
- 강의상세 페이지(동영상, 수강평 작성)
- 강의등록 페이지(내용 작성 및 AiStudio API 호출해서 비디오 등록)

### Back-end

├── auth // 유저 api
│   ├── signin.ts  로그인
│   └── signup.ts  회원가입
├── classes // 강의 api
│   └── createclass.tsx  강의등록
│   └── getclass.ts  강의 디테일
│   └── getclasses.ts  강의 리스트
├── like  좋아요 api
│   ├── like.ts  좋아요
├── review  수강평 api
│   └── createreview.ts  수강평 등록
│   └── getreview.ts  수강평 리스트
├── auth.ts  jwt 인증


## 기술스택

### Front-end

- Next.js
- Typescript
- Styled-component
- Redux-toolkit & Redux-persist
- Axios
- Material-ui
- React-icons
- React-Player
- Formik
- Swiper

### Back-end

- Next.js 서버(Express 기반)
- Bcryptjs & jsonwebtoken
- MongoDB

## API 정보

- 딥브레인 AI
  - AI Studios용 API
