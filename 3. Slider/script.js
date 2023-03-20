let images =[

  {
  link: 'Rostov-on-Don, Admiral',
  url:  'images/1.jpg', 
  city: 'Rostov-on-Don LCD Admiral',
  area: '81 m2',
  time: '3.5 months'
},
{
  link: 'Sochi Thieves',
  url:  'images/2.jpg',
  city: 'Sochi Thieves',
  area: '105 m2',
  time: '4 months'
},
{
  link: 'Rostov-on-Don Patriotic',
  url:  'images/3.jpg',
  city: 'Rostov-on-Don Patriotic',
  area: '93 m2',
  time: '3 months'
}];

function initSlider() {
  
  if (!images || !images.length) return;
  
  let sliderImages = document.querySelector(".slider_image");
  let sliderDots = document.querySelector(".slider_dots");  
  let sliderArrows = document.querySelector(".slider_arrows");
  let sliderCity = document.querySelector(".city");
  let sliderArea = document.querySelector(".area");
  let sliderTime = document.querySelector(".time");
  let sliderLink = document.querySelector(".div-2_list");

  initImages();
  initArrows();
  initDots();
  initInfo();
  initLinks();

      function initImages(){
        images.forEach((_image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" 
          style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      }

      function initArrows() {
        sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }

      function initDots() {
        images.forEach((_image, index) => {
          let dot = `<div class="slider_dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider_dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }
      
      function initInfo() {
        let cityDiv = `<div class="slider_city">${images[0].city} </div>`;
        sliderCity.innerHTML += cityDiv;

        let areaDiv = `<div class="slider_area">${images[0].area} </div>`;
        sliderArea.innerHTML += areaDiv;

        let timeDiv = `<div class="slider_time">${images[0].time} </div>`;
        sliderTime.innerHTML += timeDiv;
      }

      function initLinks() {
        images.forEach((_image, index) => {
          let link = `<a class="slider_link n${index} ${index === 0? "active" : ""}" href="#" data-index="${index}">${_image.link}</a>`;
          sliderLink.innerHTML += link;
        });
        sliderLink.querySelectorAll(".slider_link").forEach(link => {
          link.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          });
        });
      }

      function moveSlider(num) {

        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        sliderLink.querySelector(".active").classList.remove("active");
        sliderLink.querySelector(".n" + num).classList.add("active");

        changeInfo(num);
       }
       
      function changeInfo(num) {
        if (!images[num].city) return;
        let city = sliderCity.querySelector(".slider_city");
        city.innerText = images[num].city;

        if (!images[num].area) return;
        let area = sliderArea.querySelector(".slider_area");
        area.innerText = images[num].area;

        if (!images[num].time) return;
        let time = sliderTime.querySelector(".slider_time");
        time.innerText = images[num].time;
      }
}

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });


