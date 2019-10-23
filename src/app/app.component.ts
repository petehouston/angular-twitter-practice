import { Component } from '@angular/core';
import {TwitterService} from './twitter.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  tweets = [];
  constructor(private twitterService: TwitterService, private builder: FormBuilder) {
    this.form = this.builder.group({
      search: ''
    });
    this.twitterService.getTweets().subscribe(d => {
      this.tweets = d;
    });
  }
  get searchValue() {
    return this.form.controls.search.value;
  }

}
