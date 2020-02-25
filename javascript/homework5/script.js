let tabs = document.body.querySelector('ul');
let tabsTitle = document.body.querySelectorAll('.tabs-title');
let tabsContent = document.body.querySelectorAll('.tabs-content>li');

tabs.addEventListener('click', function (e){
   e.target.classList.add('active');
   for (let i = 0; i < tabsTitle.length; i++) {
      if (e.target != tabsTitle[i]) {
         tabsTitle[i].classList.remove('active');
         tabsContent[i].classList.add('hidden');
      } else {
         tabsContent[i].classList.remove('hidden');
      }      
   }
});
