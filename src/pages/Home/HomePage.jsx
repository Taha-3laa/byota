import Hero from "./sections/hero/hero";
import OurEmbassies from "./sections/ourembassies/ourembassies";
import OurNumbers from "./sections/ournumbers/ournumbers";
import OurHistory from "./sections/ourhistory/ourhistory";
import Ourfacilites from "./sections/ourfacilities/ourfacilities";
import LifeStyle from "./sections/lifestyle/lifestyle";
import About from "./sections/about/about";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <OurEmbassies/>
      <OurNumbers/>
      <OurHistory/>
      <Ourfacilites/>
      <LifeStyle/>
      <About/>
    </>
  );
}
