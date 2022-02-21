# Redux란?

: Redux는 application 전체의 상태(state)를 편리하게 관리하기 위해 사용하는 라이브러리 중 하나이다.여러개의 middleware들도 제공하며 대표적으로 logger, thunk, saga 등이 있다.


### 리덕스는 언제 쓰지?

1. 프로젝트의 규모가 큰가?
   - Yes: 리덕스
   - No: Context API
2. 비동기 작업을 자주 하게 되는가?
   - Yes: 리덕스
   - No: Context API
3. 리덕스를 배워보니까 사용하는게 편한가?
   - Yes: 리덕스
   - No: Context API 또는 MobX



### 리덕스에서 사용되는 키워드가 뭐지?

#### 액션(Action)

: 액션 객체는 type 필드를 필수적으로 가지고 있어야 한다. 그 외 값들은 개발자 마음대로 넣어줄 수 있다.

```typescript
export const GET_MYPAGE_FEED = 'MYPAGE/GET_MYPAGE_FEED' as const;
export const GET_MYPAGE_FEED_SUCCESS = 'MYPAGE/GET_MYPAGE_FEED_SUCCESS' as const;
export const GET_MYPAGE_FEED_FAILURE = 'MYPAGE/GET_MYPAGE_FEED_FAILURE' as const;
```

#### 액션 생성함수(Action Creator)

: 액션을 만드는 함수이다. 파라미터를 받아와서 액션 객체 형태로 만든다. 

```typescript
export const getMypage = createAction(GET_MYPAGE_FEED)();
export const getMypageSuccess = createAction(GET_MYPAGE_FEED_SUCCESS)<MypageResponseType>();
export const getMypageFaillure = createAction(GET_MYPAGE_FEED_FAILURE)<error>();

export type mypageActionType =
  | ReturnType<typeof getMypage>
  | ReturnType<typeof getMypageSuccess>
  | ReturnType<typeof getMypageFaillure>
```

> 액션 생성 함수는 필수적이지는 않지만, 이렇게 따로 액션 생성함수를 만드는 이유는 나중에 컴포넌트에서 더욱 쉽게 액션을 사용하기 위함이다. 

#### 리듀서(Reducer)

: 변화를 일으키는 함수이다. 리듀서는 두가지의 파라미터를 받아온다. 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다.

```typescript
const mypageReducer = (state: MypageState = initState, action: mypageActionType): MypageState => {
  switch (action.type) {
    case GET_MYPAGE_FEED_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
          .
          .
          .
      };
          .
          .
          .
      default:
      return state;
  }
};
```

> 여러개의 리듀서를 만들고 이를 합쳐서 루트 리듀서 (Root Reducer)를 만들 수 있다. (루트 리듀서 안의 작은 리듀서들은 서브 리듀서라고 부른다.)

#### 스토어(store)

: 한 애플리케이션 당 하나의 스토어를 만들게 된다. 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있다.

#### 디스패치(dispatch)

: 스토어의 내장함수 중 하나이다. 액션을 발생시키는 것이라고 이해하면 된다. dispatch라는 함수에 액션을 파라미터로 전달한다.

```typescript
  const dispatch = useDispatch();
   setType: (payload: string) => {
      dispatch(setType(payload));
    },
```



* 여기에 적은 코드는 제가 한 프로젝트에서 사용했던 코드의 일부분입니다.



> ? 이 Redux를 정리하기 위해 참고한 링크
>
> => https://react.vlpt.us/redux/01-keywords.html
> => https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt
>
> => https://velog.io/@ksh4820/%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A1%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
> => https://velog.io/@_jouz_ryul/React%EC%97%90%EC%84%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%EC%99%80-Redux
> (리덕스 코드까지 더 자세하게 알고 싶다면 마지막 링크를 추천)