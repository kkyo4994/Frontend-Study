# css 선택자 기본

## css 선택자란?

=> **특정한 HTML 태그를 선택할 때 사용하는 기능**

(+ 우리가 원하는 스타일 또는 기능을 적용할 수 있다. )



* 스타일시트 사용 방법

> 스타일시트 : style 태그 내부에 입력되는 코드.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Selector Basic</title>
    <style>
        h1{
            color: whitesmoke;
            background-color: rgb(57, 57, 100);
        }
    </style>
</head>
<body>
    <h1>CSS Selector Basic</h1>
</body>
</html>
```



## 전체 선택자 

=> HTML 문서 안에 있는 모든 태그를 선택할 때 사용

[예시]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Selector Basic</title>
    <style>
        * { color : blue; }
    </style>
</head>
<body>
    <h1>color</h1>
    <p>all blue</p>
</body>
</html>
```

 #### 태그 선택자

: 특정 종류의 태그를 모두 선택할 때 사용(전체 선택자는 *로 사용했다면, 색깔을 적용하고자 하는 태그를 선택하면 된다. ex: h1 { color:red; } )



## 아이디 선택자와 클래스 선택자

* 아이디 선택자는 **특정한 id 속성을 가지고 있는 태그를 선택할 때 사용**

