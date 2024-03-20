function alias(options) {
    const { entries } = options;
    return {
        name: 'alias',
        resolveId(source, importer) {
            const key = Object.keys(entries).find((e) => {
                return source.startsWith(e);
            });
            console.log("232233232322323=>", source, key);
            if (!key)
                return source;
            return source.replace(key, entries[key]) + '.js';
        }
    };
}

export { alias };
