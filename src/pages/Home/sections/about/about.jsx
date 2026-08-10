import SectionTitle from "../../../../components/SectionTitle";
import "./about.css";
import aboutimg from "../../../../assets/imgs/HomePage/about.png"; 

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle>about us</SectionTitle>
        <article className="about-card">
          <div className="about-info">
            <span className="about-title">BYOTA</span>
            <p>
              Cairo's real estate market offers a vibrant mix of modern living
              and rich history. With properties ranging from luxurious
              high-rises to charming traditional homes, there's something for
              everyone. The city has been a hub for real estate development
              since the early 1900s, evolving to meet the needs of its diverse
              population. Today, Cairo's skyline is dotted with innovative
              designs that blend seamlessly with its ancient landmarks.
            </p>
          </div>
          <div className="img">
          <img src={aboutimg} alt="Business Meeting" className="img-cover"/>
          </div>
        </article>
        <article className="about-card reverse">
          <div className="about-info">
            <span className="about-title">BYOTA</span>
            <p>
              At Byota, our mission is to redefine real estate in Cairo by
              blending modern luxury with the city's rich heritage. We strive to
              create exceptional living spaces that cater to diverse lifestyles,
              ensuring that every resident feels at home. Our commitment to
              sustainability and innovation drives us to develop properties that
              not only meet the needs of today but also preserve the beauty of
              Cairo for future generations.
            </p>
          </div>
          <div className="img">
            <img src={aboutimg} alt="Business Meeting" className="img-cover" />
          </div>
        </article>
      </div>
    </section>
  );
}
