import { Icon } from '@iconify/react';
import Head from 'next/head';
import React from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';


export default function Contact() {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "407a100c-0f59-458e-8401-261c78d109f1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    return (
    <>
      <Head>
        <title>Cybrosphere|Contact</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Contact Us"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Contact"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
            <SectionHeading
                title="Do you have a project <br/>in your mind?"
                subtitle="Getting Touch" />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
           <Div className="col-lg-6">
              <form onSubmit={handleSubmit} action="#" className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input type="text" name="name" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="email" name="email" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input type="text"name="project" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input type="number" name ="contact" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                  
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message</label>
                  <textarea
                    cols="30"
                    rows="7"
                    name="message"
                    className="cs-form_field"
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1" type="submit">
                    <span>Send Message</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.224839613102!2d78.3865098!3d17.4450521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915fd0da1929%3A0x792be87ce9fc76f3!2sCybrosphere%20Solutions!5e0!3m2!1sen!2sin!4v1696310834891!5m2!1sen!2sin"
            allowFullScreen
            title="Google Map"/>
        </Div>
        <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}
