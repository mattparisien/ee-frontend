const getBlockName = string => {
  const startStr = "blocks.";
  const endStr = "-block";
  const startIndex = string.indexOf(startStr) + startStr.length;
  const endIndex = string.indexOf(endStr);
  const blockName = string.slice(startIndex, endIndex);
  return blockName;
};

export default getBlockName;