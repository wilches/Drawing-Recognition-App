const featureFunctions = {};

featureFunctions.getPathCount = (paths) => {
    return paths.length;
}

featureFunctions.getPointCount = (paths) => {
    const points = paths.flat();
    return points.length;
}

if (typeof module !== "undefined") {
    module.exports = featureFunctions;
}

// arreglar gitignore para que suba este archivo ya que esta en estado de untracked
// arreglar el otro archivo relacionado con este