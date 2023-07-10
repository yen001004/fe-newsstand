const getDate = () => {
    const today = new Date();
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    };
    const $date = document.querySelector(".date");
    $date.textContent = today.toLocaleDateString("ko-KR", options);
};

export default getDate;