import Head from 'next/head';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Spacing from '../components/Spacing';

export default function About() {
  
  return (
    <>
      <Head>
        <title>Home - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Your trusted partner for business"
                subtitle="About Our Agency"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                Cybrosphere Solutions is a dynamic Branding Agency specializing in comprehensive solutions for businesses. 
                With expertise in branding, digital marketing, web and app development, social media management, 
                and graphic designing, we empower brands to thrive in the digital age. Our creative and strategic 
                approach sets us apart, delivering remarkable results.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_img_1.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

       

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/about_img_4.jpeg"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Why Choose Us"
                subtitle=""
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                Choose Cybrosphere Solutions because we are your one-stop solution for all your branding and digital needs. 
                Our dedicated team of experts brings a wealth of experience in branding, digital marketing, web and app development, 
                social media management, and graphic design. We tailor our strategies to your unique goals, ensuring a personalized 
                and effective approach that drives growth and engagement. With a track record of delivering exceptional results 
                and a commitment to staying ahead of industry trends, we are your trusted partner in building and enhancing your 
                brand's online presence. Choose us for innovation, expertise, and a commitment to your success.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
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
