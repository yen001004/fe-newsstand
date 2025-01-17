import Component from "../core/Component.js";
import { getState, setState } from "../observer/observer.js";
import {
    gridPageState,
    listPageState,
    subscribeDataState,
    viewModeState,
} from "../store/store.js";

export default class Alert extends Component {
    template() {
        return `
            <div class="alert-message">
                <span class="display-bold16"></span>을(를) <br />
                구독해지하시겠습니까?
            </div>
            <div class="alert-button-container">
                <div class="alert-confirm">예, 해지합니다</div>
                <div class="alert-cancel">아니오</div>
            </div>
        `;
    }

    setEvent() {
        this.$target.addEventListener("click", ({ target, currentTarget }) => {
            if (target.classList.contains("alert-confirm")) {
                currentTarget.classList.add("hidden");

                // 구독하기 리스트에서 삭제
                this.unsubscribePress();
            } else if (target.classList.contains("alert-cancel")) {
                currentTarget.classList.add("hidden");
            }
        });
    }

    unsubscribePress() {
        const subscribeList = JSON.parse(localStorage.getItem("subscribeList"));
        const pressName = this.$target.querySelector(".alert-message > span");
        const indexToRemove = subscribeList.findIndex(
            (data) => data.name === pressName.textContent.trim()
        );
        if (indexToRemove !== -1) {
            subscribeList.splice(indexToRemove, 1);
        }
        localStorage.setItem("subscribeList", JSON.stringify(subscribeList));

        const subscribeData = getState(subscribeDataState);
        const listPageIndex = getState(listPageState);

        const viewMode = getState(viewModeState);

        if (viewMode === "list") {
            if (subscribeData.length === listPageIndex) {
                setState(listPageState, 1);
            }
        } else {
            if (subscribeList.length % 24 === 0) {
                const gridPage = getState(gridPageState);
                setState(gridPageState, gridPage - 1);
            }
        }
        setState(subscribeDataState, subscribeList);
    }
}
