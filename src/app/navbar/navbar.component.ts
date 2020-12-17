import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public url: string;

  public icons: Array<String>;

  constructor(private router: Router) {
    this.icons = new Array();
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // In the home section, the navbar elements vary a lot
        if (event.url == '/home' ||
          event.url == '/about' ||
          event.url == '/contact' ||
          event.url == '/blog-en' ||
          event.url == '/arias-en' ||
          event.url == '/charua-en' ||
          event.url == '/macias-en' ||
          event.url == '/prum-en' ||
          event.url == '/attorneys' ||
          event.url == '/civil-en' ||
          event.url == '/criminal' ||
          event.url == '/property' ||
          event.url == '/privacy' ||
          event.url == '/telecomunications' ||
          event.url == '/pharmaceutical' ||
          event.url == '/technology' ||
          event.url == '/litigation' ||
          event.url == '/corporative' ||
          event.url == '/administartive' ||
          event.url == '/trade' ||
          event.url == '/merge' ||
          event.url == '/realestate' ||
          event.url == '/write') {
          $('.esp').css('display', 'none');
          $('.ing').css('display', 'block');
        } else {
          $('.ing').css('display', 'none');
          $('.esp').css('display', 'block');
        }
      }
    });
  }


  ngOnInit() {
    $('.button-collapse').sideNav();
  }
}
