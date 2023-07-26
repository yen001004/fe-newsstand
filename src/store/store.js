import { initState } from "../observer/observer.js";
import { initSubscribeList } from "../utils/utils.js";

const response = await fetch(`../data/press-data.json`);
const jsonData = await response.json();

const pressDataState = initState({
    key: "pressData",
    value: jsonData,
});

const subscribeDataState = initState({
    key: "subscribeData",
    value: initSubscribeList(jsonData),
});

const listPageState = initState({
    key: "listPageState",
    value: 1,
});

const gridPageState = initState({
    key: "gridPageState",
    value: 0,
});

export { pressDataState, subscribeDataState, listPageState, gridPageState };