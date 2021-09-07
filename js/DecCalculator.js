import Calculator from "./Calculator";

class DecCalculator extends Calculator {
    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
          let carryBit = numberX[i] + numberY[i] + result[i];
          if (carryBit === 2) {
            result[i] = 0;
            result[i - 1] = 1;
          } else if (carryBit === 3) {
            result[i] = 1;
            result[i - 1] = 1;
          } else {
            result[i] = carryBit;
          }
        }
        return result;
      }

      changeNumber(root) {
        const input = root.firstElementChild;
        input.innerText = +input.innerText < 9 ? ++input.innerText : 0;
    
        this.checkNumber();
        this.updateResult();
      }
}

export default DecCalculator;