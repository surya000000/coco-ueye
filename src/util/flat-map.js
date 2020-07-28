import isArray from "./is-array";

const flatMap = (data, attrs) => {
    const mappedData = data.map(d => {
        let splittedAttrs = attrs.split(".");
        const collection = d[splittedAttrs[0]];
        return collection.map(e => e[splittedAttrs[1]]);
    });
    return [].concat.apply([], mappedData);
};

export default flatMap;
