const groupByKey = arr => {
    return arr.reduce((k, v) => {
        k = k || { };
        let key = Object.keys(v)[0];
        if (!(key in k)) {
            k[key] = { };
        }

        k[key].events = [...(k[key].events || []), ...v[key].events];
        return k;
    }, {});
};

export default groupByKey;
