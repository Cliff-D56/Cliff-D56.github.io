//Parameters 
let option = 1 // 1 equals Interest based profit goals, anything else is account based goal
let goal = 100000 // How much full account will have 
let profit = 0 // How much profit from interest is wanted                                       //-423.89 
let interestgoal = 1000


let multiplier = 3
let challenge = 52
let week52 = multiplier * challenge
let monthcount = 0
let yearcount = 0
let monthname = ""
let month = 3//10
let week = 0;
let sum = 7420.41//2000
let payment = 0
let totalpayment = 0
let year = 2024//2023
let monthlyPayment = 0
let interestGold = 0
let info = document.querySelector(".info");
let interest = (sum * .05 / 12) - 5
let interestsum = 0
let membership = document.querySelector("#Interest").value;
let secondpayment = 0
let secondpaymentrate = 29
let secondmultiplier = multiplier - 1
let stock = 1825
let recurring = 1
let align = 1
let deposit = 50 * align

for (let i = 7; i <= challenge; i++) {
    if (week % 2 == 0&&week!=0){
        sum+=deposit
        // console.log(`Balance just got a $${deposit} increase, $${(sum-50).toFixed(2)} was previous balance, $${sum.toFixed(2)} is the new balance`)
    }
    if (week === 4) {
        interest = (sum * .05 / 12) - 5
        week = 1
        month++
        monthcount++
        payment = i
        profit += interest
        sum += interest
        interestsum += interest
        console.log(`For the month of ${monthname} ${year}, $${monthlyPayment+deposit*2} was put aside for savings and $${interest.toFixed(2)} was made in interest`)
        monthlyPayment = 0
        sum -=deposit*2
        stock +=deposit*2
        // console.log(`Hythothetically, the stock balance will be ${stock}`)
    } else {
        week++
    }
    if (month === 13) {
        month = 1
        year++
        yearcount++
    }
    // if (monthcount*12===0){
    //     yearcount++
    // }
    secondpayment = secondpaymentrate * secondmultiplier
    payment = i * multiplier +secondpayment
    totalpayment += i * multiplier + secondpayment
    sum += payment
    monthlyPayment += payment
    switch (month) {
        case 1:
            monthname = "January"
            break;
        case 2:
            monthname = "February"
            break;
        case 3:
            monthname = "March"
            break;
        case 4:
            monthname = "April"
            break;
        case 5:
            monthname = "May"
            break;
        case 6:
            monthname = "June"
            break;
        case 7:
            monthname = "July"
            break;
        case 8:
            monthname = "August"
            break;
        case 9:
            monthname = "September"
            break;
        case 10:
            monthname = "October"
            break;
        case 11:
            monthname = "November"
            break;
        case 12:
            monthname = "December"
            break;
    }
    //console.log(`Payment amount is: $${i*multiplier}, total amount paid is $${totalpayment} on week ${week} of ${monthname},${year} and the interest earned that month is $${interest.toFixed(2)} making profit of $${profit.toFixed(2)} and a Investment balance of $${sum}`)
    const infocard = document.createElement('div')
    // infocard.classList.add('flex-shrink','row')
    infocard.setAttribute("style", "width: 25%")
    infocard.innerHTML = `
    <div class="card">
    <div class="card-body">    
    Payment: $${i * multiplier}<br>
    Second Payment: $${secondpaymentrate * (secondmultiplier)}<br>
    Total Payment: $${i * multiplier+secondpaymentrate * (secondmultiplier)}<br>
    Total: is $${totalpayment}<br>
    Week: ${week}<br>
    Date: ${monthname},${year}<br> 
    Interest: $${interest.toFixed(2)}<br>
    Profit: $${profit.toFixed(2)}<br>
    Investment balance: $${sum.toFixed(2)}<br>
    Investment hypothetical stock balance: $${stock.toFixed(2)}<br>
    Investment hypothetical balance: $${(sum+stock).toFixed(2)}
</div>
</div>
    `
    // monthcard.appendChild(infocard)
    info.appendChild(infocard)
    if (i >= challenge) {
        i = 0
        multiplier++
    }
    if (i === 1) {
        console.log(`On ${monthname} ${year} of week ${week}, finished year of 52 week challenge, now on x${multiplier} multiplier`)
    }


    if(option === 1){
    //Interest Based Profit goal
    if (profit > interestgoal){
        if (yearcount < 1) {
            console.log(`It took $${totalpayment} dollars, ${monthcount} months to make $${interestgoal} off interest alone`)
        }
        else {
            if(monthcount%12===0){
                console.log(`It took $${totalpayment} dollars and ${yearcount} year(s) to make $${interestgoal} off interest alone`)
            }else{
            console.log(`It took $${totalpayment} dollars,${yearcount} years and ${(monthcount - (12*yearcount))} months to make $${interestgoal} off interest alone`)}
        }
        break
    }
    }else{
    //Account Goal
    if (sum >= goal) {
        if (yearcount <= 1) {
            console.log(`It took $${totalpayment} dollars with a interest sum of $${interestsum.toFixed(2)}, ${monthcount} months to reach $${(sum).toFixed(2)} based on interest and payments (${monthname + " " + year})`)
        }
        else {
            console.log(`It took $${totalpayment} dollars  with a interest sum of $${interestsum.toFixed(2)}, ${yearcount.toFixed()} years and ${(monthcount - (12*yearcount)).toFixed(0)} months to reach $${sum.toFixed(2)} based on interest and payments (${monthname + " " + year})`)
        }
        break
    }

    }


    


    if(secondpaymentrate==52){
        secondpaymentrate=0
        secondmultiplier++
        if(secondmultiplier === multiplier){
            console.log(`In ${monthname} Week ${week}, The payment multipliers line up`)
            align+=1
            deposit= 50 * align
        }
    }
    else{
        secondpaymentrate++
    }
}