# MINI PROJECT

### 태그 선택자, 클래스 선택자

* 태그 선택자와 클래스 선택자를 이용하여 직원 채용 페이지 만들기



#### 문제

1. 페이지의 모든 글자는 기본 글꼴을 '바탕'으로 하고 글자 색상은 짙은 회색(#444444)으로 지정
2. 글 제목인 '직원 채용'의 글자 크기는 30px, 색상은 검은색(#000000)으로 지정
3. h3 태그의 글자 크기는 20px, 색상은 짙은 회색(#222222)으로 지정
4. red 클래스는 볼드체 빨간색으로 지정
5. blue 클래스는 글자 색상을 파란색으로 지정하고 밑줄이 나타나게 지정



#### 답

1. 

```css
body{
    font-family: '바탕';
    color: #444444;
}
```

2.

```css
h1{
    font-size: 30px;
    color: #000000;
}
```

3.

```css
h3{
    font-size: 20px;
    color: #222222;
}
```

4.

```css
.red{
    color: red;
    font-weight: bold;
}
```

5.

```css
.blue{
    color: blue;
    text-decoration: underline;
}
```



### CSS 선택자

* 다양한 CSS 선택자를 이용하여 회사 소개 페이지 만들기



#### 문제

1. 글 제목의 글자 색상은 #423022, 글꼴은 맑은 고딕으로 지정하고 가운데 정렬
2. 모든 단락의 글자 색상은 #444444, 크기는 16px, 글꼴은 돋움, 줄 간격은 130%로 지정
3. 첫 번째 문단의 글자 색상은 #8f7e6c, 크기는 20px, 볼드체로 지정하고 orange 클래스의 글자 색상은 #ff6400으로 지정
4. 마지막 문단의 글자 색상은 #307466, 크기는 18px로 지정하고 밑줄로 지정



#### 답

1. 

```css
 h1{
     color: #423022;
     font-family: '맑은 고딕';
     text-align: center;
}
```

2.

```css
p{
    color:#444444;
    font-size: 16px;
    font-family: '돋움';
    font-weight: 130%;
}
```

3.

```css
#headline{
    color: #8f7e6c;
    font-size: 20px;
    font-weight: bold;
}
.orange{
    color: #ff6400;
}
```

4.

```css
#company{
    color: #307466;
    font-size: 18px;
    text-decoration: underline;
}
```
