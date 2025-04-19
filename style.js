const name1=document.getElementById('name');
const nametxt='BHARGAV';
let index=0;
let remove=false;      
function nametype(){
    if(!remove){                                          //here false says keep typing 
        name1.innerHTML=nametxt.substring(0,index+1);
        index++;                                          //i++ means adds char one by one
        if(index==nametxt.length){                        //if index reaches full txt stops for 2sec
            remove=true;                                   //true means start to delete
            setTimeout(nametype,2000);                    //waits before deleting
            return;
        }
    }
    else{
        name1.innerHTML=nametxt.substring(0,index-1);
        index--;
        if(index==0){
            remove=false
        }
    }
    setTimeout(nametype,remove? 100:200);                  //if deleting,faster i.e 100ms and if typing slower 200ms
}
window.onload=nametype;                                    //runs after page loads