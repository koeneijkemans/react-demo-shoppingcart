const initialProducts = [
    { id: 1, name: "Bitcoin", price: 40000 },
    { id: 2, name: "Auto blauw", price: 10000 },
    { id: 3, name: "Mok met kekke foto", price: 12.5 },
    { id: 4, name: "Foto van Tupac Shakur", price: 75 },
    { id: 5, name: "Laatste aflevering van BOOS", price: 0 },
  ];

const productsReducer = (state = initialProducts, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default productsReducer;