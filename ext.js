function extMsg(){
    //alert("Message from ext.js");
    d=new Date();
    year=d.getYear();
    month=d.getMonth();
    date=d.getDate();
    alert(date+"-"+month+"-"+year);
}