export var range = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export var bool = (weight = 0.5) => {
    return Math.random() < weight;
};
