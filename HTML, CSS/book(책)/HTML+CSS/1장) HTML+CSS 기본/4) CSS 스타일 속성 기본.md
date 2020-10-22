# CSS 스타일 속성 기본

## CSS 단위 

#### 크기 단위

* % => 백분율 단위

: 기본 설정된 크기에서 상대적으로 크기를 지정 (100% = 초기)

* em => 배수 단위

: 1배 = 1em = 100%

* px => 픽셀

: 절대적으로 크기를 지정할 때 사용

#### 색상 단위

* #000000 => HEX 코드 단위
* rgb(red, green, blue) => RGB 색상 단위 

#### URL 단위

=> 이미지 파일이나 폰트 파일을 불러올 때 사용 -> url() 함수 내부에 경로를 입력

```html
/* 현재 폴더의 Desert.jpg */
background-image : url('Desert.jpg');

/* 현재 폴더 내부에 있는 Other 폴더의 Desert.jpg */
background-image : url('Other/Desert.jpg');

/* 루트 폴더의 Desert.jpg */
/* 루트 폴더의 개념은 서버를 알아야 합니다. */
background-image : url('/Desert.jpg');
```

