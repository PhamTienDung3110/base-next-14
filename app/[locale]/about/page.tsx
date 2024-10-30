import Counter from "@/app/components/layout/Counter";
import Feature from "@/app/components/about/Feature";
import Hire from "@/app/components/layout/Hire";
import MainAbout from "@/app/components/about/MainAbout";
import PageTitle from "@/app/components/about/PageTitle";
import Partner from "@/app/components/layout/Partner";
import Team from "@/app/components/about/Team";
import WorksProcess from "@/app/components/layout/WorksProcess";

function About() {
  return (
    <div>
      <PageTitle />
      <Feature />
      <MainAbout />
      <Counter />
      <Team />
      <WorksProcess />
      <Hire />
      <Partner />
    </div>
  );
}

export default About;
