const Productos = [
    {   
        id: 1,
        titulo:"Vans Negro",
          talles:"39, 40, 41",
           precio: 2500,
            imagen: "https://media.revistagq.com/photos/5fc60d39be088082688e9834/master/w_1600%2Cc_limit/1973657270-01-01.jpg",
             categoryId: 1,
           
    },
    {
        id:2,
        titulo:"Converse Blanco",
          talles:"39, 40, 41",
           precio: 2300,
            imagen: "https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dwb5e2dce7/images/a_107/M7652_A_107X1.jpg?sw=964", 
             categoryId: 2,
        },
    {
        id:3,
        titulo:"Adidas Blanco ",
          talles:"39, 40, 41",
           precio:3500,
            imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Zapatillas_Superstar_Blanco_EG4958_01_standard.jpg",
             categoryId: 3,

        },
    {
        id:4,     
        titulo:"Vans Rojo",
          talles:"39, 40, 41",
           precio:2500,
            imagen: "https://images.vans.com/is/image/VansEU/VN0A38G1VG4-HERO",
            categoryId: 1,

        },
    {
        id:5,   
        titulo:"Converse Negro",
          talles:"39, 40, 41",
           precio:2300,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_847516-MLA48678276086_122021-O.webp",
             categoryId: 2,

        },
        {
            id: 6,   
            titulo:"Vans Azul",
              talles:"39, 40, 41",
               precio:2500,
                imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff03ddbe/products/VA_VN000D3HNVY/VA_VN000D3HNVY-1.JPG",
                 categoryId: 1, 
        },
        {
            id:7,     
             titulo:"Converse Marrones",
               talles:"39, 40, 41",
                 precio:2300,
                   imagen: "https://http2.mlstatic.com/D_NQ_NP_928107-MLA44482725338_012021-O.webp", 
                    categoryId: 2, 
        },
        {
            id:8,      
             titulo:"Adidas Verde",
                talles:"39, 40, 41",
                  precio:3500,
                   imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e95b7e759132479abbe2abeb00ba83dc_9366/Zapatillas_Runfalcon_Verde_G28729_01_standard.jpg",
                    categoryId: 3,
        },
        {
            id:9, 
            titulo:"Adidas Marrones",
              talles:"39, 40, 41",
               precio:3500,
                imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3989fe6ab74341c09821aead00f5f384_9366/zapatilla-gazelle.jpg",
                 categoryId: 3,
    
            }
];

/*
const getList = () => {
    return new Promise ( (resolve, reject) =>{
        setTimeout ( () =>{
            resolve (Productos)
        }, 2000);
    })
}*/



export default Productos;