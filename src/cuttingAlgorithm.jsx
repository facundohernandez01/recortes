export function calculateCuts(baseWidth, baseHeight, cuts) {
  let remainingWidth = baseWidth;
  let remainingHeight = baseHeight;
  let leftovers = [];

  cuts.forEach(cut => {
    if (cut.width <= remainingWidth && cut.height <= remainingHeight) {
      remainingWidth -= cut.width;
    } else {
      leftovers.push(cut);
    }
  });

  return { remainingWidth, remainingHeight, leftovers };
}
