let c = [];
for (let i = 0; i < 10000; i++) {
    c[parseInt(Math.random()*10)] = (c[parseInt(Math.random()*10)] || 0) + 1;
}
console.log(c);