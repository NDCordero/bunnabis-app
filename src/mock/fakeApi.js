const productos = [
    {
        id: '1',
        name: 'Aceite Relajación Corporal',
        stock: 10,
        price: 14000,
        description: 'Este aceite, compuesto principalmente por delta-9-Tetrahydrocannabinol en estado acido THCa, es decir sin descarboxilar es un aceite especial para los dolores musculares y articulares.',
        image: '../images/aceitecorporal.jpg',
        category: 'Aceites'
    },
    {
        id: '2',
        name: 'Aceite Relajación Mental',
        stock: 10,
        price: 14000,
        description: 'Un aceite de espectro amplio cuyo protagonista es el Cannabidiol o CBD y acompañado armonicamente por otros compuestos como terpenos y otros cannabinoides en menor medida. Pensado y utilizado principalmente en personas con mucha ansiedad, con problemas de descanso o bruxismo.',
        image: '../images/aceitemental.jpg',
        category: 'Aceites'
    },
    {
        id: '3',
        name: 'Aceite Equilibrio',
        stock: 10,
        price: 14000,
        description: 'Como su nombre lo indica, en este aceite de espectro amplio, sus componentes principales, THC y CBD se encuentran en dosis equilibradas, logrando un aceite que aporta los principales beneficios de ambos cannabinoides.',
        image: '../images/aceiteequilibrio.jpg',
        category: 'Aceites'
    },
    {
        id: '4',
        name: 'Jabones',
        stock: 10,
        price: 1000,
        description: 'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        image: '../images/jabon.jpg',
        category: 'Cosmética Natural'
    },
    {
        id: '5',
        name: 'Ungüento corporal',
        stock: 10,
        price: 10000,
        description: 'Realizado con aceite de coco, aceite de oliva, cera de abeja, extracto de cannabis, extracto de lavanda, mentol. Los extractos de cannabis y  lavanda tienen un poder antiinflamatorio, analgésico y antibacterial. El ungüento alivia dolencias articulares y musculares, también es hidratante y cicatrizante.  Es excelente para tatuajes y uso post solar, además el aceite de oliva le aporta propiedades antioxidantes y el mentol le da un efecto refrescante ideal para masajes.',
        image: '../images/unguento.jpg',
        category: 'Cosmética Natural'
    },
    {
        id: '6',
        name: 'Crema de Cannabis y Lavanda',
        stock: 10,
        price: 10000,
        description: 'Crema base, extracto de lavanda, cannabis y oliva. Es relajante, antinflamatoria y mejora el sistema inmune de la piel. Es ideal para tatuajes, su combinación con la lavanda le aporta propiedades analgésicas, disminuye el enrojecimiento y es cicatrizante. Usar directamente sobre la piel a tratar.',
        image: '../images/unguento.jpg',
        category: 'Cosmética Natural'
    },
    {
        id: '7',
        name: 'Bálsamo Labial de Calendula',
        stock: 10,
        price: 3000,
        description: 'Realizado a partir de cera de abejas y una maceración de caléndula y oliva. Es hidratante labial, estimula el colágeno, es antioxidante, mejora visiblemente los labios secos y agrietados suavizándolos y aportando un brillo natural.',
        image: '../images/balsamo.jpg',
        category: 'Cosmética Natural'
    },
    {
        id: '8',
        name: 'Roll On',
        stock: 10,
        price: 3000,
        description: 'Hidrolato de Menta, Cannabis, Eucalipto, Laurel, Albahaca, Romero y otras hierbas mágicas. La sinergia de estas plantas tiene un efecto antiinflamatorio y descongestivo. Actúa directamente sobre el enrojecimiento de la piel causado por sarpullido y picaduras de insectos. También se puede aplicar sobre la sien, hombros, cuellos, muñecas o detrás de las orejas, ayuda a liberar la energía bloqueada, estimular la creatividad y la concentración.',
        image: '../images/balsamo.jpg',
        category: 'Cosmética Natural'
    },
    {
        id: '',
        name: 'Repelente',
        stock: 10,
        price: 4000,
        description: 'Repelente de insectos natural a base de Citronella, Lavanda, Romero y neem ahuyenta los mosquitos cuidando tu piel',
        image: '../images/repelente.jpg',
        category: 'Otros'
    }

    
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema intente mas tarde')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}