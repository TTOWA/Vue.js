## Vue.js?
Vue.js는 Component 기반의 **SPA (Single Page Application)** 사이트를 구축 할 수 있는 프레임워크 이다.

### SPA (Single Page Application)
말 그대로 단일 페이지 어플리케이션 입니다. 하나의 html 파일과 단일 JS 파일로 이루어져 있습니다.   
최초 로딩 시에 html 파일과 JS 을 미리 로딩하여 페이지 전환이 될 경우 페이지를 이동하는 것이 아닌 전환될 부분만 그려줍니다.     
아래의 이미지를 보면 페이지를 이동하였으나 페이지 전체가 새로 로딩되는 것이 아니라 보여줘야 할 페이지의 부분을 새로 그려주면 페이지를 전환 같은 효과를 보여줍니다.          
<img src="./webtoon.gif" width="500px" height="300px"></img>          
장점     
**빠른 페이지변환**과 **반응성**, **화면전환 애니메이션** 등 사용자 친화적인 부분과 **적은 트래픽** 양을 누릴 수 있습니다.          
단점     
최초 로딩 시에 JS 파일을 가져와야 하는데 **JS 의 사이즈가 커수록 초기 로딩속도**는 느려집니다.     
(이를 해결하기 위해 뒤에서 code-splitting 에 대하여 알아볼 예정입니다)     
또, 검색엔진이 해당 페이지를 크롤 했을 때는 페이지가 그려지기 전이기 때문에 텅 빈 div 태그만 노출됩니다.     
이를 해결하기 위해서는 **meta tag** 를 이용하거나 **Nuxt** 같은 서버사이드 렌더링 프레임워크를 이용해야 합니다.

## 설치방법
$ npm install
$ npm i -g @vue/cli-init (vue/@vue 차이 작성하기)

참고 URL 
https://nangko.tistory.com/13
https://atez.kagamine.me/37
http://labs.brandi.co.kr/2018/05/03/kwakjs.html

https://simplevue.gitbook.io/intro/vue.js#spa-single-page-application
