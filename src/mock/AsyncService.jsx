const products = [
    {
        id:"01",
        name:"Cama nidito",
        price:15000,
        description:"Cama nido antiestres, confeccionado con piel sintetica 100% vegano y relleno de fibra siliconada",
        stock:10,
        img:"https://i.postimg.cc/c4b1jwXR/4-removebg-preview.png",
        category:"camas"
    },
    {
        id:"02",
        name:"Cama iglu para gatos",
        price:20000,
        description:"Cama con forma de iglu para gatos, confeccionada en plush y algodon de alta resistencia para que mantenga la forma, su parte inferior es antideslizante y resistente al agua",
        stock:25,
        img:"https://i.postimg.cc/s2RJYQdz/cama-tipo-casa-semicerrada-para-gato.jpg",
        category:"camas"
    },
    {
        id:"03",
        name:"Cama bolsa de dormir para perros",
        price:25000,
        description:"Cama forrada con polar estampado en el exterior y corderito en el interior. Con algodon de alta resistencia en su base para un mejor aislamiento del suelo",
        stock:12,
        img:"https://i.postimg.cc/nrbyDKYJ/como-elegir-una-cama-para-mi-perro-23409-paso-8-600.jpg",
        category:"camas"
    },
    {
        id:"04",
        name:"Cama bolsa de dormir para gatos",
        price:12000,
        description:"Cama de peluche con interior de vellon siliconado, base antideslizante y desmontable para facilitar el lavado. Apta para lavarropas",
        stock:14,
        img:"https://i.postimg.cc/hGKh9xsV/D-NQ-NP-780562-MLC45604018343-042021-O-cama-saco-para-dormir-de-gato-cachorro-suave-y-calido.webp",
        category:"camas"
    },
    {
        id:"05",
        name:"Cama grande antidesgarros",
        price:30000,
        description:"Cama para con doble base compuesta por un colchon de alta resistencia en la parte inferior y una capa de colchon viscoelastico en la parte superior. Vellon siliconado alrededor para ofrecer mayor relajacion y soporte, tela antidesgarros y antimanchas con costuras reforzadas.",
        stock:10,
        img:"https://i.postimg.cc/gjWCgT7z/jamie-street-s9-Tf1e-BDFqw-unsplash-scaled.jpg",
        category:"camas"
    },
    {
        id:"06",
        name:"Rascador para gatos con palancas",
        price:10000,
        description:"Juguete multifuncional con tabla rascadora, cinco ratones y un juguete suave con resorte, fabricado en madera, no toxico y respetuoso con el medio ambiente",
        stock:15,
        img:"https://i.postimg.cc/0QPkgqFm/4749.jpg",
        category:"juguetes"
    },
    {
        id:"07",
        name:"Pelota erizo",
        price:6000,
        description:"Pelota con textura suave confeccionada en caucho termoplastico, rebota y flota en el agua",
        stock:14,
        img:"https://i.postimg.cc/XvgdZG0s/644004ee4dfa8-r-d-2668-1553-2274.jpg",
        category:"juguetes"
    },
    {
        id:"08",
        name:"Pelota erizo resistente",
        price:5000,
        description:"Pelota con textura super resistente para perros con mordidas fuertes, confeccionada en caucho termoplastico",
        stock:11,
        img:"https://i.postimg.cc/VkKbmy9h/las-mejores-pelotas-indestructibles-para-perros-26730-orig.jpg",
        category:"juguetes"
    },
    {
        id:"09",
        name:"Juguete tejido para gatos",
        price:7000,
        description:"Juguete tejido con cascabel, en el interior contiene un tubo de carton corrugado ultra resistente para mantener la forma",
        stock:16,
        img:"https://i.postimg.cc/xC8zrHWL/PATRON-GRATIS-Juguete-para-Gato-en-Crochet-1.jpg",
        category:"juguetes"
    },
    {
        id:"10",
        name:"Juguete hueso de soga",
        price:5500,
        description:"Fabricado en soga de algodon resistente, ideal para reducir el estres y promover la salud dental al ayudar a limpiar los dientes y encias mientras juegan.",
        stock:12,
        img:"https://i.postimg.cc/7YsxLqcS/perro-jugando-cuerda.jpg",
        category:"juguetes"
    },
    {
        id:"11",
        name:"Sweater de panda",
        price:7500,
        description:"Abrigo de corderito con capucha forrada. Espalda combinada y pompon, tiene un ojal en la espalda para pasar la correa",
        stock:20,
        img:"https://i.postimg.cc/YSZbspP2/01-1612902130-6321277e9d978.jpg",
        category:"ropa"
    },
    {
        id:"12",
        name:"Buzo con capucha",
        price:7700,
        description:"Buzo frizado con ojitos en la capucha y cordon para regularla confeccionado con costuras dobles para mayor durabilidad",
        stock:22,
        img:"https://i.postimg.cc/t4V1zpFN/61mztrh-Tfe-L.jpg",
        category:"ropa"
    },
    {
        id:"13",
        name:"Campera para nieve",
        price:15000,
        description:"Campera impermeable forrada en su interior con polar para mantener el calor corporal, es ajustable y tiene lineas reflectivas",
        stock:24,
        img:"https://i.postimg.cc/k5pv5PcG/chilly-dogs-great-white-north-in-red-and-black.jpg",
        category:"ropa"
    },
    {
        id:"14",
        name:"Abrigo forrado para nieve",
        price:14000,
        description:"Es resistente al agua y al viento. Por dentro esta forrado con corderito, con correas entrecruzadas ajustables para evitar deslizamientos",
        stock:18,
        img:"https://i.postimg.cc/15FMYnh8/Dog-Coat-Baker-Plaid-Navy.jpg",
        category:"ropa"
    },
    {
        id:"15",
        name:"Sweater de lana",
        price:13000,
        description:"Confeccionado a mano con lana de oveja, esta realizado con un trenzado artesanal para garantizar una temperatura optima",
        stock:17,
        img:"https://i.postimg.cc/6pRSRb51/olive-cable-knit-dog-sweater-paikka-paco-and-lucia-3.jpg",
        category:"ropa"
    }
]
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject("Error, intente mas tarde")
            }
        },1000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject("Error, intente mas tarde")
            }
        },1000)
    })
}