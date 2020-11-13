import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sb-player-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnChanges {

  @Input() title: string;
  @Input() progress = 0;

  ngOnChanges(changes: SimpleChanges) {
      if (changes.progress && changes.progress.currentValue) {
          this.progress = changes.progress.currentValue;
      }
  }
}
