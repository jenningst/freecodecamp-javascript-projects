/**
 * Provides a status from a cash drawer with the correct change or a status.
 * @param {int} price The purchase price.
 * @param {int} cash The cash received.
 * @param {arr} cid An object with the total cash in the drawer.
 * @return {obj} The correct change and status from the drawer.
 */

// My Solution
function checkCashRegister(price, cash, cid) {

    let status = "OPEN";
    let cashInDrawer = {
        'ONE HUNDRED': { value: 10000, amount: 0 },
        'TWENTY': { value: 2000, amount: 0 },
        'TEN': { value: 1000, amount: 0 },
        'FIVE': { value: 500, amount: 0 }, 
        'ONE': { value: 100, amount: 0 },
        'QUARTER': { value: 25, amount: 0 },
        'DIME': { value: 10, amount: 0 },
        'NICKEL': { value: 5, amount: 0 },
        'PENNY': { value: 1, amount: 0 } 
    }       
    
    // initializes cashInDrawer from the cid values
    cid.forEach(element => {
        let [money, amount] = element;
        cashInDrawer[money]['amount'] = amount*100;
    });

    // gets the total cash in Drawer as a number
    function getTotalCash() {
        let totalCash = 0;
        Object.keys(cashInDrawer).forEach(key => {
            totalCash += cashInDrawer[key].amount*100;                
        })
        return totalCash/100;
    }

    /// gets the current cashInDrawer as an array
    function getChangeValues() {
        let arr = [];
        Object.keys(cashInDrawer).forEach(key => {
            arr.push([key.toUpperCase().replace(' ', ''), cashInDrawer[key]['amount']/100]);
        })
        return arr;
    }

    // makes change from the available cashInDrawer
    let totalCash = getTotalCash();
    // console.log(`total cash in drawer: ${totalCash}`);
    
    const totalChangeNeeded = cash*100 - price*100;
    let remainingChangeNeeded = totalChangeNeeded; // initialize remaining change needed
    // console.log(`total change needed: ${totalChangeNeeded}`);

    // look in the drawer
    if (totalCash < totalChangeNeeded) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
        let totalArr = [];
        let dividesIntoChange = 0;
        while (remainingChangeNeeded > 0) { // attempt to make change
            Object.keys(cashInDrawer).forEach(key => { // start looking through each bill/coin
                // console.log(`\tCHECKING [${cashInDrawer[key]['value']}]; REMAINING [${remainingChangeNeeded}]`);
                let coinTray = cashInDrawer[key]['value']; // e.g. 100, 0.25
                let coinAmount = cashInDrawer[key]['amount']; // e.g. 300, 4.25                
                
                if (coinAmount > 0) { // is there money in this tray?
                    if (!(coinTray > remainingChangeNeeded)) { // does pulling a single bill/coin give too much change?
                        dividesIntoChange = Math.floor(remainingChangeNeeded / coinTray);
                        let counter = 0;
                        while (coinAmount > 0) { // start collecting bills/coins : start reducing bills/coins                    
                            remainingChangeNeeded -= coinTray; // reduce our change needed
                            cashInDrawer[key]['amount'] -= coinTray; // reduce our tray
                            coinAmount = cashInDrawer[key]['amount']; // update our coin amount
                            totalCash -= coinTray; // reduce total cash
                            // console.log(`\t\tGAVE CHANGE [${coinTray}]; new tray amount [${coinAmount}]; new remaining change amount [${remainingChangeNeeded}]`);
                            counter++;
                            if (remainingChangeNeeded < coinTray) { // should we stop giving bills/coins?                                
                                break;
                            }
                        }
                        totalArr.push([key, (counter * coinTray / 100)]);
                    } else { // bill/coin would give too much change
                        totalArr.push([key, 0]);
                    }
                } else { // bill/coin tray is empty
                    totalArr.push([key, 0]);
                }
            })
            if (remainingChangeNeeded > 0) { // we weren't able to make change
                return { status: "INSUFFICIENT_FUNDS", change: [] };
            }
        }

        if (totalCash > 0) { // return open
            // filter the array for elements that have a non-zero second element
            let filteredTotal = totalArr.filter(subArray => subArray[1] != 0)
            return { status: "OPEN", change: filteredTotal};
        } else { // return closed
            return { status: "CLOSED", change: totalArr.reverse()}
        }
    }
};

// Tests
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 1], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]]));
    // should return { status: "INSUFFICIENT_FUNDS", change: [] }

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]]));
    // should return { status: "INSUFFICIENT_FUNDS", change: [] }

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]])); 
    //should return { status: "OPEN", change: [
    //    ["TWENTY", 60], 
    //    ["TEN", 20], 
    //    ["FIVE", 15], 
    //    ["ONE", 1], 
    //    ["QUARTER", 0.5], 
    //    ["DIME", 0.2], 
    //    ["PENNY", 0.04]] }

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]]));
    // should return { status: "CLOSED", change: [
    //     ["PENNY", 0.5], 
    //     ["NICKEL", 0], 
    //     ["DIME", 0], 
    //     ["QUARTER", 0], 
    //     ["ONE", 0], 
    //     ["FIVE", 0], 
    //     ["TEN", 0], 
    //     ["TWENTY", 0], 
    //     ["ONE HUNDRED", 0]] }