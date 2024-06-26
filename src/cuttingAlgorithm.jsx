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

export function getAvailablePoints(baseWidth, baseHeight, cuts) {
  const pointsX = new Set([0]);
  const pointsY = new Set([0]);

  cuts.forEach(cut => {
    if (cut.x + cut.width < baseWidth) {
      pointsX.add(cut.x + cut.width);
    }
    if (cut.y + cut.height < baseHeight) {
      pointsY.add(cut.y + cut.height);
    }
  });

  return {
    xPoints: Array.from(pointsX),
    yPoints: Array.from(pointsY)
  };
}
