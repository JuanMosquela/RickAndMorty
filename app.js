

document.addEventListener('DOMContentLoaded', () => {
    fetchData()

})

const fetchData = async () => {    
  try{ 
     loadingData(true);
     const res = await fetch ("https://rickandmortyapi.com/api/character");
     const data = await res.json();
     pintarCard(data);
    }
  catch(err){
      console.log('Error')
    }
  finally{
     loadingData(false)
    }    
}

  const pintarCard = (data) => {
    const cards = document.getElementById('card');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment()
    data.results.forEach(el => {
      const clone = templateCard.cloneNode(true);
      clone.querySelector('h5').textContent = el.name;
      clone.querySelector('p').textContent = el.status;
      clone.querySelector('img').setAttribute('src' , el.image);
      fragment.appendChild(clone)    
     
    }); 
    
   cards.appendChild(fragment)
  }  

  
   
  const loadingData = (estado) => {
    const loading = document.getElementById('loading');

    if(estado){
     loading.classList.remove('d-none');
    }
    else{
     loading.classList.add('d-none');

    }      
       
   }