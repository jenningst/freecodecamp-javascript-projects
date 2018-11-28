/**
 * Provides a status from a cash drawer with the correct change or a status.
 * @param {int} price The purchase price.
 * @param {int} cash The cash received.
 * @param {arr} cid An object with the total cash in the drawer.
 * @return {obj} The correct change and status from the drawer.
 */

// My Solution
function checkCashRegister(price, cash, cid) {
    var change;
    // create a class for the cash drawer that maps the current cash
    // functions:
    // getTotalAmount: gets the current value in cash for the drawer
    // 
    let Drawer = function(cid) {

        let cashInDrawer = {
            one_hundred: {
                value: 100.00,
                amount: 0
            },
            twenty: {
                value: 20.00,
                amount: 0
            },
            ten: {
                value: 10.00,
                amount: 0
            },
            five: {
                value: 5.00,
                amount: 0
            },
            one: {
                value: 1.00,
                amount: 0
            },
            quarter: {
                value: 0.25,
                amount: 0
            },
            dime: {
                value: 0.10,
                amount: 0
            },
            nickel: {
                value: 0.05,
                amount: 0
            },
            penny: {
                value: 0.01,
                amount: 0
            } 
        }
        
        cid.forEach(element => {
            let [money, amount] = element;
            cashInDrawer[money.toLowerCase().replace(' ', '_')]['amount'] = amount;
        });

        this.getTotalCash = function() {
            let totalCash = 0.00;
            Object.keys(cashInDrawer).forEach(key => {
                totalCash += cashInDrawer[key].amount*100;                
            })
            return totalCash/100;
        }

        this.getChangeValues = function() {
            let arr = [];
            Object.keys(cashInDrawer).forEach(key => {
                arr.push([key.toUpperCase().replace(' ', ''), cashInDrawer[key]['amount']]);
            })
            return arr;
        }

        this.makeChange = function () {
            let dividesIntoChange = 0;
            let changeGiven = 0;
            let changeNeeded = cash - price;
            
            while (changeNeeded > 0) {                
                Object.keys(cashInDrawer).forEach(key => {                    
                    if (cashInDrawer[key]['amount'] !== 0) {
                        dividesIntoChange = Math.floor(changeNeeded / cashInDrawer[key]['value']);

                        // check that we have enough change
                        if (cashInDrawer[key]['amount'] >= dividesIntoChange * cashInDrawer[key]['value']) { 
                            changeGiven = dividesIntoChange * cashInDrawer[key]['value'];
                            cashInDrawer[key]['amount'] -= changeGiven;
                            changeNeeded -= changeGiven;
                        }
                    }
                })
            }
            return this.getChangeValues();
        }
    };

    let drawer = new Drawer(cid);
    let checkClosed = drawer.makeChange();
    let updatedChange = drawer.getChangeValues();
    if (checkClosed == cash - price) {
        return { status: "CLOSED", updatedChange}
    }
    // console.log(drawer.getChangeValues());
    
    if (drawer.getTotalCash() < cash - price){
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
}

// Tests
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0.5], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]])); 
    // should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }