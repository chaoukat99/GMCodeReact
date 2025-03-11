// Fetch


// Http request Method

// GET POST DELETE PUT

// GET (de lire des données a partir d'un serveur)
// POST (de créer qlq ressources dur le serveur )

// DELETE (de supprimer un ressource sur un serveur)
// PUT (de modifier une ressources qui se trouve sur le serveur )


// GET
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then((data)=>{
    console.log(data)
})
// POST
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        data:"Data a énoyé"
    })
})
.then(res=>res.json())
.then((data)=>{
    console.log(data)
})


