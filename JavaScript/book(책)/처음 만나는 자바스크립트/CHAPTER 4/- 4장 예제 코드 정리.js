// 4-1) 폼의 입력 내용 가져오기
// 1. 우선은 이벤트 테스트
document.getElementById('form').onsubmit = function() {
    console.log('클릭했습니다');
};
// 2. 입력 내용을 읽어서 출력하기
document.getElementById('form').onsubmit = function(){
    var search = document.getElementById('form').word.value;
    document.getElementById('output').textContent = '[' + search + '] 검색 중...';
    return false;
};

// 4-2) 알기 쉽게 날짜 / 시간 표시하기
// 1. 연/월/일과 시간 표시하기
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();

var output = year + '/' + (month + 1) + '/' + data + ' ' + hour + ':' + min;
document.getElementById('time').textContent = output;
// 2. 12시간 표기법으로 변경
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var ampm = ' ';
if(hour<12){
    ampm = 'a.m.';
} else{
    ampm = 'p.m.';
}

var output = year + '/' + (month + 1) + '/' + data + ' ' + (hour % 12) + ':' + min + ampm;
document.getElementById('time').textContent = output;

// 4-3) '0'을 붙여서 자릿수 맞추기
// 1. 함수 작성하기
var addZero = function(num, digit){
    var numString = String(num);
    while(numString.length < digit){
        numString = '0' + numString;
    }
    return numString;
}

console.log(addZero(1, 2));
// 2. 곡목 리스트에 번호 붙이기
var addZero = function(num, digit){
    var numString = String(num);
    while(numString.length < digit){
        numString = '0' + numString;
    }
    return numString;
}

var songs = [
    'Stella By Starlight',
    'Satin Doll',
    'Caravan',
    'Besame Mucho',
    'My favorit Thing'
];
for(var i = 0; i<songs.length; i++){
    var paragraph = document.createElement('p');
    paragraph.textContent = addZero(i + 1, 2) + '. ' + songs[i];
    document.getElementById('list').appendChild(paragraph);
}

// 4-4) 소수점 자릿수 버리기
// 1. 사칙연산 이외의 계싼
var point = function(num, digit){
    var time = Math.pow(10, digit);
    return Math.floor(num * time) / time;
}
document.getElementById('output').textContent = point(Math.PI, 2);