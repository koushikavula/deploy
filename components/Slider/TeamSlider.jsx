import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/koushik.jpg',
      memberName: 'Koushik Avula',
      memberDesignation: 'Director',
      memberSocial: {
        
      },
      
    },
    {
      memberImage: '/images/sujith.jpg',
      memberName: 'Sujith Chereddy',
      memberDesignation: 'Director',
      memberSocial: {
        
      },     
    },
    {
      memberImage: '/images/mounisha.jpg',
      memberName: 'Mounisha',
      memberDesignation: 'HR',
      memberSocial: {
        
      },     
    },
    
    
    {
      memberImage: '/images/bhavya.jpg',
      memberName: 'Bhavya Konda',
      memberDesignation: 'Strategist',
      memberSocial: {
       
      },
    },
    {
    memberImage: '/images/husain.jpg',
    memberName: 'Husain Naqvi',
    memberDesignation: 'Graphic Designer',
    memberSocial: {
     
    },
  },
  {
    memberImage: '/images/gajanand.jpg',
    memberName: 'Ghajanand',
    memberDesignation: 'Graphic Designer',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/pranati.jpg',
    memberName: 'Pranati Bhadrachalam',
    memberDesignation: 'CSM',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/vishal.jpg',
    memberName: 'Vishal Bharadwaj',
    memberDesignation: 'Sr Developer',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/praveen.jpg',
    memberName: 'Praveen K',
    memberDesignation: 'App Tester',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/dilip.jpg',
    memberName: 'Dileep K',
    memberDesignation: 'Lead Analyst',
    memberSocial: {
     
    },
  },
  {
    memberImage: '/images/nidhi.jpg',
    memberName: 'Nidhi Reddy',
    memberDesignation: 'Sr Analyst',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/swetha.jpg',
    memberName: 'Swetha Guntupalli ',
    memberDesignation: 'Full Stack Developer',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/harika1.jpg',
    memberName: 'Harika Nidadavolu',
    memberDesignation: 'Business Operations Manager',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/sanjay.jpg',
    memberName: 'Sanjay Korukonda',
    memberDesignation: 'Business Operations Manager',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/saha.jpg',
    memberName: 'Satya Harika',
    memberDesignation: 'Private Equity Associate',
    memberSocial: {
      
    },
  },
  {
    memberImage: '/images/saha.jpg',
    memberName: 'Satya Harika',
    memberDesignation: 'Private Equity Associate',
    memberSocial: {
      
    },
  },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
