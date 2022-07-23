import React from 'react';
var ifsc = require('ifsc-finder');

function IFSC() {
  ifsc.get(IFSC_code).then(function(res){
    console.log(res);
})
  ifsc.getBankName(IFSC_code).then(function(res){
    console.log(res);
})
  getBranchName(IFSC_Code).then(function(res){
    console.log(res);
})
  }

  return(
    var details_list = ['bank','branch',]
ifsc.get(IFSC_code, details_list).then(function(res){
    console.log(res);
})

export default IFSC;