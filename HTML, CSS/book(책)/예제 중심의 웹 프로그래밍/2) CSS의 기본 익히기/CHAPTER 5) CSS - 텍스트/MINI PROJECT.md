# MINI PROJECT

### CSS로 텍스트 꾸미기

* 식물원 웹 페이지 만들기



#### 문제

1. 'Botanic Gardem'의 글자 색상은 보라색, 글꼴은 Arial, 크기는 60px로 지정하고 그림자 넣기, 가운데 정렬을 하시오. '꿈속의 정원 같은 봄빛 식물원'의 글자 색상은 초록색, 크기는 30px로 지정하고 밑줄을 나타내시오.
2. '봄빛 식물원은 ~ 선사합니다.' 글자의 크기는 20px, 스타일은 이탤릭체로 지정하시오. '봄빛 식물원은 ~ 있습니다.'의 글자 색상은 짙은 회색(#444444), 글꼴은 돋움, 스타일은 이탤릭체, 크기는 14px, 줄 간격은 150%로 지정하시오.

#### 답

1. 

```css
		h1{
            color: purple;
            font-family: 'Arial';
            font-size: 60px;
            text-align: center;
            text-shadow: 3px 3px 4px #444444;
        }
        h2{
            color: green;
            font-size: 30px;
            text-decoration: underline;
        }
```

2.

```cSS
		h3{
            font-size: 20px;
            font-style: italic;
        }
        p{
            color: #444444;
            font-family: '돋움';
            font-size: 14px;
            font-style: italic;
            font-weight: 150%;sd
        }
```
