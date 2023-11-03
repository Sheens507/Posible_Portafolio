import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

const Education = () => {
  return (
    <section id="education">
      <Container className="py-5">
        <SectionHeader icon={<FontAwesomeIcon icon={faGraduationCap} />} title="Education" />
        <br />
        <div className="education">
          <ExperienceCard
            title="Bachillerato"
            subtitle="Colegio Pedro Pablo Sánchez"
            date="2014 - 2020"
            description="Estudie en el colegio Pedro Pablo Sánchez, en el cual obtuve mi bachillerato en ciencias."
          />
          <ExperienceCard
            title="Ingeniería de Software"
            subtitle="Universidad Tecnológica de Panamá"
            date="2021 - actualidad"
            description="Actualmente estudio en la Universidad Tecnológica de Panamá, en la cual llevo 4 semestres cursados."
          />
        </div>
      </Container>
    </section>
  );
};

export default Education;
// 
//   );
// };
// 
// export default Portfolio;