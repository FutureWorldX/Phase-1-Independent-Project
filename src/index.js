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
const clientClassOfPolicy = document.querySelector("#policyClassName");
const clientPolicyNum = document.querySelector("#policyNum");
const clientPolicyStart = document.querySelector("#policyStart");
const clientPolicyEnd = document.querySelector("#policyEnd");
const clientForm = document.querySelector("#inputForm");
const clientFormButton = document.querySelector("#formSubmit");

window.onload = () => {
    //intializing the ids and classes from the HTML page
    //light and dark mode toggle
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        clientForm.classList.toggle("dark");
    });

    //navbar: class of ui centered grid
    const policyList = document.querySelector("#policyClassName"); //list item in the policy dropdown

        //loading data from the json file
        async function getResponse() {
            //using the provided url for GET API and the async function
            const dbUrl = "https://my-json-server.typicode.com/FutureWorldX/Phase-1-Independent-Project/policy/";
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

                        //event listener for the form submit button
                        clientFormButton.addEventListener('click', function handleClick(event) {
                            //overriding the default form operations
                            event.preventDefault(); 
                            event.stopPropagation();

                            // check if JavaScript found a null/blank empty field in the form
                            let formElements = clientForm.querySelectorAll('input, email, text, textarea, date, tel, select');
                            // find if any of them are empty 
                            let findEmpty = Array.from(formElements).find((element) => {
                                if(element.value.length > 0) {
                                    return false; //proceed because element is not blank
                               } else {
                                return true; // set findEmpty to true because value inputs are of 0 length
                               }
                            });       
                            
                            if(findEmpty){
                                // if so, alert with the error
                                alert(`Kindly check the ${findEmpty.name} input in the form.`);
                            } else {
                                // if is it not empty, submit the HTML form

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

                            //loading values of HTML Form elements
                            const clientNameValue = clientName.value;
                            const companyNameValue = companyName.value;
                            const clientEmailValue = clientEmail.value;
                            const clientPhoneValue = clientPhone.value;
                            const clientPoBoxValue = clientPoBox.value;
                            const clientAddressValue = clientAddress.value;
                            const clientCityValue = clientCity.value;
                            const clientCountyValue = clientCounty.value;
                            const clientClaimReportDateValue = clientClaimReportDate.value;
                            const clientInsuranceTypeValue = clientInsuranceType.value;
                            const clientClassOfPolicyValue = clientClassOfPolicy.value;
                            const clientPolicyNumValue = clientPolicyNum.value;
                            const clientPolicyStartValue = clientPolicyStart.value;
                            const clientPolicyEndValue = clientPolicyEnd.value;
                            
                            // Insert a row at the end of the table
                            let newRow = tblClient.insertRow();
                            let rowClientName = tblClient.insertRow();
                            let rowCompanyName = tblClient.insertRow();
                            let rowClientEmail = tblClient.insertRow();
                            let rowClientPhone = tblClient.insertRow();
                            let rowClientPoBox = tblClient.insertRow();
                            let rowClientAddress = tblClient.insertRow();
                            let rowClientCity = tblClient.insertRow();
                            let rowClientCounty = tblClient.insertRow();
                            let rowClientClaimReportDate = tblClient.insertRow();
                            let rowClientInsuranceType = tblClient.insertRow();
                            let rowClientClassOfPolicy = tblClient.insertRow();
                            let rowClientPolicyNum = tblClient.insertRow();
                            let rowClientPolicyStart = tblClient.insertRow();
                            let rowClientPolicyEnd = tblClient.insertRow();

                            // Insert a cell at the end of the row
                            let newCell = newRow.insertCell();
                            let newCellClientName = rowClientName.insertCell();
                            let newCellCompanyName = rowCompanyName.insertCell();
                            let newCellClientEmail = rowClientEmail.insertCell();
                            let newCellClientPhone = rowClientPhone.insertCell();
                            let newCellClientPoBox = rowClientPoBox.insertCell();
                            let newCellClientAddress = rowClientAddress.insertCell();
                            let newCellClientCity = rowClientCity.insertCell();
                            let newCellClientCounty = rowClientCounty.insertCell();
                            let newCellClientClaimReportDate = rowClientClaimReportDate.insertCell();
                            let newCellClientInsuranceType = rowClientInsuranceType.insertCell();
                            let newCellClientClassOfPolicy = rowClientClassOfPolicy.insertCell();
                            let newCellClientPolicyNum = rowClientPolicyNum.insertCell();
                            let newCellClientPolicyStart = rowClientPolicyStart.insertCell();
                            let newCellClientPolicyEnd = rowClientPolicyEnd.insertCell();

                            // Append a text node to the cell
                            let newText = document.createTextNode('A new Text row has been created.');
                            newCell.appendChild(newText);
                            
                            //creating new value text variables to store the form information
                            let clientNameValueText = document.createTextNode(`Client Name: ${clientNameValue}.`);
                            let companyNameValueText = document.createTextNode(`Company Name: ${companyNameValue}.`);
                            let clientEmailValueText = document.createTextNode(`Email: ${clientEmailValue}.`);
                            let clientPhoneValueText = document.createTextNode(`Phone: ${clientPhoneValue}.`);
                            let clientPoBoxValueText = document.createTextNode(`P.O. Box: ${clientPoBoxValue}.`);
                            let clientAddressValueText = document.createTextNode(`Address: ${clientAddressValue}.`);
                            let clientCityValueText = document.createTextNode(`City or Town: ${clientCityValue}.`);
                            let clientCountyValueText = document.createTextNode(`County: ${clientCountyValue}.`);
                            let clientClaimReportDateValueText = document.createTextNode(`Claim Report Date: ${clientClaimReportDateValue}.`);
                            let clientInsuranceTypeValueText = document.createTextNode(`Insurance Type: ${clientInsuranceTypeValue}.`);
                            let clientClassOfPolicyValueText = document.createTextNode(`Class Of Policy: ${clientClassOfPolicyValue}.`);
                            let clientPolicyNumValueText = document.createTextNode(`Policy Number: ${clientPolicyNumValue}.`);
                            let clientPolicyStartValueText = document.createTextNode(`Policy Start Date: ${clientPolicyStartValue}.`);
                            let clientPolicyEndValueText = document.createTextNode(`Policy End Date: ${clientPolicyEndValue}.`);

                            //appending the new cells to the rows created
                            newCellClientName.appendChild(clientNameValueText); 
                            newCellCompanyName.appendChild(companyNameValueText);
                            newCellClientEmail.appendChild(clientEmailValueText);
                            newCellClientPhone.appendChild(clientPhoneValueText);
                            newCellClientPoBox.appendChild(clientPoBoxValueText);
                            newCellClientAddress.appendChild(clientAddressValueText);
                            newCellClientCity.appendChild(clientCityValueText);
                            newCellClientCounty.appendChild(clientCountyValueText);
                            newCellClientClaimReportDate.appendChild(clientClaimReportDateValueText);
                            newCellClientInsuranceType.appendChild(clientInsuranceTypeValueText);
                            newCellClientClassOfPolicy.appendChild(clientClassOfPolicyValueText);
                            newCellClientPolicyNum.appendChild(clientPolicyNumValueText);
                            newCellClientPolicyStart.appendChild(clientPolicyStartValueText);
                            newCellClientPolicyEnd.appendChild(clientPolicyEndValueText);
                        } //closing if else statement to check if form is not empty

                        }); //closing the event listener when the form button is clicked

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