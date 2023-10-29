import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact2 from '../components/FunFact/FunFact2';
import Hero4 from '../components/Hero/Hero4';
import Layout from '../components/Layout';
import MovingText2 from '../components/MovingText/MovingText2';
import Portfolio from '../components/Portfolio';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function DigitalAgency() {
  const [itemShow, setItemShow] = useState(6);
  const heroSocialLinks = [
    {
      name: 'Linkedin',
      links: 'https://www.linkedin.com/company/cybrosphere-solutions',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/cybrosphere_solutions/',
    },
  ];
  const funfaceData = [
    {
      title: 'Digital products',
      factNumber: '30',
    },
    {
      title: 'Global happy clients',
      factNumber: '80',
    },
    {
      title: 'Project completed',
      factNumber: '20',
    },
    {
      title: 'Team members',
      factNumber: '30',
    },
  ];
  const serviceData1 = [
    {
      title: 'Web Development',
      href: '/service/service-details',
    },
    {
      title: 'App Development',
      href: '/service/service-details',
    },
    {
      title: 'Marketing',
      href: '/service/service-details',
    },
    {
      title: 'Branding',
      href: '/service/service-details',
    },
  ];
  const serviceData2 = [
    {
      title: 'SEO',
      href: '/service/service-details',
    },
    {
      title: 'App design',
      href: '/service/service-details',
    },
    {
      title: 'React Developer',
      href: '/service/service-details',
    },
    {
      title: 'Digital Marketing',
      href: '/service/service-details',
    },
  ];
  const portfolioData = [
    {
      title: 'Destination Cafe',
      href: '/images/portfolio/1.jpg',
      src: '/images/portfolio/1.jpg',
      category: 'ui_ux_design',
    },
    {
      title: 'Vcurve',
      href: '/images/portfolio/2.jpg',
      src: '/images/portfolio/2.jpg',
      category: 'logo_design',
    },
    {
      title: 'Shathabdhi Homes',
      href: '/images/portfolio/3 .jpg',
      src: '/images/portfolio/3.jpg',
      category: 'web_design',
    },
    {
      title: 'Shathabdhi Organics',
      href: '/images/portfolio/4.jpg',
      src: '/images/portfolio/4.jpg',
      category: 'mobile_apps',
    },
    {
      title: 'Vristha Cafe',
      href: '/images/portfolio/5.jpg',
      src: '/images/portfolio/5.jpg',
      category: 'ui_ux_design',
    },
    {
      title: 'Breeze Rehab Center',
      href: '/images/portfolio/6.jpg',
      src: '/images/portfolio/6.jpg',
      category: 'web_design',
    },
    {
      title: 'Shathabdhi Organics',
      href: '/images/portfolio/7.jpg',
      src: '/images/portfolio/7.jpg',
      category: 'ui_ux_design',
    },
    {
      title: 'Phensta',
      href: '/images/portfolio/8.jpg',
      src: '/images/portfolio/8.jpg',
      category: 'logo_design',
    },
    {
      title: 'Trops Pub',
      href: '/images/portfolio/9.jpg',
      src: '/images/portfolio/9.jpg',
      category: 'web_design',
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Cybrosphere Solutions is more than just a company; it's a digital partner dedicated to helping businesses thrive in the online world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero4
          title="We Are <span>C</span>ybrosphere <br />"
          subtitle="We are more than just a company; it's a collective of visionaries who understand the evolving digital ecosystem. The company's core mission is to empower businesses and individuals with the tools and strategies they need to thrive in the online world. "
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          phoneNumber="+91 8639626772"
          email="info@cybrospheresolutions.com"
        />
        {/* End Hero Section */}

        {/* Start Funfact Section */}
        <Div className="container">
          <FunFact2
            data={funfaceData}
            variant="cs-type1"
            bgUrl="/images/funfact_shape_bg.svg"
          />
        </Div>
        {/* End Funfact Section */}

        {/* Start Services Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="What we provide"
            subtitle="Services"
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
        </Div>
        {/* End Services Section */}

        {/* Start Moving Text Section */}
        <MovingText2 data={serviceData1} />
        <Spacing lg="20" md="10" />
        <MovingText2 reverseDirection data={serviceData2} />
        {/* End Moving Text Section */}

        {/* Start About Section */}
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Spacing lg="150" md="80" />
          <Div className="container">
            <Div className="row">
              <Div className="col-lg-5 col-xl-4">
                <SectionHeading
                  title="India's best digital agency ever"
                  subtitle="Why Choose Us"
                  btnText="Learn More"
                  btnLink="/about"
                />
                <Spacing lg="45" md="45" />
              </Div>
              <Div className="col-lg-7 offset-xl-1">
                <Div className="cs-half_screen">
                  <VideoModal
                    videoSrc="https://www.youtube.com/watch?v=59sb__vpfKo"
                    
                    bgUrl="/images/why.jpg"
                    variant="cs-style1 cs-size1"
                  />  
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End About Section */}

        {/* Start Projects Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioData.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 0 || index === 3 || index === 4
                    ? 'col-lg-8'
                    : 'col-lg-4'
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div>
        </Div>
        {/* End Projects Section */}

       

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}


        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
