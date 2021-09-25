function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='d9fb4aca49b32d15d18da51f1d55fce5';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    buscar1(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            console.log(resultado.main)

            document.getElementById("lista").innerHTML=`<h1> Temp: ${resultado.main.temp}</h1>
                                                        <h2> Temp Minima: ${resultado.main.temp_min}</h2>
                                                        <h3> Temp Maxima: ${resultado.main.temp_max}</h3>`;
           
      });


}


const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML=`<h1> Temp: ${resultado.main.temp}</h1>
                                                        <h2> Temp Minima: ${resultado.main.temp_min}</h2>
                                                        <h3> Temp Maxima: ${resultado.main.temp_max}</h3>`;

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
            document.getElementById("lista").innerHTML=`<h1> Temp: ${resultado.main.temp}</h1>
            <h2> Temp Minima: ${resultado.main.temp_min}</h2>
            <h3> Temp Maxima: ${resultado.main.temp_max}</h3>`;
        })

    }

}    
