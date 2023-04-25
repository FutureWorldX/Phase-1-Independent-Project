// JavaScript Code here

//loading existing HTML elements to this JS file
const clientName = document.querySelector("#clientName");
const companyName = document.querySelector("#companyName");
const clientEmail = document.querySelector("#email");
const clientPhone = document.querySelector("#phone");
const clientPoBox = document.querySelector("#po-box");
const clientAddress = document.querySelector("#address");
const clientCity = document.querySelector("#city");
const clientCounty = document.querySelector("#county");
const clientClaimReportDate = document.querySelector("#claimReportDate");
const clientInsuranceType = document.querySelector("#insuranceType");
const clientPolicyNum = document.querySelector("#policyNum");
const clientPolicyStart = document.querySelector("#policyStart");
const clientPolicyEnd = document.querySelector("#policyEnd");

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

                        //create a temporary table that fills in with data when submit button is clicked
                        let tblClientDiv = document.createElement('div');
                        let tblClient = document.createElement("table");

                        //styling the div which holds the table
                        tblClientDiv.style.display = "flex";
                        tblClientDiv.style.margin = "0 auto";
                        tblClientDiv.style.justifyContent = "center";
                        tblClientDiv.style.alignItems = "center";
                        tblClientDiv.style.textAlign = "center";
                        tblClientDiv.style.overflow = "auto";

                        //styling the table
                        tblClient.style.fontFamily = "Arial, sans-serif";
                        tblClient.style.backgroundColor = "mintcream";
                        tblClient.style.padding = "10px";
                        tblClient.style.border = "1px solid #ccc";
                        tblClient.style.borderRadius = "5px";
                        
                        //appending the new div and table to the HTML document body
                        tblClientDiv.appendChild(tblClient);
                        document.body.appendChild(tblClientDiv);

                        // Insert a row at the end of the table
                        let newRow = tblClient.insertRow();

                        // Insert a cell at the end of the row
                        let newCell = newRow.insertCell();

                        // Append a text node to the cell
                        let newText = document.createTextNode('A new Text row has been created.');
                        newCell.appendChild(newText);

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