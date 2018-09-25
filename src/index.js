module.exports = function solveEquation(equation) {
    
  var x1x2=[],positions=[],massspl=[];
    var qr=equation + 'x';
    var a=0,b=0,c=0,D=0,findPos=0,pos=0;

    massspl=qr.split(" ");
    qr=massspl.join("");

    while (true){
        findPos=qr.indexOf('x',pos);
        findPos
        if (findPos==-1) break;
        positions.push(findPos);
        positions
        pos=findPos+1;
    }
    a=+qr.slice(0,positions[0]-1);
    b=+qr.slice(positions[0]+3,positions[1]-1);
    c=+qr.slice(positions[1]+1,positions[2]);
    D=b*b - 4*a*c;

    x1x2[0]=Math.round((-b+Math.sqrt(D))/(2*a).toFixed(1));
    x1x2[1]=Math.round((-b-Math.sqrt(D))/(2*a).toFixed(1));
    x1x2.sort((a,b)=>(a-b));

    return x1x2;
}
