import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.scss'],
})
export class BlockTwoComponent {
  constructor(private contentService: ContentService) {}

  replaceContent() {
    this.contentService.replaceContent();
  }

  appendContent() {
    this.contentService.appendContent();
  }
}
