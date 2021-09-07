import Calculator from "./Calculator";

class DecCalculator extends Calculator {
    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
          let carryBit = numberX[i] + numberY[i] + result[i];
          if (carryBit === 10) {
            result[i] = 0;
            result[i - 1] = 1;
          } else if (carryBit === 11) {
            result[i] = 1;
            result[i - 1] = 1;
          }   else if (carryBit === 12) {
            result[i] = 2;
            result[i - 1] = 1;
          } else if (carryBit === 13) {
            result[i] = 3;
            result[i - 1] = 1;
          } else if (carryBit === 14) {
            result[i] = 4;
            result[i - 1] = 1;
          } else if (carryBit === 15) {
            result[i] = 5;
            result[i - 1] = 1;
          } else if (carryBit === 16) {
            result[i] = 6;
            result[i - 1] = 1;
          } else if (carryBit === 17) {
            result[i] = 7;
            result[i - 1] = 1;
          }  else if (carryBit === 18) {
            result[i] = 8;
            result[i - 1] = 1;
          } else if (carryBit === 19) {
            result[i] = 9;
            result[i - 1] = 1;
          }else {
            result[i] = carryBit
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