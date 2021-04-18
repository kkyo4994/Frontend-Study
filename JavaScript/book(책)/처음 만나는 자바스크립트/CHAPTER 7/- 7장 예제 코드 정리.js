// 7-1)  최신 기사를 목록으로 표시하기
// 1. RSS 피드 불러오기
$(document).ready(function(){
    var rssURL = "http://jpub.tistroy.com/rss";
    $.ajax({
        url : 'cdxml.php',
        type : 'GET',
        dataType : 'xml',
        data : {
            url : rssURL
        }
    })
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        window.alert('데이터 불러오기에 실패했습니다.');
    });
});
// 2. 기사 제목 표시하기
$(document).ready(function(){
    var rssURL = "http://jpub.tistroy.com/rss";
    $.ajax({
        url : 'cdxml.php',
        type : 'GET',
        dataType : 'xml',
        data : {
            url : rssURL
        }
    })
    .done(function(data){
        $(data).find('channel item').each(function(){
            var itemTitle = $(this).find('title').text();
            var permaLink = $(this).find('link').text();
            $('#latest').append(
                $('<li></li>').append(
                    $('<a></a>')
                    .attr('href', permaLink)
                    .text(itemTitle)
                )
            )
        });
    })
    .fail(function(){
        window.alert('데이터 불러오기에 실패했습니다.');
    });
});
// 3. 업데이트 날짜 표시하기
$(document).ready(function(){
    var rssURL = "http://jpub.tistroy.com/rss";
    $.ajax({
        url : 'cdxml.php',
        type : 'GET',
        dataType : 'xml',
        data : {
            url : rssURL
        }
    })
    .done(function(data){
        $(data).find('channel item').each(function(){
            var itemTitle = $(this).find('title').text();
            var permaLink = $(this).find('link').text();
            var pubText = $(this).find('pubDate').text();
            var pubDate = new Date(pubText);
            var dateString = '(' + pubText.getFullYear() + '/' +(pubDate.getMonth() + 1) + '/' +pubData.getFullYear() + ')';
            $('#latest').append(
                $('<li></li>').append(
                    $('<a></a>')
                    .attr('href', permaLink)
                    .text(itemTitle)
                )
                .append(dataString)
            )
        });
    })
    .fail(function(){
        window.alert('데이터 불러오기에 실패했습니다.');
    });
});

// 7-2) 웹 API를 사용해 보자
// 2. 데이터 다운로드 하기
$(document).ready(function(){
    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
    var photoData;

    var getData = function(url){
        $.ajax({
            url : url,
            dataType : 'jsonp',
            data : {
                access_token : '<접속 토큰>',
                count : 12
            }
        })
        .done(function(data){
            photoData = data;
            console.dir(photoData);
        })
        .fail(function(){
            $('#gallery').text(textStatus);
        })
    }
    getData(dataURL);
})
// 3. 사진 표시하기
$(document).ready(function(){
    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
    var photoData;

    var getData = function(url){
        $.ajax({
            url : url,
            dataType : 'jsonp',
            data : {
                access_token : '<접속 토큰>',
                count : 12
            }
        })
        .done(function(data){
            photoData = data;
            console.dir(photoData);

            $(photoData.data).each(function(){
                var caption = '';
                if(this.caption){
                    caption = this.caption.text;
                }
                $('#gallery').append(
                    $('<div class="img_block"></div>')
                    .append(
                        $('<a></a>')
                        .attr('href', this.link)
                        .attr('target', '_blank')
                        .append(
                            $('<img>').attr('src', this.images.low_resolution.url)
                        )
                    )
                    .append(
                        $('<p class="caption"></p>').text(caption + '🖤' + this.likes.count)
                    )
                );
            });
        })
        .fail(function(){
            $('#gallery').text(textStatus);
        })
    }
    getData(dataURL);
})
// 4. 페이지 매김 구현하기
$(document).ready(function(){
    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
    var photoData;

    var getData = function(url){
        $.ajax({
            url : url,
            dataType : 'jsonp',
            data : {
                access_token : '<접속 토큰>',
                count : 12
            }
        })
        .done(function(data){
            photoData = data;
            console.dir(photoData);
        })
        .fail(function(){
            $('#gallery').text(textStatus);
        })
    }
    getData(dataURL);
})
// 3. 사진 표시하기
$(document).ready(function(){
    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
    var photoData;

    var getData = function(url){
        $.ajax({
            url : url,
            dataType : 'jsonp',
            data : {
                access_token : '<접속 토큰>',
                count : 12
            }
        })
        .done(function(data){
            photoData = data;
            console.dir(photoData);

            $(photoData.data).each(function(){
                var caption = '';
                if(this.caption){
                    caption = this.caption.text;
                }
                $('#gallery').append(
                    $('<div class="img_block"></div>')
                    .append(
                        $('<a></a>')
                        .attr('href', this.link)
                        .attr('target', '_blank')
                        .append(
                            $('<img>').attr('src', this.images.low_resolution.url)
                        )
                    )
                    .append(
                        $('<p class="caption"></p>').text(caption + '🖤' + this.likes.count)
                    )
                );
            });
            if($('#padination').children().length === 0){
                $('#pagination').append(
                    $('<a class="next"></a>').attr('href', '#').text('더보기').on('click', function(e){
                        e.preventDefault();
                        if(photoData.pagination.next_url){
                            getData(photoData.pagination.next_url);
                        }
                    })
                );
            }
            if(!photoData.padination.next_url){
                $('.next').remove();
            }
        })
        .fail(function(){
            $('#gallery').text(textStatus);
        })
    }
    getData(dataURL);
})