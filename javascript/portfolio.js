/**my porfolio */

const contain=document.querySelector(".contain");
const btn=document.querySelectorAll(".btn");
const item=document.querySelectorAll(".item");

contain.addEventListener("click",()=>{
    btn.forEach((btns)=>{
        btns.addEventListener("click",(e)=>{
            console.log()
            const id=e.target.dataset.id;
            console.log(e.target.dataset.id);
            item.forEach((items)=>{
                if(id=="all"){
                    items.style.display="block";
                    
                }else{
                    if(items.classList.contains(id)){
                        items.style.display="block";
                     
                      
                    }else{
                        items.style.display="none"
                    }
                }
            })
        })
    })

});

const data=[
    {
        id:"all",
        picture:"../images/10016.jpg",
    },
    {
        id:"work",
        picture:"../images/10017.jpg",
    },
    {
        id:"elementor",
        picture:"../images/10018.jpg",
    },
  
    {
        id:"ecommerce",
        picture:"../images/10019.jpg",
    },
    {
        id:"blog",
        picture:"../images/10020.jpg",
    },

    {
        id:"others",
        picture:"../images/10021.jpg",
    },
    {
        id:"all",
        picture:"../images/10022.jpg",
    },
    {
        id:"work",
        picture:"../images/10023.jpg",
    },
    {
        id:"elementor",
        picture:"../images/10024.jpg",
    },
    
    {
        id:"ecommerce",
        picture:"../images/10025.jpg",
    },
    {
        id:"blog",
        picture:"../images/10026.jpg",
    },

    {
        id:"others",
        picture:"../images/10027.jpg",
    },

    {
        id:"all",
        picture:"../images/10028.jpg",
    },
    {
        id:"work",
        picture:"../images/10029.jpg",
    },
    {
        id:"elementor",
        picture:"../images/10018.jpg",
    },
   
    {
        id:"ecommerce",
        picture:"../images/10020.jpg",
    },
    {
        id:"blog",
        picture:"../images/10021.jpg",
    },

    {
        id:"others",
        picture:"../images/10022.jpg",
    },

    {
        id:"all",
        picture:"../images/10023.jpg",
    },
    {
        id:"work",
        picture:"../images/10024.jpg",
    },
    {
        id:"elementor",
        picture:"../images/10025.jpg",
    },
  
    {
        id:"ecommerce",
        picture:"../images/10027.jpg",
    },
    {
        id:"blog",
        picture:"../images/10028.jpg",
    },

    {
        id:"others",
        picture:"../images/10029.jpg",
    }
 

];
const content=document.querySelector(".content");
window.addEventListener("DOMContentLoaded",()=>{


    data.forEach((datas)=>{
        const createshow=document.createElement("div");
        createshow.classList.add("col-lg-4")
        createshow.classList.add("col-md-6")
        createshow.classList.add("col-sm-12")
        const{id,picture}=datas;
        createshow.innerHTML=
        `
        <section  class="content">
        <div class="col-md-4 photos">
       
          <div class="item active ${id}">
              <div class="photo">
                  <img src="${picture}" alt="">
              </div>
             </div>
        </div>
        </section>

        `;
       content.appendChild(createshow);
    });

});

