import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarkSrv: BookmarkService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value: any){
    const bookmark = new Bookmark(value.name, value.url)
    this.bookmarkSrv.addBookmark(bookmark)
    this.router.navigate(['../', "bookmarks"])

  }
}
