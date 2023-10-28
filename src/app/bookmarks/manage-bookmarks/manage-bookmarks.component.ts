import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from './../../shared/bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit {
  bookmarks: Bookmark[];
  constructor(private bookmarkSrv: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkSrv.getBookmarks();
  }

}
