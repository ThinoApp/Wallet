export const depenseRecents = [
    {
        id: 1,
        category: "Aliment",
        total: 500,
        date: "10-02-2023"
    },
    {
        id: 2,
        category: "Transport",
        total: 200,
        date: "10-02-2023"
    },
    {
        id: 3,
        category: "Divertissement",
        total: 1500,
        date: "10-02-2023"
    },
 
]


export const statistiqueData = [
        {
          month: "Jan",
          Depense: 300,
          Economie: 500,
          Investissement: 100,
          Revenu: 500,
        },
        { month: "Feb", Depense: 250, Economie: 350, Investissement: 450, Revenu: 300 },
        {
          month: "Mar",
          Depense: 300,
          Economie: 400,
          Investissement: 400,
          Revenu: 100,
        },
        {
          month: "Apr",
          Depense: 550,
          Economie: 450,
          Investissement: 350,
          Revenu: 250,
        },
        {
          month: "May",
          Depense: 500,
          Economie: 500,
          Investissement: 600,
          Revenu: 350,
        },
        {
          month: "Jun",
          Depense: 200,
          Economie: 550,
          Investissement: 650,
          Revenu: 450,
        },
        {
          month: "Jul",
          Depense: 300,
          Economie: 600,
          Investissement: 700,
          Revenu: 300,
        },
        {
          month: "Aug",
          Depense: 550,
          Economie: 650,
          Investissement: 450,
          Revenu: 300,
        },
        {
          month: "Sep",
          Depense: 700,
          Economie: 700,
          Investissement: 800,
          Revenu: 200,
        },
        {
          month: "Oct",
          Depense: 650,
          Economie: 750,
          Investissement: 850,
          Revenu: 500,
        },
        {
          month: "Nov",
          Depense: 700,
          Economie: 800,
          Investissement: 900,
          Revenu: 700,
        },
        {
          month: "Dec",
          Depense: 750,
          Economie: 850,
          Investissement: 950,
          Revenu: 600,
        },
  
];


export const getIconByCategory = (category: string) => {
    switch(category) {
        case "Aliment":
            return "food.png";
        case "Transport":
            return "bus.png";
        case "Divertissement":
            return "multimedia.png";
    }
}