const features = {};

features.getPathCount = (paths) => {
    return paths.length;
}

features.getPointCount = (paths) => {
    const points = paths.flat();
    return points.length;
}

if (typeof module !== "undefined") {
    module.exports = features;
}

// arreglar gitignore para que suba este archivo ya que esta en estado de untracked
// arreglar el otro archivo relacionado con este