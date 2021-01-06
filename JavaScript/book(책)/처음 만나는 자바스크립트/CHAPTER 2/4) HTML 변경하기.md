# 출력의 기본

## HTML 변경하기

### document 객체의 getElementById 메소드

#### document 객체

: 브라우저에 표시되는 HTML이나 그와 관련된 CSS를 조작하기 위한 기능이 다수 포함돼 있다

#### getElementById 메소드

: () 안에 **지정한 id의 요소**를 통째로 가져온다 

> id는 문자열로 지정해야 하므로 작은따옴표(')로 감싸서 기술한다

[ 형식 ] => **document.getElementById(id명)**

##### 주의할점

자바스크립트는 **알파벳 대문자, 소문자를 구분**하여 다른 글자로 인식된다, 그러므로 정확히 구분해서 작성해야 한다. 

> document.getElementById()의 바른 작성법과 틀린 작성법
>
> O document.getElementById('choice')
>
> X document.getElementbyid('choice')
>
> 

### 요소의 콘텐츠를 변경하는 textContent

[ 형식 ] => **document.getElementById(id명).textContent = 변경하고 싶은 문자열;**

ex) document.getElementById('choice').textContent = '테스트입니다';

#### 요소의 콘텐츠 읽어오기

가져온 HTML 요소의 콘텐츠를 변경하는 것이 아니라 읽을 수도 있다. 

ex)

```html
<script>
document.getElementById('choice').textContent = new Date();
console.log(document.getElementById('choice').textContent);
</script>
```

#### 프로퍼티

##### 객체의 상태를 나타낸다

window나 document 같은 **모든 객체는 메소드 외에도 '프로퍼티(property)'를 가지고** 있다 

> 프로퍼티는 객체가 가지고 있는 값을 읽거나 변경할 수가 있다

예를 들어, '00 객체의 □ □ 를 ☆☆로 한다'라고 설명하는 경우

* □ □ 는 '프로퍼티 이름'
* ☆☆를 '프로퍼티 값'

> 일반적으로 프로퍼티 값은 읽고/쓰기가 가능하다(읽기 전용인 프로퍼티도 존재한다)

