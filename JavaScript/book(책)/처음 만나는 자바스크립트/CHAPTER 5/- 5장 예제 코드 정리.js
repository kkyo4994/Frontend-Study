// 5-1) 카운트다운 타이머
// 1. 남은 시간을 계산하는 함수
var countdow = function(due){
    var now = new Date();

    var rest = due.getTime() - now.getTime();
    var sec = Math.floor(rest/1000%60);
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) %24;
    var days = Math.floor(rest / 1000 / 60 / 60 /24);
    var count = [days, hours, min, sec];

    return count;
}

var goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
var counter = countdown(goal);
var time = counter[1] + '시간' + counter[2] + '분' + counter[3] + '초';
document.getElementById('timer').textContent = time;
// 2. 1초 간격으로 재계산하기
var countdow = function(due){
    var now = new Date();

    var rest = due.getTime() - now.getTime();
    var sec = Math.floor(rest/1000%60);
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) %24;
    var days = Math.floor(rest / 1000 / 60 / 60 /24);
    var count = [days, hours, min, sec];

    return count;
}

var goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
var recalc = function(){
    var counter = countdown(goal);
    var time = counter[1] + '시간' + counter[2] + '분' + counter[3] + '초';
    document.getElementById('timer').textContent = time;
    refresh();
}

var refresh = function(){
    setTimeout(recalc, 1000);
}
// 3. 응용편 : 표시 방법을 바꾸어 보자


//5-2) 풀다운 메뉴로 페이지 이동하기
// 1. 선택한 시점에 페이지 이동하기
document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value;
}
// 2. 처음 선택 항목 설정하기
var lang = document.getElementById('html').lang;

var opt;
if(lang == 'ko'){
    opt = document.querySelector('option[value="index.html"]');
} else if(lang == 'en'){
    opt = document.querySelector('option[value="index-en.html"]');
}
opt.selected = ture;

//5-3) 설문지 응답은 한 번만!
// 1. 쿠키 읽기, 쓰기, 삭제
document.getElementById('form').onsubmit = function(){
    if(Cookies.get('answerd') === 'yes'){
        window.alert('이미 응답했습니다. 설문지 응답은 한 번만 가능합니다.');
        return false;
    } else{
        Cookies.set('answerd', 'yes', {expires: 7});
    }
};
document.getElementById('remove').onclick = function(){
    Cookies.remove('answered');
};

// 5-4) 사진 변경하기
// 1) 새로운 HTML 속성 사용하기
var thumbs = document.querySelectorAll('.thumb');
for(var i = 0; i< thumbs.length; i++){
    thumbs[i].onclick = function(){
        console.log(this.CDATA_SECTION_NODE.image);
    };
}
// 2. 사진 변경하기
var thumbs = document.querySelectorAll('.thumb');
for(var i = 0; i< thumbs.length; i++){
    thumbs[i].onclick = function(){
        document.getElementById('bigimg').src = this.dataset.image;
    };
}

// 5-5) 슬라이드쇼
// 1) 버튼 클릭으로 사진 변경하기
var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
var current = 0;
var changeImage = function(num){
    if(current + num >= 0 && current + num < images.length){
        current += num;
        document.getElementById('main_image').src = images[current];
    }
};

document.getElementById('prev').onclick = function(){
    changeImage(-1);
};
document.getElementById('next').onclick = function(){
    changeImage(1);
};
// 2) 몇 번째 사진인지 표시하기
var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
var current = 0;
var pageNum = function(){
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}
var changeImage = function(num){
    if(current + num >= 0 && current + num < images.length){
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
};

pageNum();

document.getElementById('prev').onclick = function(){
    changeImage(-1);
};
document.getElementById('next').onclick = function(){
    changeImage(1);
};