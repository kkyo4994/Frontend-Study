# Box Model

## margin & padding 정리

* 요소는 내용(content), 패딩(padding), 테두리(border)로 이루어져 있다

### Padding

: 내용과 테두리 사이의 **여유 공간**

#### Padding을 주는 방법

##### 1) 직관적인 방법

: padding-top: 20px;  padding-bottom: 40px;  padding-left: 120px;  padding-right: 60px;

이와 같이 하나하나 값을 주며 작성하기

##### 2) 한 줄에

: 시계 방향으로 하나씩 한 줄로 작성하기 (`padding: 위 오른쪽 아래 왼쪽;` )

###### + 위, 아래, 왼쪽, 오른쪽이 다 같은 경우

: 모든 방향의 주는 값이 똑같을 때는, ` padding: 50px;` 와 같이 하나의 값만 작성하기

###### + 위, 아래가 같고, 왼쪽, 오른쪽이 같은 경우

: ` padding: 50px 100px;` 와 같이 두개의 값 작성하기

### Margin

: 요소 주위의 여백. 즉, **테두리 밖의 공간**

#### Margin을 주는 방법

- 요소에게 margin을 주는 방법은 padding을 주는 방법과 똑같습니다.

##### 1) 직관적인 방법

: margin-top: 50px;  margin-bottom: 40px;  margin-left: 200px;  margin-right: 60px;

와 같이 하나하나 값을 주며 작성하기

##### 2) 한 줄에

: 시계 방향으로 하나씩 한 줄로 작성하기(`margin: 위 오른쪽 아래 왼쪽;`)

###### + 위, 아래, 왼쪽, 오른쪽이 다 같은 경우

: ` margin: 50px;`와 같이 하나의 값만 작성하기

###### + 위, 아래가 같고, 왼쪽, 오른쪽이 같은 경우

: ` margin: 50px 70px;` 와 같이 두개의 값 작성하기

### 가운데 정렬

: 왼쪽과 오른쪽 **`margin` 값을 `auto`로 설정**( `margin-left: auto;`  , `margin-right: auto;`) 

> `auto`는 말 그대로 '자동으로 계산'하라는 뜻



## width, height 정리

* **텍스트와 이미지에 설정**할 수 있다

#### 최소, 최대 가로 길이

: `min-width`, `max-width`로 길이 설정

#### 최소, 최대 세로 길이

: `min-height`, `max-height`로 길이 설정



## overflow 정리

* 넘쳐나는 내용물을 `overflow` 속성으로 처리한다

#### visible

: 넘쳐나는 내용물이 **그대로 보인**다. (기본값)

#### hidden

: 넘쳐나는 부분을 **아예 숨겨줄** 수도 있다.

#### scroll

: 내용물을 숨겼다가, **사용자가 스크롤** 하면 볼 수 있게 해준다.

### auto

:  **내용물이 넘쳐날 때만** 스크롤바를 보여준다. 

> scroll과 auto의 결과는 똑같지만 다른 점은 scroll은 항상 스크롤바를 보여준다는 것이다.



## border 정리

* 값을 쓰는 순서는 **굵기, 스타일 (실선, 접선 등), 색**이다

### border을 주는 방법

#### 1) 한 줄에 끝내기

: 일방적인 방법으로, border 속성으로 **한 줄에 다 쓰는** 것. (모두 같은 테두리가 생겨난다.)

#### 2) 명확하게 나누기

:  `border-style`, `border-color`, `border-width` 속성을 써서 테두리의 **스타일을 하나씩 지정**.

#### 3) 다채로운 테두리

: `border-top: 3px dotted #4d9fff;`, ` border-bottom: 2px dashed red;` 와 같이 **다 다르게 설정**.

###### + 테투리 없애는 방법 

> 1. `border: none;`
> 2. `border: 0;`



## border-radius

* `border-radius`라는 속성을 사용하면 **요소의 모서리를 둥글게 만들** 수 있다(값을 크게 주면 더 둥글게 된다)

#### 개별 설정

ex) `  border: 1px solid green;  `  

`border-top-left-radius: 50px; /* 왼쪽 위 */  `

`border-top-right-radius: 5px; /* 오른쪽 위 */  `

`border-bottom-right-radius: 0px; /* 오른쪽 아래 */  `

`border-bottom-left-radius: 20px; /* 왼쪽 아래 */`  



## background-color

* `background-color` 속성을 사용하면 **배경색을 설정**할 수 있다. 

#### 페이지 배경색

* **`body` 태그**에 `background-color` **속성을 설정**한다.

>  배경색을 투명하게 두고 싶으면 `transparent` 값으로 설정(따로 설정 안 하면 기본값으로 설정)



##  box-shadow

*  `box-shadow` 속성을 사용하면 요소에 그림자를 줄 수 있다. (기본값은 none -> 그림자가 없다)

#### 위치 설정

=> 가로 위치와 세로 위치를 설정

ex) `box-shadow: 40px 10px;` 

#### 그림자 색 설정

=> 속성에 추가로 색 써주면 된다 

ex) `box-shadow: 40px 10px #4d9fff;` 

#### 흐림 정도

=> 가로, 세로 위치 뒤에 추가로 설정(기본값은 0px)

ex) `box-shadow: 40px 10px 10px #4d9fff;` 

#### 그림자 크기

=> 흐림 값 이후에 추가로 설정

ex) `box-shadow: 40px 10px 10px 20px #4d9fff;` 
