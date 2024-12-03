import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
