import React from "react";
import TreeNode from "./TreeNode";

const SkillTree = ({ data }) => {
  return (
    <div className="mt-4">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default SkillTree;