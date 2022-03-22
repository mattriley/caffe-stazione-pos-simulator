const inflate = arr => arr.map((_, i) => arr.slice(0, i + 1));

export default inflate;
