// 3-1) 확인 다이얼로그 박스 표시하기
// 1. 확인 다이얼로그 박스를 사용하기
console.log(window.confirm('게임 시작! 준비됐나요?'));
// 2. 클릭한 버튼에 따라 메세지 변경
if(window.confirm('게임 시작! 준비됐나요?')){
    console.log('게임을 시작했습니다.');
} else{
    console.log('게임을 종료합니다.');
}

// 3-2) 입력 내용에 따라 동작 변경하기
// 1. 클릭한 버튼의 결과를 변수에 저장
let answer = window.prompt('도움말을 보시겠습니까?');
console.log(answer);
// + 변수 안의 데이터 변경하기
let answer = 'yes';
console.log(answer);
answer = 'no';
console.log(answer);
// 2. 변수에 저장된 내용으로 동작을 바꾸기
let answer = window.prompt('도움말을 보시겠습니까?');
if(answer === 'yes'){
    window.alert('탭키로 점프해서 장해물을 피합니다.');
}

// 3-3) 동작의 범위를 넓히기
// 1. no인지 판단
let answer = window.prompt('도움말을 보시겠습니까?');
if(answer === 'yes'){
    window.alert('탭키로 점프해서 장해물을 피합니다.');
} else if(answer === 'no'){
    window.alert('게임 진행 중...');
} else {
    window.alert('yes 또는 no로 대답해 주세요.');
}

// 3-4) 숫자 맞히기 게임
// 1. 다양한 비교 연산자 사용
let number = Math.floor(Math.random()*6);
let answer = parseInt(window.prompt('숫자 맞히기 게임. 0~5의 숫자를 입력하세요'));
let message;
if(answer === number){
    message = '정답!';
} else if(answer < number){
    message = '땡! 더 큰 숫자입니다!';
} else if(answer > number){
    message = '땡! 더 작은 숫자입니다!';
} else{
    message = '0~5의 숫자를 입력하세요';
}
window.alert(message);

// 3-5) 시간에 따라 다른 메시지 표시하기
// 1. 두 가지 이상의 조건식을 이용해서 하나의 조건 만들기
let hour = new Date().getHours();
if(hour >= 19 && hour < 21){
    window.alert('도시락 30% 할인');
} else if(hour === 9 || hour === 15){
    window.alert('도시락 하나 사면 하나 공짜!');
} else {
    window.alert('도시락 하나 사세요.');
}

// 3-6) 1장, 2장, 3장... 이라고 출력
// 1. 반복을 사용하기
for(let i=1; i<=10; i++){
    console.log(i);
}
// 2. 문자열 연결하기
for(let i=1; i<=10; i++){
    console.log(i + '장');
}

// 3-7) 콘솔로 몬스터를 물리치자
// 1. while을 사용하기
let enemy = 100;
let attack;
window.alert('대전 시작!');
while(enemy > 0){
    attack = Math.floor(Math.random()*30)+1;
    console.log('몬스터에게' + attack + '의 피해를 입혔다!');
    enemy = enemy - attack;
}
console.log('몬스터를 물리쳤다.');

// 3-8) 세금 포함 가격 계산하기
// 1. 함수 만들기 및 호출하기
let total = function(price){
    let tax = 0.08;
    return price + price * tax;
}
console.log('커피 기계의 가격은' + total(8000) + '원(부가세 포함)입니다.');
// 2. HTML에 출력하기
let total = function(price){
    let tax = 0.08;
    return price + price * tax;
}
console.log('커피 기계의 가격은' + total(8000) + '원(부가세 포함)입니다.');
document.getElementById('output').textContent = '커피 기계의 가격은 ' + total(8000) + '원(부과세 포함)입니다.';

