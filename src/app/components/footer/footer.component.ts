import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  optionsVisible = false;

  constructor(private contentService: ContentService) {}

  showOptions() {
    this.optionsVisible = !this.optionsVisible;
  }

  resetPage() {
    this.contentService.resetContent();
  }

  appendName() {
    this.contentService.appendName('Jakub Downarowicz');
  }
}
