# HTML을 변경하는 또 다른 방법

**document 객체의 write 메소드를 사용**하는 방법이다

### document 객체의 write 메소드를 사용한 예

```html
<script>
document.write(new Date());
</script>
```

- write 메소드를 사용하는 경우, </body> 앞이 아닌 필요한 위치에 기술한다

### write 메소드

: () 안에 지정한 문자열 등을 해당 태그 위치에 출력하는 메소드이다