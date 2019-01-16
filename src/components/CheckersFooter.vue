<template>
  <div class="footer-strip">
    <ul>
      <li><a href="https://www.checkers.co.za/about.html">ABOUT US</a></li>
      <li><a href="https://www.shopriteholdings.co.za/Pages/home.aspx">SHOPRITE HOLDINGS</a></li>
      <li><a href="https://www.checkers.co.za/contactus.html">CONTACT US</a></li>
      <li><a href="https://www.checkers.co.za/Terms-and-Conditions.html">TERMS AND CONDITIONS</a></li>
      <li><a href="https://www.checkers.co.za/policies.html">POLICIES</a></li>
      <li><a href="https://shopritebemore.com/">CAREERS</a></li>
      <li><a href="https://www.checkers.co.za/contactus.html">CHECKLINE: 0800 01 07 09</a></li>
      <li><a href="https://www.checkers.co.za/latest-news.html">LATEST NEWS</a></li>
      <li><a href="https://www.checkers.co.za/consumer-care.html">CUSTOMER CARE</a></li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  @import '../css/variables';

  .footer-strip {
    background: white;
    padding: 1rem;
    display: flex;
    justify-content: space-around;

    @media @smart-phone {
      padding: 0;
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;

      @media @smart-phone {
        flex-direction: column;
      }

      li {
        list-style: none;
        color: @grey-82;

        @media @smart-phone {
          padding: 0.25rem 1rem;
          border-top: 1px solid @grey-82;
        }
      }
    }

    a {
      color: @grey-82;
      text-decoration: none;
      margin-left: 0.5rem;
      transform: scale(1);
      transition: transform @anim-speed;

      &:hover {
        transform: scale(1.3);
        transition: transform @anim-speed;
      }
    }
  }
</style>
