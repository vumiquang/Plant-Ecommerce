export const formatMoney = (n) => {
    n = n + '';
    return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
};
