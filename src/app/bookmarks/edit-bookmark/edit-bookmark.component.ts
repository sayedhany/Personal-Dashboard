import { BookmarkService } from './../../shared/bookmark.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from './../../shared/bookmark.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {
  name: string;
  url: string;
  bookmark: Bookmark;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookmarkSrv: BookmarkService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{

      this.bookmark = this.bookmarkSrv.getBookmark(param['id']);
      console.log(param, "param");
      this.name = this.bookmark.name;
      this.url = this.bookmark.url.toString();
    })

  }
  onSubmit(value: any){
    this.bookmarkSrv.updateBookmark(this.bookmark.id, value);
    this.router.navigate(['../', "bookmarks"])
  }
  onDelete(){
    this.bookmarkSrv.deleteBookmark(this.bookmark.id)
    this.router.navigate(['../', "bookmarks"])
  }
}
