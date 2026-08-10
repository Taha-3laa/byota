import SectionTitle from "../../../../components/SectionTitle";
import SliderDots from "../../../../components/Sliderdots";
import "./ourhistory.css";
import backbuilding from "../../../../assets/imgs/HomePage/history-bg.png";
import frontbuilding from "../../../../assets/imgs/HomePage/history-front.png";

export default function OurHistory() {
  return (
    <section className="ourhistory">
      <div className="container">
        <SectionTitle>our history</SectionTitle>
        <div className="history-card">
          <div className="history-info">
            <h3>Italian Embassy</h3>
            <p>
              At Byota Realty, we pride ourselves on being at the forefront of
              the real estate market. Since our inception, we have consistently
              provided top-notch services, from property management to sales and
              leasing. Our expert team is dedicated to guiding clients through
              every step of their real estate journey, ensuring a seamless
              experience. With a focus on sustainability and modern design, we
              create spaces that not only meet today's demands but also
              anticipate future trends.
            </p>
            <a href="#" className="readmore">
              Read More
            </a>
            <SliderDots/>
          </div>
          <div className="history-images">
            <img
              className="back-image img-cover"
              src={backbuilding}
              alt="backbuilding"
            />
            <img
              className="front-image"
              src={frontbuilding}
              alt="frontbuilding"
            />
          </div>
        </div>
        <div className="history-card reverse">
          <div className="history-info">
            <h3>Japan Embassy</h3>
            <p>
              Byota Realty is a premier name in the real estate sector, offering
              exceptional properties that blend luxury with comfort. Established
              in the early 2000s, we have set the benchmark for quality and
              innovation in the industry. Our portfolio includes a diverse range
              of residential and commercial spaces, each designed to meet the
              unique needs of our clients. With a commitment to excellence, we
              ensure that every property we manage reflects our high standards
              and dedication to customer satisfaction.
            </p>
            <a href="#" className="readmore">
              Read More
            </a>
            <SliderDots/>
          </div>
          <div className="history-images">
            <img
              className="back-image img-cover"
              src={backbuilding}
              alt="backbuilding"
            />
            <img
              className="front-image "
              src={frontbuilding}
              alt="frontbuilding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
