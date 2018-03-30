 import React from 'react'
 var City=React.createClass({
    getProvince: function(name){
        for(var i =0;i<allpca.length;i++){
            if(allpca[i].name==name){
                return allpca[i];
            }
        }
      },
    getCity: function (province,cityname){
        for(var i =0;i<province.sub.length;i++){
            if(province.sub[i].name==cityname){
                return province.sub[i];
            }
        }
      },
    render: function () {
    var self=this;
    var province=getProvince(this.props.pname);
    return (
        <select name="city" defaultValue={this.props.cname}>
        {
          province.sub.map(function(city){
            return <option key={city.name} value={city.name}>{city.name}</option>;
          })
        }
        </select>
        )
    }
})