import { Component } from '@angular/core';
import { Link } from '../link';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faReddit,
  faTwitch,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-directory',
  imports: [FontAwesomeModule],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
})
export class DirectoryComponent {
  public readonly links: Link[] = [
    {
      site: 'YouTube',
      link: 'https://youtube.com/@We1rdoYT',
      icon: faYoutube,
    },
    {
      site: 'Twitch',
      link: 'https://twitch.tv/we1rdoyt',
      icon: faTwitch,
    },
    {
      site: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100063950119022',
      icon: faFacebook,
    },
    {
      site: 'X',
      link: 'https://x.com/We1rdoYT',
      icon: faXTwitter,
    },
    {
      site: 'Reddit',
      link: 'https://reddit.com/r/We1rdo',
      icon: faReddit,
    },
    {
      site: 'Discord',
      link: 'https://discord.gg/qvPQgBfkHN',
      icon: faDiscord,
    },
    {
      site: 'GitHub',
      link: 'https://github.com/We1rdoYT',
      icon: faGithub,
    },
    {
      site: 'Website',
      link: 'https://we1rdoyt.github.io',
      icon: faGlobe,
    },
    {
      site: 'Creations',
      link: 'https://github.com/We1rdoYT/Creations',
      icon: faGear,
    },
  ];
}
