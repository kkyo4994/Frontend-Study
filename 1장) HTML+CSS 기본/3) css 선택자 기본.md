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

=> #아이디 / 아이디 속성을 가지고 있는 태그를 선택한다. 아이디 선택자는 특정한 하나의 태그를 선택할 때 사용(웹 페이지 내부에서 중복 x)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Selector Basic</title>
    <style>
        #header { width: 500px; margin: 0 auto;
        background : blue; }
    </style>
</head>
<body>
    <div id="header">
        <h1>blue color is pretty</h1>
    </div>
</body>
</html>
```

* 클래스 선택자는 **특정한 클래스를 가지고 있는 태그를 선택할 때 사용**

=> . 클래스 / 특정한 클래스를 가지고 있는 태그를 선택한다. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Selector Basic</title>
    <style>
        .select { color : bisque; }
        }
    </style>
</head>
<body>
    <ul>
        <li class="select">Love ipsum</li>
        <li>Love ipsum</li>
    </ul>
</body>
</html>
```

## 속성 선택자

=> **선택자 뒤에 대괄호([ ])를 사용해** 속성과 값을 입력

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        input[type=text]{background:red;}
        input[type=password]{background:blue;}
    </style>
</head>
<body>
    <form>
        <input type="text"/>
        <input type="password"/>
    </form>
</body>
</html>
```

## 후손 선택자와 자손 선택자 

[간단한 body 태그]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <div>
        <h1>CSS Selector Basic</h1>
        <h2>Lorem ipsum</h2>
        <ul>
            <li>universal selector</li>
            <li>type selector</li>
            <li>id & class selector</li>
        </ul>
    </div>
</body>
</html>
```

* **자손 : ** div 태그를 기준으로 바로 한 단계 아래에 위치한 태그
* **후손 : ** div 태그 아래에 위치한 모든 태그

#### **후손 선택자**

: 선택자A 선택자B == 선택자A의 후손에 위치하는 선택자B를 선택합니다.

#### **자손 선택자**

: 선택자A > 선택자B == 선택자A의 자손에 위치하는 선택자B를 선택합니다.

> table 태그의 요소를 선택할 때는 자손 선택자를 사용하는 것은 좋지 않다.

## 반응 선택자 

: **사용자의 반응으로 생성되는 특정한 상태를 선택**

* **active** => 사용자가 마우스로 클릭한 태그를 선택한다
* **hover** => 사용자가 마우스를 올린 태그를 선택한다 

## 구조 선택자 

#### 일반 구조 선택자 

: **특정한 위치에 있는 태그를 선택**

* **first-child** => 형제 관계 중에서 첫 번째에 위치하는 태그를 선택한다
* **last-child** => 형제 관계 중에서 마지막에 위치하는 태그를 선택한다
* **nth-child** => 형제 관계 중에서 앞에서 수열 번째에 태그를 선택한다
* **nth-last-child** => 형제 관계 중에서 뒤에서 수열 번째에 태그를 선택한다

#### 형태 구조 선택자

* **first-of-type** => 형제 관계 중에서 첫 번째로 등장하는 특정 태그를 선택한다
* **last-of-type** => 형제 관계 중에서 마지막으로 등장하는 특정 태그를 선택한다
* **nth-of-type** => 형제 관계 중에서 앞에서 수열 번째로 등장하는 특정 태그를 선택한다
* **nth-last-of-type** => 형제 관계 중에서 뒤에서 수열 번째로 등장하는 특정 태그를 선택한다 

## 문자 선택자

#### 시작 문자 선택자

* **first-letter** => 첫 번째 글자를 선택합니다
* **first-line** => 첫 번째 줄을 선택합니다 

#### 전후 문자 선택자

* **after** => 태그 뒤에 위치하는 공간을 선택합니다
* **before** => 태그 앞에 위치하는 공간을 선택합니다

#### 반응 문자 선택자

* **selection** => 사용자가 드래그한 글자를 선택합니다

## 링크 선택자

* **link** => href 속성을 가지고 있는 a 태그를 선택합니다
* **visited** => 방문했던 링크를 가지고 있는 a 태그를 선택합니다

## 부정 선택자

* **not(선택자)** => 선택자를 반대로 적용합니다