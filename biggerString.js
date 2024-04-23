(function (){
      let name = document.querySelector('.i-name');
      let surname = document.querySelector('.i-surname');

      let button = document.querySelector('.str-len');


      button.addEventListener('click',function(){
         let nameLen = name.value.length;
         let surnameLen = surname.value.length;

         if(nameLen > surnameLen)
         {
            alert(name.value + ` length = ${nameLen}`);
            return;
         }
         if(nameLen === surnameLen)
         {
            alert(`length is the same and equal ${nameLen} symbols `);
            return;
         }

            alert(surname.value + `length = ${surnameLen}`);
      })
})()