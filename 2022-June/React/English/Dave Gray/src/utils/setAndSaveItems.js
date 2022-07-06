export  default function setAndSaveItems (listItems,setItems)  {
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
}