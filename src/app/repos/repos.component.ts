import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Repo} from '../repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  displayedColumns: string[] = ['name', 'language', 'size', 'private', 'forks'];

  data: Repo[] = [];
  isLoadingData = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getRepos()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingData = false;
      }, err => {
        console.log(err);
        this.isLoadingData = false;
      });
  }

}
