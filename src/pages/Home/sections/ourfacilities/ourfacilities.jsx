import SectionTitle from "../../../../components/SectionTitle";
import "./ourfacilities.css";
import squashcourt from "../../../../assets/imgs/HomePage/squash-court.png";
import fitnesscenter from "../../../../assets/imgs/HomePage/fitness-center.png";
import lobby from "../../../../assets/imgs/HomePage/lobby.png";
import spa from "../../../../assets/imgs/HomePage/spa.png";
import biglobby from "../../../../assets/imgs/HomePage/lobby-big.png";

export default function OurFacilities ( ) {
  return (
    <section className="ourfacilities">
      <div className="container">
        <SectionTitle>our facilities we provide</SectionTitle>
        <div className="facilities-content">
          <div className="facility-card">
            <img src={squashcourt} className="img-cover"  alt="squashcourt" />
            <span>Squash Courts</span>
          </div>

          <div className="facility-card">
            <img src={fitnesscenter} className="img-cover"  alt="fitnesscenter" />
            <span>Fitness Centre</span>
          </div>

          <div className="facility-card">
            <img src={lobby} className="img-cover"  alt="lobby" />
            <span>Lobby</span>
          </div>

          <div className="facility-card">
            <img src={spa} className="img-cover"  alt="spa" />
            <span>spa</span>
          </div>
          <div className="facility-card">
            <img src={biglobby} className="img-cover"  alt="lobby" />
          </div>
        </div>

        <a href="#" className="readmore">
          Read More
        </a>
      </div>
    </section>
  );
}