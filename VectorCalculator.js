exports.sum = (a,b) =>{
return {x:a.x+b.x, y:a.y+b.y};
}

exports.sub = (a,b) =>{
    return {x: a.x -b.x , y: a.y - b.y };
    }
    
    
exports.dot = (a,b) =>{
   // console.log(a);
    let step1 = a.x * b.x;
    let step2 = a.y * b.y;
        return step1 + step2 ;
        }
        

exports.escalar = (a,k) =>{

    let x = a.x*k;
    let y = a.y*k;
     return {x: x, y:y} ;
          }
                 
        
