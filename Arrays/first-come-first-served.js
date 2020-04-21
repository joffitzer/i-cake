// Given all three arrays, write a function to check that my service is first-come, first-served. 
// All food should come out in the same order customers requested it.

// EXAMPLE THAT SHOULD RETURN FALSE:
// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]

// EXAMPLE THAT SHOULD RETURN TRUE:
// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 3, 5, 4, 6]



function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    let takeOutOrdersIndex = 0;
    let dineInOrdersIndex = 0;
    let takeOutOrdersMaxIndex = takeOutOrders.length - 1;
    let dineInOrdersMaxIndex = dineInOrders.length - 1;

    for (let i = 0; i < servedOrders.length; i++) {
        let order = servedOrders[i];

        // if we still have orders in takeOutOrders
        // and the current order in takeOutOrders is the same
        // as the current order in servedOrders
        if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
                order === takeOutOrders[takeOutOrdersIndex]) {
            takeOutOrdersIndex++;

        // if we still have orders in dineInOrders
        // and the current order in dineInOrders is the same
        // as the current order in servedOrders
        } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
                order === dineInOrders[dineInOrdersIndex]) {
            dineInOrdersIndex++;

        // if the current order in servedOrders doesn't match the current
        // order in takeOutOrders or dineInOrders, then we're not serving first-come,
        // first-served
        } else {
            return false;
        }
    }

    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrders.length ||
           takeOutOrdersIndex != takeOutOrders.length) {
        return false;
    }

    // all orders in servedOrders have been "accounted for"
    // so we're serving first-come, first-served!
    return true;
}


// Complexity: 
// O(n) time and O(1) additional space.