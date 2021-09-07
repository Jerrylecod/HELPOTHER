 const toggle = document.querySelector('.menubutton');
 const menud = document.querySelector('.submenu');
 const outbutton = document.querySelector('.image');


 $(document).ready(() => {
     //  deroulement du sous menu en appuyant sur le bouton
     $(toggle).click(function() {
         menud.style.visibility = 'visible';
     });
     //  sous menu replier
     $(outbutton).click(function() {
         menud.style.visibility = 'hidden';
     });
 });