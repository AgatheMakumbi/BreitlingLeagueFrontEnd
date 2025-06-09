import { ref } from 'vue'

export const verifySelection = (valueToverify, emit,message) => {
  if (valueToverify) {
    console.log("Selection verified:", valueToverify);

    if (message.includes("opponent")) {
      emit('update:isOpponentSelected', true);
    }else if (message.includes("theme")) {
      emit('update:isThemeSelected', true);
    }
    return true;
  } else {
    const errorElement = document.querySelector(".errorMessages");
    if (errorElement) {
      errorElement.textContent = ` ${message}`;
    }
    return false;
  }
};

export function pickRandom(itemList) {
  
  if (itemList.length > 0) {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    return itemList[randomIndex];
  }

}