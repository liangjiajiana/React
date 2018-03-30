 import React from 'react'
var Area=React.createClass({
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
     var city=getCity(province,this.props.cname);
      return (
        <select name="area" defaultValue={this.props.aname}>
            {
                city.sub.map(function(area){
                    return <option key={area.name} value={area.name}>{area.name}</option>;
                })
            }
        </select>
      )
   }
})