import SectionTitle from "../../../../components/SectionTitle";
import CounterUp from "../../../../components/CounterUp";
import "./ournumbers.css";
import ournumberbg from "../../../../assets/imgs/svg/ournumbers-bg.svg";

export default function OurNumbers() {
  return (
    <section className="ournumbers">
      <img src={ournumberbg} alt="" />
      <div className="container">
        <SectionTitle>our numbers</SectionTitle>
        <div className="numbers-content">
          <div className="number-box">
            <h3><CounterUp end={20}/>+</h3>
            <p>Years of Exp</p>
          </div>

          <div className="number-box">
            <h3><CounterUp end={0}/>%</h3>
            <p>Fees we Offer</p>
          </div>

          <div className="number-box">
            <h3><CounterUp end={600} />+</h3>
            <p>Our Projects</p>
          </div>

          <div className="number-box">
            <h3><CounterUp end={80} />+</h3>
            <p>Our Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
