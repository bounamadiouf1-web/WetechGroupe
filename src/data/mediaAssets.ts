import wetechLogo from '../assets/media/wetech-logo.jpeg';
import heroStudio from '../assets/media/hero-studio.jpg';
import bissauDigitalTeam from '../assets/media/bissau-digital-team.jpg';
import ceoPortrait from '../assets/media/ceo-portrait.png';
import bindicumpraLogo from '../assets/media/bindicumpra-logo.jpg';
import bindicumpraVisual from '../assets/media/bindicumpra-visual.jpg';
import kummyLogo from '../assets/media/kummy-logo.jpg';
import kummyVisual from '../assets/media/kummy-visual.jpg';
import bissauGoLogo from '../assets/media/bissaugo-logo.jpg';
import bissauGoVisual from '../assets/media/bissaugo-visual.jpg';
import farmagoLogo from '../assets/media/farmago-logo.jpeg';
import farmagoVisual from '../assets/media/farmago-visual.jpg';

export const MEDIA_ASSETS = {
  wetechLogo,
  heroStudio,
  bissauDigitalTeam,
  ceoPortrait,
  bindicumpraLogo,
  bindicumpraVisual,
  kummyLogo,
  kummyVisual,
  bissauGoLogo,
  bissauGoVisual,
  farmagoLogo,
  farmagoVisual,
} as const;

export type MediaAssetKey = keyof typeof MEDIA_ASSETS;
