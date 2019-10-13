class Kalkulators {
   constructor(id){
       this.kaste = document.getElementById(id);
       //console.log(this.kaste);
       if(this.kaste){
        this.kaste.innerHTML="Kalkulators top";
        //Šeit jāizveido kalkulatora struktūra 

        this.divRez = document.createElement("div");
        this.divRez.setAttribute("class", "rez");
        this.divRez.setAttribute("id", "rezultats");
        this.kaste.appendChild(this.divRez);
        this.divRez.innerText = "0";
       
        this.divPoga1 = document.createElement("div");
        this.divPoga1.setAttribute("class", "poga_r1");
        this.kaste.appendChild(this.divPoga1);
       
        // Ievietojam pogas - 1 rinda
        // CE poga - nodzēš rezultātu
        let kaPoga1 = document.createElement("button" );
        kaPoga1.setAttribute("class","p1");
        kaPoga1.innerHTML="CE";
        kaPoga1.onclick=(evt)=>this.kaClearInd();
        this.divPoga1.appendChild(kaPoga1);
        // C poga - nodzēš visu
        let kaPoga2 = document.createElement("button" );
        kaPoga2.setAttribute("class","p1");
        kaPoga2.innerHTML="C";
        kaPoga2.onclick=(evt)=>this.kaClearAll();
        this.divPoga1.appendChild(kaPoga2);
         // CLR poga - nodzēš pēdējo simbolu ievadrindā
        let kaPoga3 = document.createElement("button" );
        kaPoga3.setAttribute("class","p1");
        kaPoga3.innerHTML="CLR";
        kaPoga3.onclick=(evt)=>this.kaBackspace();
        this.divPoga1.appendChild(kaPoga3);
        // / poga - dalīšana
        let kaPoga4 = document.createElement("button" );
        kaPoga4.setAttribute("class","p1");
        kaPoga4.innerHTML="/"; //Vajag simbolu 
        kaPoga4.onclick=(evt)=>this.kaDiv();
        this.divPoga1.appendChild(kaPoga4);



        this.divPoga2 = document.createElement("div");
        this.divPoga2.setAttribute("class", "poga_r2");
        this.kaste.appendChild(this.divPoga2);
 
        // Ievietojam pogas - 2 rinda
        // 7 - pievieno 7 rindas galā
        let kaPoga5 = document.createElement("button" );
        kaPoga5.setAttribute("class","p1");
        kaPoga5.innerHTML="7";
        kaPoga5.onclick=(evt)=>this.kaCip("7");
        this.divPoga2.appendChild(kaPoga5);
        // 8 - pievieno 8 rindas galā
        let kaPoga6 = document.createElement("button" );
        kaPoga6.setAttribute("class","p1");
        kaPoga6.innerHTML="8";
        kaPoga6.onclick=(evt)=>this.kaCip("8");
        this.divPoga2.appendChild(kaPoga6);
         // 9 - pievieno 9 rindas galā
        let kaPoga7 = document.createElement("button" );
        kaPoga7.setAttribute("class","p1");
        kaPoga7.innerHTML="9";
        kaPoga7.onclick=(evt)=>this.kaCip("9");
        this.divPoga2.appendChild(kaPoga7);
        // x poga - reizināšana
        let kaPoga8 = document.createElement("button" );
        kaPoga8.setAttribute("class","p1");
        kaPoga8.innerHTML="x"; //Vajag simbolu 
        kaPoga8.onclick=(evt)=>this.kaMul();
        this.divPoga2.appendChild(kaPoga8);

        
        this.divPoga3 = document.createElement("div");
        this.divPoga3.setAttribute("class", "poga_r3");
        this.kaste.appendChild(this.divPoga3);  
        this.divPoga3.innerText = "Pogu rinda 3";

        this.divPoga4 = document.createElement("div");
        this.divPoga4.setAttribute("class", "poga_r4");
        this.kaste.appendChild(this.divPoga4);    
        this.divPoga4.innerText = "Pogu rinda 4";

        this.divPoga5 = document.createElement("div");
        this.divPoga5.setAttribute("class", "poga_r5");
        this.kaste.appendChild(this.divPoga5); 
        this.divPoga5.innerText = "Pogu rinda 5"; 
    }
    this.statuss = Kalkulators.STATUS_NEINICILIZETS;
    
   } 
   kaCip(cip){
    //cipara pievienošana, ja sākumā ir nulle to noņem
    //ievadu ierobežot līdz 15(?)  cipariem
    let s1;
    s1 = document.getElementById('rezultats').textContent;
    if(s1 == "0")   this.divRez.innerHTML = cip;
    else if(s1.length <14 ) this.divRez.innerHTML = document.getElementById('rezultats').textContent+ cip;
   }   
   kaMul(){
    //reizināšana ?? vajag saglabāt pirmo operandu un darb_kods = 3 (+1,-2,/4)
    ;
   }   
   
   
   kaDiv(){
    //dalīšana, gadījums ar 0!! ?? vajag saglabāt pirmo operandu un darb_kods = 4 (+1,-2,*3)
    ;
   }   
   kaBackspace(){
    //jānodzēš ievadrindas pēdējais simbols
    ;
   }   
   
   
   kaClearInd(){
    this.divRez.innerText = "0";
   }
   kaClearAll(){
    this.divRez.innerText = "0";
    // šeit vēl pārējās dzēšanas
   }  
   
   novakt(){
    if(this.statuss === Kalkulators.STATUS_NOVAKTS) return;
    if(this.konteineris){
        this.konteineris.innerHTML="";
  
        }
        delete this.konteineris
        this.statuss = Kalkulators.STATUS_NOVAKTS; 
    }



    
 //ES6
//Statiskās īpašības
//Kalkulators.STATUS_NEINICILIZETS =0;//neinicil
//Kalkulators.STATUS_SPELE =1;//var minet
//Kalkulators.STATUS_UZVARA =2;//
//Kalkulators.STATUS_ZAUDEJUMS =3;
//Kalkulators.STATUS_NOVAKTS =9;
/*function KK()[
    this.a = 456;*/
}