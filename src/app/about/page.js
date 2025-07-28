// src/app/about/page.js
import PioneeringExcellenceSection from '../../components/Inception';
import OurValues from '../../components/Values';
import OurCoreTeam from '../../components/OurCoreTeam';
import OurMission from '../../components/OurMission';

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      <PioneeringExcellenceSection/>
      <OurMission />
      <OurValues />
      <OurCoreTeam />

    </div>
  );
}