import React from "react";
import AdviceDisplay from "./../components/AdviceDisplay";
import NewsletterSection from "./../components/NewsletterSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();
  var dateObject = new Date();
  var curentYear = dateObject.getFullYear();
  return (
    <>
      <AdviceDisplay
        bg="dark"
        textColor="light"
        buttonColor="primary"
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Daily Advice to Your Inbox"
        subtitle="We will send you a short bit of wisdom to your email once per day"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <Footer
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright={"© " + curentYear + " astetik"}
      />
    </>
  );
}

export default IndexPage;
