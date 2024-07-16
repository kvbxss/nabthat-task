import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private initialContent = `<p>Lorem ipsum dolor sit amet...</p>`;
  private contents: string[] = [];
  private usedContent: string[] = [];
  private contentLoaded = false;

  private contentSource = new BehaviorSubject<string>(this.initialContent);
  content$ = this.contentSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadContents();
  }

  loadContents() {
    this.http.get<{ content: string }[]>('assets/data.json').subscribe({
      next: (data) => {
        this.contents = data.map((item) => item.content);
        this.contentLoaded = true;
      },
      error: (error) => {
        console.error('Error loading content:', error);
        this.contentLoaded = false;
      },
      complete: () => {
        console.log('Content loading complete');
      },
    });
  }

  replaceContent() {
    if (!this.contentLoaded) {
      alert('Content is not loaded yet. Please try again later.');
      return;
    }

    const selectedOption = (
      document.querySelector('input[name="option"]:checked') as HTMLInputElement
    ).value;
    if (selectedOption === '1') {
      this.contentSource.next(this.contents[0]);
    } else if (selectedOption === '2') {
      this.contentSource.next(this.contents[1]);
    } else {
      this.addRandomContent();
    }
  }

  appendContent() {
    if (!this.contentLoaded) {
      alert('Content is not loaded yet. Please try again later.');
      return;
    }

    const selectedOption = (
      document.querySelector('input[name="option"]:checked') as HTMLInputElement
    ).value;
    if (selectedOption === '1') {
      this.appendUniqueContent(this.contents[0]);
    } else if (selectedOption === '2') {
      this.appendUniqueContent(this.contents[1]);
    } else {
      this.addRandomContent();
    }
  }
  appendUniqueContent(content: string) {
    if (!this.usedContent.includes(content)) {
      this.usedContent.push(content);
      this.contentSource.next(this.contentSource.value + content);
    } else {
      alert('Content already exists!');
    }
  }

  addRandomContent() {
    const remainingContents = this.contents.filter(
      (content) => !this.usedContent.includes(content)
    );
    if (remainingContents.length > 0) {
      const randomContent =
        remainingContents[Math.floor(Math.random() * remainingContents.length)];
      this.appendUniqueContent(randomContent);
    } else {
      alert('No more unique content available!');
    }
  }

  resetContent() {
    this.usedContent = [];
    this.contentSource.next(this.initialContent);
  }

  appendName(name: string) {
    this.contentSource.next(this.contentSource.value + `<p>${name}</p>`);
  }
}
