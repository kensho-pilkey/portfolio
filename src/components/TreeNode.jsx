import React, { useState } from "react";
import { motion } from "framer-motion";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {hasChildren && (
          <span className="mr-2 text-white">
            {expanded ? "▼" : "▶"}
          </span>
        )}
        <span className="text-white">{node.name}</span>
      </div>
      {expanded && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="overflow-hidden"
        >
          {node.details && (
            <div className="ml-6 mt-1 text-gray-400">{node.details}</div>
          )}
          {hasChildren &&
            node.children.map((child, index) => (
              <TreeNode key={index} node={child} />
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default TreeNode;
