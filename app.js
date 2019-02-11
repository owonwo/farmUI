window.addEventListener('load', () =>{
    // alert('CONNECTED!');

//TRIED TO DO SOMETHING WITH JAVASCRIPT :) I KNOW. IT'S ALL DRY...
//FOR LAYOUTS
    var dashLyt, purchaseLyt, invoiceLyt, accountLyt
    dashLyt = document.querySelector('.dash-lyt');
    purchaseLyt = document.querySelector('.purchase-lyt');
    invoiceLyt = document.querySelector('.invoice-lyt');
    accountLyt = document.querySelector('.account-lyt');

    dashLyt.style.display = 'none';
    purchaseLyt.style.display = 'none';
    invoiceLyt.style.display = 'none';
    accountLyt.style.display = 'none';


    //FOR EVENT LISTENERS
    var dashboard, purchase, invoice, account

    dashboard = document.querySelector('.dashboard');
    purchase = document.querySelector('.purchase');
    invoice = document.querySelector('.invoice');
    account = document.querySelector('.account');


    if(dashboard){
        dashboard.addEventListener('click', () => {
            dashLyt.style.display = 'flex';
            forDashboard();
        })
    }

    if(purchase){
        purchase.addEventListener('click', () => {
            purchaseLyt.style.display = 'block';
            forPurchase();
        })
    }

    if(invoice){
        invoice.addEventListener('click', () => {
            invoiceLyt.style.display = 'block';
            forInvoice();
        })
    }

    if(account){
        account.addEventListener('click', () => {
            accountLyt.style.display = 'flex';
            forAccount();
        })
    }


    //THE DRY CODE BEGINS
    function forDashboard(){
        purchaseLyt.style.display = 'none';
        invoiceLyt.style.display = 'none';
        accountLyt.style.display = 'none';  

    }

    function forPurchase(){
        dashLyt.style.display = 'none';
        invoiceLyt.style.display = 'none';
        accountLyt.style.display = 'none';  
    }

    function forInvoice(){
        dashLyt.style.display = 'none';
        purchaseLyt.style.display = 'none';
        accountLyt.style.display = 'none';  
    }

    function forAccount(){
        dashLyt.style.display = 'none';
        invoiceLyt.style.display = 'none';
        purchaseLyt.style.display = 'none';  
    }

   
    
            
})