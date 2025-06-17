function inventoryQuantity(quantity){
    try {
        if (quantity<5){
            throw new Error("Low inventory warning");
        }
    }
    catch (error) {
        console.log(error.name + ":", error.message);
    }

}
inventoryQuantity(3);