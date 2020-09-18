backgroundCols=['white','lightyellow','beige','bisque','cornsilk','darkorange']

setInterval(()=>{
Index=Math.floor((Math.random() * 6) + 0)
document.body.style.backgroundColor=backgroundCols[Index];
},300);
