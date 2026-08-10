import SectionTitle from "../../../../components/SectionTitle";
import "./lifestyle.css";


export default function LifeStyle() {
  return (
    <section className="lifestyle">
      <div className="container">
        <SectionTitle>choose your life style</SectionTitle>
        <p className="lifestyle-desc">
          The following ammenities and faclities can be founed at our ummm just
          example:
        </p>
        <div className="lifestyle-content">
          <ul className="lifestyle-list">
            <li>24 Hour concierge</li>
            <li>Room service from the Mandarin Oriental</li>
            <li>24 Hour on-site maintenance personnel</li>
            <li>In-house maid service</li>
            <li>Same day laundry and dry cleaning</li>
            <li>Secure underground car parking</li>
            <li>Valet Service</li>
            <li>Temperature controlled wine storage</li>
            <li>Dedicated house car for residents use</li>
            <li>Separate resident and staff lifts to all floors</li>
          </ul>
          <ul className="lifestyle-list">
            <li>Private spa</li>
            <li>21m Ozone swimming pool</li>
            <li>Saunas and steam rooms</li>
            <li>State-of-the-art gym</li>
            <li>Two private studios</li>
            <li>Squash court with digital scoring</li>
            <li>Virtual games room with golf simulator</li>
            <li>Serpentine Suite</li>
            <li>Screening Room Cinema</li>
            <li>Park Library with bar</li>
            <li>Private meeting rooms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
