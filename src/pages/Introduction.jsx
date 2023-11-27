import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Topbanner from '../components/Topbanner'
import styled from "styled-components";
import { Link } from "react-router-dom"
import { mobile } from "../responsive";
import { intro, news } from '../data';
import Menubar from '../components/Menubar'

const Container = styled.div``;
const SmallContainer = styled.div`
  display: flex;
  padding: 5px;
  
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
    
`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); // Added background color for hover effect
  opacity: 0; // Set initial opacity to 0 for the hover effect
  transition: opacity 0.3s ease; // Added transition for smooth hover effect
`;
const IntroContainer = styled.div`
  
  cursor: pointer;
  margin: 2px;
  height: 70vh;
  width: 50%;
  position: relative;
  transition: transform 0.3s;
  &:hover ${Info} {
    opacity: 1; // Change opacity to 1 on hover
    
`;
const DesContainer = styled.div`
  margin: auto;
  height: 40vh;
  width: 50%;
  text-align: center;
  
  position: relative;

    
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  ${mobile({ height: "20vh" })}

`;


const Title = styled.h1`
    color:black;
    margin: 20px;
    text-align: center;
`;
const Title1 = styled.h1`
    color:black;
    margin: 20px;
    position: relative;
    
    
`;
const Introduction = () => {
  return (

  <>
  <Navbar></Navbar>
  <Menubar></Menubar>
  {/* <Container>
      <main id="content" role="main">
         <div className="container cf">
         <div id="shopify-section-template--14584894947416__main" className="shopify-section page-section-spacing">
            <div className="article">
               <div className="container cf cc-animate-init -in cc-animate-complete" data-cc-animate="">
               <div className="page-header cf">
                  <h1 className="majortitle"style={{textAlign: `center`}}>Privacy Policy</h1>
               </div>
               <div className="rte">
                  <p>
                     <strong>Bulldog Gear</strong> is committed to protecting your privacy. We will only use the information that we collect about you lawfully (in accordance with the Data Protection Act 1998 and General Data Protection Regulations 2018). We collect your data to process your order and to provide a service afterwards. There is the option to opt out of any marketing emails.
                  </p>
                  <p>The type of information we will collect about you when you place an order or register on our web site includes:</p>
                  <ul>
                     <li>Name</li>
                     <li>Address</li>
                     <li>Phone Number</li>
                     <li>Email Address</li>
                     <li>Credit/Debit card details</li>
                     <li>IP Address</li>
                  </ul>
                  <p>
                     We use Shopify to process your data, please see their privacy policy{' '}
                     <a href="https://www.shopify.com/legal/privacy">here</a>.
                  </p>
                  <p>
                     We will never collect sensitive information about you without your explicit consent. We will not transfer or sell your information. We may use technology to track the patterns of behaviour of visitors to our site. If you have any questions/comments about privacy, you can email us at customer.service@bulldoggear.com
                  </p>
                  <p>
                     <strong>Use of Personal Information</strong>
                  </p>
                  <p>We use the information that you provide us with for the following purposes:</p>
                  <ul>
                     <li>To send updates regarding the status of your enquiry or order</li>
                     <li>To send newsletters and updates which we believe you will be interested in</li>
                     <li>To understand the behaviour of our registered users</li>
                  </ul>
                  <p>
                     When you purchase something from our store, we need to know your name, email address, delivery address, credit/debit card number and expiry date. When you browse our online store, we automatically receive your IP Address, which allows us to learn about your browser and operating system.
                  </p>
                  <p>
                     <strong>Your Consent</strong>
                  </p>
                  <p>
                     By entering any of our online competitions either via our website or social media you are giving consent to Bulldog Gear to contact you for marketing purposes including but not limited to updates, deals and discounts. You can choose to unsubscribe at any time.
                  </p>
                  <p>
                     By submitting information to Bulldog Gear, you consent to the collection and use of this information by Bulldog Gear. If you wish to withdraw your consent at any time, contact us by emailing
                     <a href="mailto:team@weightless.eu"> weightless@gmail.com</a> or Contact us at:
                  </p>
                  <p>Weightless Calishthenics</p>
                  <p>16 – Quang Trung<br /> Hiep Phu, Thu Duc<br /> +12345678</p>
                  <p>
                     <strong>Your Email Address</strong>
                  </p>
                  <p>
                     Your email address is used to communicate with you regarding your order. It will also be used for marketing purposes, but you will be provided with the opportunity to unsubscribe at any time via the unsubscribe link which can be found at the bottom of any marketing emails sent by Bulldog Gear.
                  </p>
                  <p>
                     <strong>Data Security</strong>
                  </p>
                  <p>
                     Our store is hosted on Shopify Inc. Your data is stored through their data storage, databases and on the general application. This is stored on a secure server behind a firewall.
                  </p>
                  <p>
                     We do not store credit card details nor do we share customer details with any Third-Parties.
                  </p>
                  <p>
                     All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands such as Visa,
                  </p>
               </div>
               </div>
            </div>
         </div>
         </div>
      </main>
     </Container> */}
  

  
    
    <Footer></Footer>
    </>
 
 
  )};





export default Introduction