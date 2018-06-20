function initRepairGet() {
  function doCustomerEmpty() {
    $E("customer_id").value = 0;
    $G("name").reset();
    $G("phone").reset();
  }
  function doInventoryEmpty() {
    $E("inventory_id").value = 0;
    $G("equipment").reset();
    $G("serial").reset();
  }
  initAutoComplete(
    "name",
    WEB_URL + "index.php/repair/model/autocomplete/findCustomer",
    "name,phone",
    doCustomerEmpty
  );
  initAutoComplete(
    "phone",
    WEB_URL + "index.php/repair/model/autocomplete/findCustomer",
    "phone,name",
    doCustomerEmpty
  );
  initAutoComplete(
    "equipment",
    WEB_URL + "index.php/repair/model/autocomplete/findInventory",
    "equipment,serial",
    doInventoryEmpty
  );
  initAutoComplete(
    "serial",
    WEB_URL + "index.php/repair/model/autocomplete/findInventory",
    "serial,equipment",
    doInventoryEmpty
  );
  var doSubmit = function() {
    $E("print").value = this.id == "save_print" ? 1 : 0;
  };
  $G("save").addEvent("click", doSubmit);
  $G("save_print").addEvent("click", doSubmit);
}
