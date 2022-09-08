let my="totalPaid"
console.log (my.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '_' : '') + match.toLowerCase()))