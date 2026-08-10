import SectionTitle from "../../../../components/SectionTitle"; 
import "./ourembassies.css";
import building from  "../../../../assets/imgs/HomePage/landing2.png";

export default function OurEmbassies () {
  return (
    <section className="ourembassies">
        <div className="container">
          <article>
            <SectionTitle>Our embassies what we offer</SectionTitle>
            <p>
              At Byota Realty, we offer a comprehensive range of services
              tailored to meet your real estate needs. Our expertise spans
              residential and commercial properties, ensuring that we can assist
              you whether you're looking to buy, sell, or lease. Our dedicated
              team is committed to providing exceptional customer service,
              guiding you through every step of the process. With a focus on
              innovation and sustainability, we strive to create spaces that
              enhance your lifestyle and meet modern demands.
            </p>
            <a href="#" className="readmore">
              read more
            </a>
          </article>
          <div className="img">
            <img src={building} className="img-cover" alt="landingimg" />
          </div>
        </div>
      </section>
  );
}