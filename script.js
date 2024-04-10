var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 500,
    slideMargin = 35,
    nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin +'px';

    function moveSlide(num){
        slides.style.left = -num * 530 + 'px';
        currentIdx = num;
    }
    nextBtn.addEventListener('click', function(){
        if(currentIdx <slideCount - 3){
            moveSlide(currentIdx + 1);
        }else{
            moveSlide(0);
        }
    });
    prevBtn.addEventListener('click', function(){
        if(currentIdx > 0){
            moveSlide(currentIdx - 1);
        }else{
            moveSlide(slideCount - 3);
        }
    });
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".page-top").style.top = "0"; /* 스크롤을 올릴 때는 상단바를 보이도록 함 */
    }
    prevScrollpos = currentScrollPos;
  }

let pageDownButton = document.querySelector(".page-down-button");

pageDownButton.addEventListener('click', function(ev) {
    ev.preventDefault();
    // 스크롤하려는 대상의 ID를 "aboutme-section"으로 지정합니다.
    document.getElementById('aboutme-section').scrollIntoView({ behavior: "smooth", block: "start" });
});

let naviIcon = document.getElementById("naviIcon");
let copyright = document.getElementById("copyright");

// 아이콘을 클릭할 때마다 토글되도록 이벤트 리스너 추가
naviIcon.addEventListener('click', function() {
    if (copyright.style.display === "block") {
        // 저작권 정보가 표시되어 있다면 숨김
        copyright.style.display = "none";
        // 아이콘을 원래대로 회전시킴
        naviIcon.style.transform = "rotate(0deg)";
    } else {
        // 저작권 정보가 표시되어 있지 않다면 보이도록 함
        copyright.style.display = "block";
        // 아이콘을 90도 회전시킴
        naviIcon.style.transform = "rotate(90deg)";
    }
});
