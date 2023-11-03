
import React from "react";
import PropTypes from "prop-types";

function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      {icon}
      <h2>{title}</h2>
    </div>
  );
}

SectionHeader.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
