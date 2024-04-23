function dialogWithUser(){
    alert("Hello, dear User!");
    let moodAnswear = confirm("Do you have mood for visit museum today?");
    if (moodAnswear === true){
        let museumsDataArray = ["met", "uffizi", "stedelijk"];
        
        for(let museumName of museumsDataArray)
        {
            let chooseMuseumAnswer = confirm(museumName);
            if (chooseMuseumAnswer){
                 alert(`${museumName} its nice choose. Good bye`);
                 window.open(`${museumName}.html`,'_blank');
                 break;
            }            
        }
        alert("Let`s stay on main website. Have a nice day!")
    }
    else{
        alert("Have a nice day!")
    }    
}
dialogWithUser();