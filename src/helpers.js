export const helpers = {
  getTextFromSelected(string){
    let selectItem =[
      {id:"alpha", value:"Pais"},
      {id:"region", value:"Região"},
      {id:"capital", value:"Capital"},
      {id:"lang", value:"Língua"},
      {id:"alpha", value:"País"},
      {id:"callingcode", value:"Código de ligação"},
    ]
    let element = selectItem.find(x=> x.id==string);
    if(element ===undefined){
      element = {id:"",value:""};
    }
    
    return element.value;
   

  },

}

/*
<option value="alpha" selected >Escolha uma opção</option>
            <option value="region">Região</option>
            <option value="capital">Capital</option>
            <option value="lang">Língua</option>
            <option value="alpha">País</option>
            <option value="callingcode">Código de ligação</option>
*/