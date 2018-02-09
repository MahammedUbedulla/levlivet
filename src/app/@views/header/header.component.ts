import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  let mouse_is_inside = false;

      $('#button').hover(function() {
          mouse_is_inside = true;
      }, function() {
          mouse_is_inside = false;
      });

      $(window).mouseup(function() {
          if (!mouse_is_inside) {
              $('#content').hide();
              $('.down-caret').removeClass('rotate-180');
          }
      });

  }

  showdropdown = () => {
    $('#content').css('display', 'block');
    $('.down-caret').addClass('rotate-180');

}


}
