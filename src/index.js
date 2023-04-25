// JavaScript Code here

window.onload = () => {
    //intializing the ids and classes from the HTML page
    //navbar: class of ui centered grid
    const policyList = document.querySelector("#policyClassName"); //list item in the policy dropdown

        //loading data from the json file
        async function getResponse() {
            //using the provided url for GET API and the async function
            const dbUrl = "http://localhost:3000/policy/";
            const response = await fetch(dbUrl);
    
            //using this to get the entire data list
            if (!response.ok) {
                throw new Error(`The response is empty. Please try the request again. HTTP error with the status: ${response.status}`);
            } else {
                const policyData = await response.json(); // Extracting the data as a JSON Object from the response
            
                // a try catch code block to get errors
                try {
                    if (policyData.length > 0) {
                        
                        //making sure that the data is loaded before the page loads with the final information
                        policyData.forEach(function(item) { 
                            let policyItem = document.createElement("option");
                            policyItem.setAttribute('value', item.ClassOfPolicy); //this value will be send to a database
                            policyName = `${item.id}: ${item.ClassOfPolicy}`; //changing the display format for the option select
                            //creating a new list item in the UL list
                            let displayText = document.createTextNode(policyName); //this will be displayed on the website
                            policyItem.appendChild(displayText);
                            policyList.appendChild(policyItem);
                           
                        }); //closing the forEach command when listing Policy classes

                    }// closing when data.length > 0
                else {
                    console.error("The data file is empty. Please try the request again.");
                }
                
            } catch (e) {
                console.error(e);
            } //closing the try catch code

        }//closing the getResponse() function
    }
    getResponse(); //calling the async GET function above that goes through the db.json URL file
}