const utils = {};

utils.formatPercent= (n) => {
    return (n * 100).toFixed(2) + "%";
}

utils.printProgress = (count, max) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const percent = utils.formatPercent(count/max);
    process.stdout.write(count + "/" + max + " (" + percent + "%)");
}


/**
 * Groups an array of objects by a specified key.
 * @param {Array} objArray - The array of objects to be grouped.
 * @param {string} key - The key to group the objects by.
 * @returns {Object} - An object where the keys are unique values of the specified key and the values are arrays of objects with that key value.
 */
utils.groupBy = (objArray, key) => {
    const groups = {};
    for (let obj of objArray) {
        const val = obj[key];
        if (groups[val] == null){
            groups[val] = [];
        }
        groups[val].push(obj);
    }
    return groups;
}

if (typeof module !== "undefined") {
    module.exports = utils;
  }