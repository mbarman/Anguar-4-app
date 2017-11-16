import { Component, AfterViewInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
 declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  constructor(private _menuService: MenuService) {}

  menuItems: any = [];

  ngAfterViewInit() {

     this.menuItems = this._menuService.getMainMenu();
   /* (function ($)
    {*/
      $.fn.menumaker = function (options:any) {
        var cssmenu = $(this), settings = $.extend({
          format: "dropdown",
          sticky: false
        }, options);
        return this.each(function () {
          $(this).find(".button").on('click', function () {
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) {
              mainmenu.slideToggle().removeClass('open');
            }
            else {
              mainmenu.slideToggle().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });
          cssmenu.find('li ul').parent().addClass('has-sub');
          let multiTg = function () {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function () {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').slideToggle();
              }
              else {
                $(this).siblings('ul').addClass('open').slideToggle();
              }
            });
          };
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
          let resizeFix = function () {
            var mediasize = 1000;
            if ($(window).width() > mediasize) {
              cssmenu.find('ul').show();
            }
            if ($(window).width() <= mediasize) {
              cssmenu.find('ul').hide().removeClass('open');
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
        });
      };
    //})(jQuery);

   // (function ($) {
      $(document).ready(function () {
        $("#cssmenu").menumaker({
          format: "multitoggle"
        });
      });
   // })(jQuery);
  }

}
