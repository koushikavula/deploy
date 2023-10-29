import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/company/cybrosphere-solutions/" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://twitter.com/cybrosphere" className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link href="https://www.instagram.com/cybrosphere_solutions/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100092456712119" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
    </Div>
  );
}
