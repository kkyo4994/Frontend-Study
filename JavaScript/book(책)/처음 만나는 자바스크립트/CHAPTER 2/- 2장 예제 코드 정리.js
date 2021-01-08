// 2-3) 경고 다이얼로그 박스 표시하기
window.alert('애플리케이션 연동을 완료했습니다!');
// 웹에 들어가자마자 연동이 완료되었다는 박스가 생성된다

// 2-4) HTML 변경하기
// 1. 요소 가져오기
console.log(document.getElementById('choice'));
// 2. 가져온 요소의 콘텐츠 변경
document.getElementById('choice').textContent = new Date();
// 텍스트가 현재 일시로 변경된다
// + 요소의 콘텐츠 읽어 오기 
document.getElementById('choice').textContent = new Date();
console.log(document.getElementById('choice').textContent);
// 가져온 요소의 콘텐츠가 콘솔에 출력된다 == 현재 일시로 변경