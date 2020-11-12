# Vue.js?
Vue.js는 **Component** 기반의 **SPA (Single Page Application)** 사이트를 구축 할 수 있는 프레임워크 이다.   
참고 : <https://kr.vuejs.org/v2/guide/>

### SPA (Single Page Application)
말 그대로 단일 페이지 어플리케이션 입니다. 하나의 html 파일과 단일 JS 파일로 이루어져 있습니다.   
최초 로딩 시에 html 파일과 JS 을 미리 로딩하여 페이지 전환이 될 경우 페이지를 이동하는 것이 아닌 전환될 부분만 그려줍니다.     
아래의 이미지를 보면 페이지를 이동하였으나 페이지 전체가 새로 로딩되는 것이 아니라 보여줘야 할 페이지의 부분을 새로 그려주면 페이지를 전환 같은 효과를 보여줍니다.          
<img src="./webtoon.gif" width="500px" height="300px"></img> 
* * *
#### 장점
<pre>
1. 빠른 페이지변환
2. 반응성
3. 화면전환 애니메이션
4. 적은 트래픽
</pre>
#### 단점
<pre>
1. 최초 로딩 시 JS 파일을 가져와야 함으로 JS의 사이즈가 크면 초기 로딩속도 느려짐 이를 해결하기 위해 *코드스클리팅(code-splitting) 사용
2. 검색엔진이 해당 페이지를 크롤 했을 때는 페이지가 그려지기 전이기 때문에 텅 빈 div 태그만 노출됨.    
   이를 해결하기 위해서는 *meta tag 를 이용하거나 *Nuxt 같은 서버사이드 렌더링 프레임워크를 이용해야 함.
</pre>

* 코드 스플리팅(Code splitting)?     
코드를 분할하여 사용자가 원하는 시점에 파일을 로딩하여 애플리케이션 초기 로딩 속도를 개선하는 방법입니다.    
Vue는 컴포넌트 정의를 비동기 방식으로 처리할 수 있는 방법을 제공합니다.

* 메타 테그(meta tag)?    
앱의 메타 데이터를 관리 할 수 있는 Vue.js 플러그인입니다. react-helmet 반응에서 영감을 얻고 유사하게 작동합니다.     
그러나 데이터를 독점 구성 요소에 전달 된 소품으로 설정하는 대신 metaInfo 속성을 사용하여 구성 요소 데이터의 일부로 내보내기 만하면 됩니다.          
참고 : <https://yamoo9.gitbook.io/vue-a11y-seo/seo#vue-meta>, <https://github.com/nuxt/vue-meta>

* 넉스트(Nuxt)?     
Nuxt.js는 Vue.js 프레임워크를 기반으로 SSR(Server Side Rendering) 웹 페이지를 만들 수 있도록 해 주는 라이브러리입니다.     
검색엔진 최적화(SEO) 등의 문제로 CSR이 아닌 SSR 웹을 구축해야 하는 경우에 유용하게 사용할 수 있습니다.     
참고 : <https://velog.io/@bluestragglr/Nuxt.js-vs-Vue.js-SSR-시작하기>

### Vue 설치
1. CDN   
https://unpkg.com/vue 주소를 script 태그에 직접 추가   

2. Vue.js 파일다운   
   개발용 버전은 개발에 도움이 되는 모든 경고를 출력하기 때문에 개발 중에만 사용하고, 실제 서비스에서는 배포용 버전으로 사용해야 한다.   
<pre>
<code>개발용 : <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script></code>
<code>배포용 : <script src="https://cdn.jsdelivr.net/npm/vue"></script></code>
</pre>   
3. NPM 설치   
규모가 큰 프로젝트 경우 컴포넌트별 독립적으로 관리할 수 있는 싱글 파일 컴포넌트 방식 추천

## 설치방법
$ npm install
$ npm i -g @vue/cli-init (vue/@vue 차이 작성하기)

참고 URL 
https://nangko.tistory.com/13
https://atez.kagamine.me/37
http://labs.brandi.co.kr/2018/05/03/kwakjs.html

https://simplevue.gitbook.io/intro/vue.js#spa-single-page-application
