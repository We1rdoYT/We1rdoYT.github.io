import { Link } from './src/app/link';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faReddit,
  faTwitch,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCalculator,
  faFileLines,
  faFilm,
  faGear,
  faGlobe,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons';

export class Settings {
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

  public readonly featured_creations: Link[] = [
    {
      site: 'Abacus',
      link: 'https://we1rdoyt.github.io/abacus/',
      icon: faCalculator,
    },
    {
      site: 'CAGED System',
      link: 'media/img/caged.jpg',
      icon: faGuitar,
    },
    {
      site: 'Rickroll',
      link: 'roll',
      icon: faFilm,
    },
    {
      site: 'Word Counter',
      link: 'https://we1rdoyt.github.io/Creations/Programs/HTML/Word%20Counter.html',
      icon: faFileLines,
    },
  ].sort((a, b) => a.site.localeCompare(b.site));
}
