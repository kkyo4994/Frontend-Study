// 6-1) 열렸다 닫혔다 하는 내비게이션 메뉴
// 1. 제이쿼리의 기본
$(document).ready(function(){
    $('.submenu h3').on('click', function(){
        $(this).next().toggleClass('hidden');
    })
});

// 6-2) 박스 열고 닫기
// 1. 애니메이션 기능 사용
$(document).ready(function(){
    $('#box_bth').on('click', function(){
        $('box').slideToggle();
    });
});

// 6-3) 공석 상황 확인
// 1. Ajax와 데이터 활용
$(document).ready(function(){
    // 파일 읽기
    $.ajax({url : 'data.json', dataType: 'json'})
    .done(function(data){
        $(data).each(function(){
            if(this.crowded === 'yes'){
                var idName = '#' + this.id;
                $(idName).find('.check').addClass('crowded');
            }
        });
    })
    .fail(function(){
        window.alert('읽기 오류');
    });
    // 클릭하면 공석 상황 표시
    $('.check').on('click', function(){
        if($(this).hasClass('crowded')){
            $(this).text('약간의 공석').addClass('red');
        } else{
            $(this).text('공석이 있습니다.').addClass('green');
        }
    });
});