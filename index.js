// Code your solution in this file!
function distanceFromHqInBlocks(picstation){
   let blocks = 0 ;
  if(picstation <42 ){
    blocks = 42 - picstation
  }else{
     blocks = picstation - 42
  }
  return blocks;
}
function distanceFromHqInFeet(picstation){
  let distanceft = distanceFromHqInBlocks(picstation) * 264;
  return distanceft
//  let 
    //if(picstation <42 ){
     //   picstation - 42
     // }else{
      //   42 - picstation
     // }
     //  return picstation*264 ;
}
function distanceTravelledInFeet(start , destination){
   let distanceTraveled = 0;
    if(destination > start){
      distanceTraveled = (destination - start)*264
    }
    
    else if (destination < start){
      distanceTraveled = (start - destination) *264
    }
    return distanceTraveled;
}
function calculatesFarePrice(start, destination){
   let price = 0;
   let distance =  (destination - start)  *264;
   if(distance <400){
       price;
   }else if(distance > 400 && distance<2000){
     price = 2.56;
   }else if(distance > 2000 && distance < 2500){
      price = 25;
   }else{
      price = 'cannot travel that far'
   }
   return price;
  
}



