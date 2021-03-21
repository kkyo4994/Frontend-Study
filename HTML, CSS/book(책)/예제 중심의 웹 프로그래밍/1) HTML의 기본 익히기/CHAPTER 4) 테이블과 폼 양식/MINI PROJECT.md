# MINI PROJECT

### 표

* 테이블 태그를 이용하여 수강 안내 페이지 만들기



#### 문제

1. `<h3>`태그와 `<table>`, `<tr>`, `<th>` 태그를 이용하여 만드시오.
2. colspan 속성을 이용하여 만드시오.



#### 답

1. 

```html
<h3>영어회화 수강 안내</h3>
    <table>
        <tr>
            <th>수강 레벨</th>
            <th>코스 A</th>
            <th>코스 B</th>
            <th>수강기간</th>
            <th>세부내용보기</th>
        </tr>
```

2.

```html
<tr>
            <td>레벨 1</td>
            <td>Side by Side 1</td>
            <td>American Headway 1</td>
            <td>1개월</td>
            <td>세부내용보기</td>
        </tr>
        <tr>
            <td>레벨 2</td>
            <td>Side by Side 2</td>
            <td>American Headway 2</td>
            <td>1개월</td>
            <td>세부내용보기</td>
        </tr>
        <tr>
            <td>레벨 3</td>
            <td>Side by Side 3</td>
            <td>American Headway 3</td>
            <td>1개월</td>
            <td>세부내용보기</td>
        </tr>
        <tr>
            <td>레벨 4</td>
            <td colspan="2">Exploring English 1</td>
            <td>2개월</td>
            <td>세부내용보기</td>
        </tr>
        <tr>
            <td>레벨 5</td>
            <td colspan="2">Exploring English 2</td>
            <td>2개월</td>
            <td>세부내용보기</td>
        </tr>
    </table>
```



### 회원 가입

* 다양한 폼 양식을 이용하여 회원 가입 양식 페이지 만들기



#### 문제

1. `<h3>`태그와 `<form>`, `<table>`, `<tr>`, `<td>` 태그를 이용하여 만드시오. 
2. `<td>`, `<td>`, `<input>`, `<select>`, `<option>` 태그를 이용하여 만드시오.
3. `<td>`, `<td>`, `<input>`, `<select>`, `<option>`, `<textarea>` 태그를 이용하여 만드시오.



#### 정답

1. 

```html
<h3>회원 가입 양식</h3>
    <form>
        <table>
            <tr>
                <td>- 아이디</td>
                <td><input type="text"></td>
            </tr>
```

2.

```html
<tr>
                <td>- 비밀번호</td>
                <td><input type="password"></td>
            </tr>
            <tr>
                <td>- 비밀번호 확인</td>
                <td><input type="password"></td>
            </tr>
            <tr>
                <td>- 이름</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>- 성별</td>
                <td><input type="radio" name="gender">여성 <input type="radio" name="gender">남성</td>
            </tr>
            <tr>
                <td>- 전화번호</td>
                <td>
                    <select name="">
                        <option>02</option>
                        <option>031</option>
                        <option>033</option>
                        <option>062</option>
                    </select>
                    - <input type="text"> - <input type="text">
                </td>
            </tr>
```



3.

```html
 <tr>
                <td>- 이메일</td>
                <td><input type="text">@
                    <select name="">
                        <option>선택</option>
                        <option>naver.com</option>
                        <option>daum.net</option>
                        <option>gmail.com</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>- 자기소개</td>
                <td><textarea cols="50" rows="5"></td>
            </tr>
        </table>
    </form>
```

