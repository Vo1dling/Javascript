let obj = {
    width  : '150px',
    length :'200px',
    height : '350px',
}
function swap(obj, tl = false) {
    return Object.entries(obj).reduce((a, [k, v]) => (a[v = tl ? v.toLowerCase() : v] = k = tl ? k.toLowerCase() : k, a), {});
}
console.log(obj)
console.log(swap(obj))