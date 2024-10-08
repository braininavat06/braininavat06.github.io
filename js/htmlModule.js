//html에서 반복적으로 사용되는 구문을 모듈화
var htmlModule = {

"head" : 
`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta name="google-adsense-account" content="ca-pub-8581972532015406">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<link id="favicon" rel="icon" href="">

<!-- 전역 글꼴(나눔 고딕) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">

<style>
body, h1, h2, h3, h4, h5, h6, p, span {
    font-family: 'Nanum Gothic';
}

pre, code, code span, code p {
    font-family: Consolas, 'Courier New', monospace !important;    
}
</style>
`,

"nav" : 
`
<link id="nav-css" rel="stylesheet" href="" crossorigin="anonymous">

<div class="nav_package">
    <a href="/"><img id="logo" src="" alt="메디모리 | Medimory"/></a>
    <h1><a class="logoText" href="/">메디모리</a></h1>
</div>
`,

"aside" : 
`
<link id="aside-css" rel="stylesheet" href="" crossorigin="anonymous">

<div class="aside_box">
    <h1>카테고리</h1>
    <hr>
    <ul>
        <li><a href="https://www.medimory.com/list?id=전체글">전체 글 보기</a></li>
    </ul>
    <div id="category-loading">로딩중...</div>
    <ul id="category-ul">
        <li class="category-li>
            <ul class="category-sub-ul">
                <li class="category-sub-li"></li>
            </ul>
        </li>
    </ul>
</div>
<div class="aside_section_margin"></div>
`,

"footer" :
`
<hr>
문의 : medimory.official@gmail.com
`
}


//환경에 따라 상대경로, 절대경로를 동적으로 변경하는 함수
function routeCheck(type, name, route) {
    const isProduction = window.location.hostname !== 'localhost';
    const baseURL = isProduction ? `https://braininavat06.github.io${route}` : `..${route}`;

    if(type == "css") {
        document.getElementById(`${name}`).href = baseURL;
    } else if(type == "js") {
        return baseURL;
    }
}

export {htmlModule};
