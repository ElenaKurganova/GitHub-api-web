import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Repo} from '../repo';
import {log} from 'util';

@Component({
  selector: 'app-repos-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  repo: Repo = {
    id: '', name: '', privacy: '', html_url: '', description: '', created_at: '', updated_at: '',
    language: '', license: '', forks: null, size: null, private: null
  };

  isLoadingData = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getRepoDetails(this.route.snapshot.params['id']);
  }

  getRepoDetails(name) {
    log(name);
    this.api.getRepoByName(name)
      .subscribe(data => {
        this.repo = data;
        console.log(this.repo);
        this.isLoadingData = false;
      });
  }
}
