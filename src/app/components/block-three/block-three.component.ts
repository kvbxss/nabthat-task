import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-block-three',
  templateUrl: './block-three.component.html',
  styleUrls: ['./block-three.component.scss'],
})
export class BlockThreeComponent implements OnInit {
  content: string = '';

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.content$.subscribe((content) => {
      this.content = content;
    });
  }
}
