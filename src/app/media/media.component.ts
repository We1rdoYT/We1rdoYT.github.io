import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
})
export class MediaComponent {
  public readonly type: string;
  public readonly file: string;
  private readonly types: string[] = ['aud', 'img', 'roll', 'vid'];

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.type = route.snapshot.paramMap.get('type') as string;
    this.file = route.snapshot.paramMap.get('file') as string;

    let valid = false;

    for (const type of this.types)
      if (this.type === type) {
        valid = true;
        break;
      }

    if (!valid) router.navigate(['pagenotfound']);
  }
}
