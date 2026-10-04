const obj = { n: 10 };
function inc(num) 
{
    num.n += 1;
}
inc(obj);
console.dir(obj);