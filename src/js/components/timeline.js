// import gsap from "gsap";
// let tl = gsap.timeline()
// let btn = document.querySelector('.hero__btn')

// gsap.from('.site-container', {
//   opacity: 0,
//   duration: 0.5
// })

// tl.from('.header', {
//   opacity: 0,
//   duration: 0.5
// }).from('.hero__title', {
//   opacity: 0,
//   y: 100,
//   duration: 0.7
// }).from('.hero__descr', {
//   opacity: 0,
//   y: 50,
//   duration: 0.7
// }, '-=0.7').from('.hero__btn', {
//   opacity: 0,
//   y: 100,
//   duration: 0.7
// })

// btn.onclick = function () {
//   tl.reverse()
// };


// const items = document.querySelectorAll('.accordion__item')

// items.forEach(el => {
//   el.addEventListener('click', (e) => {
//     let self = e.currentTarget
//     let bottomEl = el.querySelector('.accordion__bottom')

//     if (!self.classList.contains('active')) {
//       self.classList.add('active')
//       tl.to(bottomEl, {
//         duration: 0.3,
//         height: bottomEl.scrollHeight
//       })

//       tl.play()

//     } else {
//       self.classList.remove('active')
//       tl.reverse()
//     }
//   })
// })
