import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ContentfulOptionsService } from 'src/app/contentful-options/contentful-options.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private _contentfulOptionsService: ContentfulOptionsService) { }

  public accessToken$: Observable<string> = this._contentfulOptionsService.get();
  
  async ngOnInit() {
    const url = "https://graphql.contentful.com/content/v1/spaces/30by678u7n83";

    const query = `
      coursesCollection {
        items {
          title
        }
      }
    `;

    const requestInit: RequestInit = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer`
      },
      body: JSON.stringify({
        query
      })
    }

    const promise = await fetch(url, requestInit)
    
    const json = await promise.json();

    console.log(json);
  }
}
