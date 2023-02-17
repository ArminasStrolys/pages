import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'El tigre',
      url: 'https://files.worldwildlife.org/wwfcmsprod/images/male_tiger_Kanha_National_Park_India/story_full_width/18hri8wuqv_Medium_WW2149666_1_.jpg',
    },
    {
      title: 'Birdie',
      url: 'https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2022-08/EarlyRelease2_AlexBoard_WildIsles_Skomer_011.jpg?h=829d8d48&itok=kL6C4-lj',
    },
    {
      title: 'Bojack',
      url: 'https://americanwildhorsecampaign.org/themes/awhc_19/images/default-hero.jpg',
    },
    {
      title: 'Bow-wow',
      url: 'https://a-z-animals.com/media/2021/11/Types-of-wild-dogs-header.jpg',
    },
    {
      title: 'Dinner',
      url: 'https://www.woodlandtrust.org.uk/media/3545/wild-boar-male-alamy-fj4x58-blickwinkel.jpg?center=0.327683615819209,0.42222222222222222&mode=crop&heightratio=0.5622047244094488188976377953&width=647&rnd=132078468140000000',
    },
    {
      title: 'El tigre',
      url: 'https://files.worldwildlife.org/wwfcmsprod/images/male_tiger_Kanha_National_Park_India/story_full_width/18hri8wuqv_Medium_WW2149666_1_.jpg',
    },
    {
      title: 'Birdie',
      url: 'https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2022-08/EarlyRelease2_AlexBoard_WildIsles_Skomer_011.jpg?h=829d8d48&itok=kL6C4-lj',
    },
    {
      title: 'Bojack',
      url: 'https://americanwildhorsecampaign.org/themes/awhc_19/images/default-hero.jpg',
    },
    {
      title: 'Bow-wow',
      url: 'https://a-z-animals.com/media/2021/11/Types-of-wild-dogs-header.jpg',
    },
    {
      title: 'Dinner',
      url: 'https://www.woodlandtrust.org.uk/media/3545/wild-boar-male-alamy-fj4x58-blickwinkel.jpg?center=0.327683615819209,0.42222222222222222&mode=crop&heightratio=0.5622047244094488188976377953&width=647&rnd=132078468140000000',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
