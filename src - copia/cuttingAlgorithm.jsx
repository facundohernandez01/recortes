export function calculateCuts(baseWidth, baseHeight, cuts) {
  let remainingWidth = baseWidth;
  let remainingHeight = baseHeight;
  let leftovers = [];

  cuts.forEach(cut => {
    if (cut.width <= remainingWidth && cut.height <= remainingHeight) {
      remainingWidth -= cut.width;
      remainingHeight -= cut.height;
    } else {
      leftovers.push(cut);
    }
  });

  return { remainingWidth, remainingHeight, leftovers };
}

export function isOverlap(newCut, existingCuts) {
  for (let cut of existingCuts) {
    if (
      newCut.x < cut.x + cut.width &&
      newCut.x + newCut.width > cut.x &&
      newCut.y < cut.y + cut.height &&
      newCut.y + newCut.height > cut.y
    ) {
      return true;
    }
  }
  return false;
}
