# 여행 사이트 (CSS편)

[조건]

- 1. 모든 요소가 가운데 정렬 되어있어야합니다.
- 2. ‘travel’ 로고는 가로 길이가 165px, 세로 길이가 58px입니다.
- 3. 'travel' 로고 위에는 80px의 여백이 있습니다.
- 4. 메뉴는 16px의 ‘Helvetica’ 폰트, 색상은 Hex값 기준 58595B, RGB 기준 (88, 89, 91)입니다.
- 5. 현재 머물러 있는 창의 메뉴의 폰트는 진하게 나옵니다.
- 6. 각 메뉴 사이의 간격은 20px이고, 매뉴의 위 아래로 60px의 여백이 있습니다.
- 7. 사진의 가로 길이는 페이지의 가로 길이의 90%입니다. 예를 들어 페이지의 가로 길이가 1,000px이면, 사진의 가로 길이는 900px이 되어야 합니다.

```css
body{ /* 문서 전체 */
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    /* 조건 1로 인해 바디 안에 있는 태그들은 다 가운데 정렬 */
}
.logo{ /* 'travel'로고 */
    width: 165px; /* 너비(가로길이) : 165px */
    height: 58px; /* 높이(세로길이) : 58px */
    margin-top: 80px; /* 사진 위의 여백 : 80px */
}
.menu{ /* a태그를 감싸고 있는 div */
    margin-top: 60px; /* 윗 여백을 60px 준다 */
    margin-bottom: 60px; /* 아래 여백을 60px 준다 */
}
.menu > a { /* div에 속해있는 a 태그들 */
    font-size: 16px; /* 글자 크기 16px */
    font-family: "Helvetica"; /* 글자 폰트 "Helvetica" */
    color : rgb(88, 89, 91); /* 글자 색깔 */
    text-decoration: none; /* 링크 밑에 생기는 밑줄 선 없앤다 */
    margin-left: 10px; /* 왼쪽 여백을 10px 준다 */
    margin-right: 10px; /* 오른쪽 여백을 10px 준다 */
}
.imgs{ /* 이미지 */
    width: 90%; /* 너비를 90%로 적용 */
}
```

