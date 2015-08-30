const { R } = window;

const sort = R.sortBy(R.prop('comparable'));
const sortable = item => ({ item, comparable: Math.random() });
const wrap = R.map(sortable);
const unwrap = R.map(R.prop('item'));

export const shuffle = (list) => unwrap(sort(wrap(list)));
export default R;
