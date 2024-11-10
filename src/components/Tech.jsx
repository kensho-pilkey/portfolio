import React from "react";
import { SectionWrapper } from "../hoc";
import SkillTree from "./SkillTree";
import { skillTree } from "../constants/skillTree";

const Tech = () => (
  <div className="p-5">
    <SkillTree data={skillTree} />
  </div>
);

export default SectionWrapper(Tech, "");