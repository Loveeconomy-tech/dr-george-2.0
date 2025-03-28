"use client";
import type { NextPage } from "next";
import Layout from "../_components/BaseLayout/Index";
import PageHero from "../_components/Blocks/Hero/pageHero";
import { useEffect, useState } from "react";
import { getLanguage } from "../_helpers/misc";
import eventsText from "../_internationalization/events";
import CurrentEvents from "../_components/Events/currents-events";
import UpcomingEvents from "../_components/Events/upcoming-events";
import PastEvents from "../_components/Events/past-events";
import NoEvents from "../_components/Events/no-events";

const Events: NextPage = () => {
  const [lang, setLang] = useState("en");
  const text = eventsText[lang as keyof typeof eventsText];
  const defaultLang = getLanguage();

  useEffect(() => {
    setLang(defaultLang);
  }, [defaultLang]);

  return (
    <Layout>
      <PageHero title={text.eventsHeroText} />
      <NoEvents />
      {/* <CurrentEvents />
      <UpcomingEvents />
      <PastEvents /> */}
    </Layout>
  );
};

export default Events;
