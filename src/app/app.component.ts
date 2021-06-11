import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artızeka Yayınları';
  
  constructor(private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'artızeka, artızeka Yayınları, yayın, kitap, kütüphane, ekütüphane, artizeka, yayınevi, pdf, kitappdf'},
      {name: 'description', content: 'Artızeka Yayınlarının orjinal kitaplarını buradan inceleyebilirsiniz.'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Caner Demirkaya'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Artızeka Yayınları'},
      {property: 'og:description', content: 'Artızeka Yayınlarının orjinal kitaplarını buradan inceleyebilirsiniz.'},
      {property: 'og:image', content: 'https://www.artizekaekutuphane.com/assets/images/artizekaweblogo.png'},
      {property: 'og:url', content: 'https://www.artizekaekutuphane.com'},

      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:title', content: 'Artızeka Yayınları'},
      {property: 'twitter:description', content: 'Artızeka Yayınlarının orjinal kitaplarını buradan inceleyebilirsiniz.'},
      {property: 'twitter:image', content: 'https://www.artizekaekutuphane.com/assets/images/artizekaweblogo.png'},
      {property: 'twitter:url', content: 'https://www.artizekaekutuphane.com'}
    ]);
  }
}
