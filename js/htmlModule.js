//html에서 반복적으로 사용되는 구문을 모듈화

var htmlModule = {

"head" : 
`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<!-- 전역 글꼴(나눔 고딕) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">

<style>
body, h1, h2, h3, h4, h5, h6, p, span {
    font-family: 'Nanum Gothic'!important;
}
</style>
`,

"nav" : 
`
<link rel="stylesheet" href="../css/nav.css">

<div class="nav_package">
    <a href="/"><img class="logo" src="/img/medimory-logo.png" alt="메디모리 | Medimory"/></a>
    <h1><a class="logoText" href="/">메디모리</a></h1>
</div>
`,

"aside" : 
`
<link rel="stylesheet" href="../css/aside.css">

<div class="aside_box">
    <h1>카테고리</h1>
    <hr>
</div>
<div class="aside_section_margin"></div>
`,

"footer" :
`
<hr>
대충 footer 자리
`

}

export {htmlModule};
