
/* 
    //문서의 DOM내용을 전부 읽은 후 함수를 실행
    자바스크립트
    document.addEventListener('DOMContentLoaded', function () {});

    제이쿼리
    $(document).ready(function()){};
    $(function()){};

*/

document.addEventListener('DOMContentLoaded', function () {

    const yArea = document.querySelector('.yy'),
        oArea = document.querySelector('.mo'),
        dArea = document.querySelector('.dd'),
        wArea = document.querySelector('.we'),
        hArea = document.querySelector('.hh'),
        mArea = document.querySelector('.mm'),
        sArea = document.querySelector('.ss');

    setInterval(timer, 1000);

    function timer() {

        // 날짜와 시간 객체 생성
        let d = new Date();

        // 년(yyyy)
        yArea.innerHTML = d.getFullYear() + '년';
        // 월(mm): 0(1월) ~ 11(12월)
        oArea.innerHTML = d.getMonth() + 1 + '월';
        // 일(dd)
        dArea.innerHTML = d.getDate() + '일';
        // 요일(week): 0(일) ~ 6(토)
        // if를 사용하여 요일을 일요일 ~ 토요일까지 문자열로 표시하기

        let week = d.getDay();

        if (week === 0) {
            week = '일요일';
        } else if (week === 1) {
            week = '월요일';
        } else if (week === 2) {
            week = '화요일';
        } else if (week === 3) {
            week = '수요일';
        } else if (week === 4) {
            week = '목요일';
        } else if (week === 5) {
            week = '금요일';
        } else {
            week = '토요일';
        }

        wArea.innerHTML = week;

        let hh = d.getHours();
        // 13 ~ 23
        if (hh >= 13) {
            hh = 'PM ' + (hh - 12) + '시';
            // 12
        } else if (hh >= 12) {
            hh = 'PM ' + hh + '시';
            // 10 ~ 11
        } else if (hh >= 10) {
            hh = 'AM ' + hh + '시';
            // 0 ~ 9
        } else {
            hh = 'AM 0' + hh + '시';
        }

        hArea.innerHTML = hh;

        let mm = d.getMinutes();
        let ss = d.getSeconds();

        if (mm < 10) {
            mm = '0' + mm;
        }
        if (ss < 10) {
            ss = '0' + ss;
        }

        mArea.innerHTML = mm + '분';
        sArea.innerHTML = ss + '초';

    }

});