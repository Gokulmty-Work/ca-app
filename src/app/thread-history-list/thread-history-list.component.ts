import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../theme/shared/shared.module';

import { IconService } from '@ant-design/icons-angular';
import { PlusOutline } from '@ant-design/icons-angular/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-thread-history-list',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './thread-history-list.component.html',
  styleUrl: './thread-history-list.component.scss'
})
export class ThreadHistoryListComponent implements OnInit {
  showFullDescription: boolean = false;

  constructor(private iconService: IconService) {
    this.iconService.addIcon(...[PlusOutline]);
  }

  // Toggle "Read more" functionality
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  ngOnInit(): void {
  }

}
