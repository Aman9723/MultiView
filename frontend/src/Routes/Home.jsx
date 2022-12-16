import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slideshow from "../Components/SlideShow";
import LatestMovies from "../Components/LastestTest";
import TopTenMovies from "../Components/TopTenMovies";
import LeadingLadies from "../Components/LeadingLadies";
import IMDBTopPicks from "../Components/IMDBTopPicks";
import OriginalWeb from "../Components/OriginalWeb";
import PremiumBollywood from "../Components/PremiumBollywood";

const Home = () => {
  return (
    <Box my={7}>
      <Navbar />
      <Slideshow />

      <LatestMovies />
      <TopTenMovies />
      <LeadingLadies />
      <IMDBTopPicks />
      <OriginalWeb />
      <PremiumBollywood />
      <Footer />
    </Box>
  );
};

export default Home;
