export function amount(bids) {
    const sorted = bids.sort((a, b) => a.amount - b.amount);
    return sorted
}