// JavaScript Code here

//loading existing HTML elements to this JS file
const clientName = document.querySelector("#clientName");
const clientTaxKRAPin = document.querySelector("#taxKRAPin");
const clientEmail = document.querySelector("#email");
const clientPhone = document.querySelector("#phone");
const clientPoBox = document.querySelector("#po-box");
const clientAddress = document.querySelector("#address");
const clientCity = document.querySelector("#city");
const clientCounty = document.querySelector("#county");
const clientInfoReportDate = document.querySelector("#clientInfoReportDate");
const clientInsuranceType = document.querySelector("#insuranceType");
const clientClassOfPolicy = document.querySelector("#policyClassName");
const clientPolicyNum = document.querySelector("#policyNum");
const clientPolicyStart = document.querySelector("#policyStart");
const clientPolicyEnd = document.querySelector("#policyEnd");
const clientForm = document.querySelector("#inputForm");
const clientFormButton = document.querySelector("#formSubmit");
const loadingSpinner = document.querySelector("#loader");

//loading the Insurance Client Information table
const tblTableClientInfo = document.querySelector(".tableInfo");
const tblClientId = document.querySelector("#tdClientId");
const tblClientName = document.querySelector("#tdClientName");
const tblCompanyName = document.querySelector("#tdTaxKRAPin");
const tblClientEmail = document.querySelector("#tdEmail");
const tblClientPhone = document.querySelector("#tdPhone");
const tblClientPoBox = document.querySelector("#tdPoBox");
const tblClientAddress = document.querySelector("#tdAddress");
const tblClientCity = document.querySelector("#tdCity");
const tblClientCounty = document.querySelector("#tdCounty");
const tblclientInfoReportDate = document.querySelector("#tdClientInfoReportDate");
const tblClientInsuranceType = document.querySelector("#tdInsuranceType");
const tblClientClassOfPolicy = document.querySelector("#tdPolicyClassName");
const tblClientPolicyNum = document.querySelector("#tdPolicyNum");
const tblClientPolicyStart = document.querySelector("#tdPolicyStart");
const tblClientPolicyEnd = document.querySelector("#tdPolicyEnd");

window.onload = () => {
    //intializing the ids and classes from the HTML page
    //light and dark mode toggle
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        clientForm.classList.toggle("dark");
        tblTableClientInfo.classList.toggle("dark");
    });

    //navbar: class of ui centered grid
    const policyList = document.querySelector("#policyClassName"); //list item in the policy dropdown

        //loading data from the json file
        async function getResponse() {
            //using the provided url for GET API and the async function
            const dbUrl = "https://my-json-server.typicode.com/FutureWorldX/Phase-1-Independent-Project/policy/";
            const response = await fetch(dbUrl);
            const clientDbUrl = "https://my-json-server.typicode.com/FutureWorldX/Phase-1-Independent-Project/clients/";
            const clientDbResponse = await fetch(clientDbUrl);
    
            //using this to get the entire data list
            if (!response.ok) {
                throw new Error(`The response is empty. Please try the request again. HTTP error with the status: ${response.status}`);
            } else {
                const policyData = await response.json(); // Extracting the data as a JSON Object from the response
                const clientData = await clientDbResponse.json(); // Extracting the data as a JSON Object from the response
            
                // a try catch code block to get errors
                try {
                    if (policyData.length > 0) {

                        //hiding the loading spinner as defined in the CSS file
                        loadingSpinner.style.display = "none";
                        
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

                        //adding to the client details table
                        if(clientData.length > 0) {
                            clientData.forEach(function(clientItem) {
                                const dataRow = document.createElement('tr');
                                //console.log(clientItem);
                                 for (let item in clientItem) {
                                    const dataCell = document.createElement('td');
                                    //loading the value using clientItem[item] from JSON instead of item
                                    dataCell.textContent = clientItem[item]; 
                                    //adding the cell of clientItem[item] to the data row
                                    dataRow.appendChild(dataCell);
                                };
                                  //adding the rows to the table 
                                  tblTableClientInfo.appendChild(dataRow);
                            }
                            
                            ); //closing the forEach function when listing clients
                            //tblTableClientInfo.appendChild(tblClientName);

                        } //closing the if else when clientData is greater than 0

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

                            //loading values of HTML Form elements
                            const clientNameValue = clientName.value;
                            const clientTaxKraValue = clientTaxKRAPin.value;
                            const clientEmailValue = clientEmail.value;
                            const clientPhoneValue = clientPhone.value;
                            const clientPoBoxValue = clientPoBox.value;
                            const clientAddressValue = clientAddress.value;
                            const clientCityValue = clientCity.value;
                            const clientCountyValue = clientCounty.value;
                            const clientInfoReportDateValue = clientInfoReportDate.value;
                            const clientInsuranceTypeValue = clientInsuranceType.value;
                            const clientClassOfPolicyValue = clientClassOfPolicy.value;
                            const clientPolicyNumValue = clientPolicyNum.value;
                            const clientPolicyStartValue = clientPolicyStart.value;
                            const clientPolicyEndValue = clientPolicyEnd.value;
                            
                            // Insert a row at the end of the table
                            let newRow = tblTableClientInfo.insertRow();

                            // Insert a cell at the end of the row
                            let newCell = newRow.insertCell();
                            let newCellClientName = newRow.insertCell();
                            let newCellTaxKraPin = newRow.insertCell();
                            let newCellClientEmail = newRow.insertCell();
                            let newCellClientPhone = newRow.insertCell();
                            let newCellClientPoBox = newRow.insertCell();
                            let newCellClientAddress = newRow.insertCell();
                            let newCellClientCity = newRow.insertCell();
                            let newCellClientCounty = newRow.insertCell();
                            let newCellclientInfoReportDate = newRow.insertCell();
                            let newCellClientInsuranceType = newRow.insertCell();
                            let newCellClientClassOfPolicy = newRow.insertCell();
                            let newCellClientPolicyNum = newRow.insertCell();
                            let newCellClientPolicyStart = newRow.insertCell();
                            let newCellClientPolicyEnd = newRow.insertCell();

                            // Append a text node to the cell
                            let newText = document.createTextNode('new');
                            newCell.appendChild(newText);
                            
                            //creating new value text variables to store the form information
                            let clientNameValueText = document.createTextNode(clientNameValue);
                            let clientTaxKraPinValueText = document.createTextNode(clientTaxKraValue);
                            let clientEmailValueText = document.createTextNode(clientEmailValue);
                            let clientPhoneValueText = document.createTextNode(clientPhoneValue);
                            let clientPoBoxValueText = document.createTextNode(clientPoBoxValue);
                            let clientAddressValueText = document.createTextNode(clientAddressValue);
                            let clientCityValueText = document.createTextNode(clientCityValue);
                            let clientCountyValueText = document.createTextNode(clientCountyValue);
                            let clientInfoReportDateValueText = document.createTextNode(clientInfoReportDateValue);
                            let clientInsuranceTypeValueText = document.createTextNode(clientInsuranceTypeValue);
                            let clientClassOfPolicyValueText = document.createTextNode(clientClassOfPolicyValue);
                            let clientPolicyNumValueText = document.createTextNode(clientPolicyNumValue);
                            let clientPolicyStartValueText = document.createTextNode(clientPolicyStartValue);
                            let clientPolicyEndValueText = document.createTextNode(clientPolicyEndValue);

                            //appending the new cells to the rows created
                            newCellClientName.appendChild(clientNameValueText); 
                            newCellTaxKraPin.appendChild(clientTaxKraPinValueText);
                            newCellClientEmail.appendChild(clientEmailValueText);
                            newCellClientPhone.appendChild(clientPhoneValueText);
                            newCellClientPoBox.appendChild(clientPoBoxValueText);
                            newCellClientAddress.appendChild(clientAddressValueText);
                            newCellClientCity.appendChild(clientCityValueText);
                            newCellClientCounty.appendChild(clientCountyValueText);
                            newCellclientInfoReportDate.appendChild(clientInfoReportDateValueText);
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