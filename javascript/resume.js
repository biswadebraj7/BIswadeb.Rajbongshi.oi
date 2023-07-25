
const progressbar=document.querySelector(".progressbar");

const data=[
    {
        title:"HTML",
        pertenage:"95%"
    },
    {
        title:"CSS",
        pertenage:"85%"
    },
    {
        title:"Bootstrap",
        pertenage:"80%"
    },
    {
        title:"Javascript",
        pertenage:"90%"
    },
    {
        title:"React Js",
        pertenage:"85%"
    },
    {
        title:"Python",
        pertenage:"90%"
    },
    {
        title:"Django",
        pertenage:"80%"
    },
   

    {
        title:"PHP",
        pertenage:"45%"
    },
    {
        title:"Laravel",
        pertenage:"25%"
    }
   

];

const progress=()=>{
    data.map(post=>{
        const cretepost=document.createElement("div");
        cretepost.innerHTML=`

                        <article class="progressbar">
                            <h5>${post.title}</h5>
                            <div class="progress">
                                
                                <div class="progress-bar" role="progressbar" style="width:${post.pertenage}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${post.pertenage}</div>
                              </div>
                        </article>
        `;
        
        progressbar.appendChild(cretepost)

    });


}
progress();


