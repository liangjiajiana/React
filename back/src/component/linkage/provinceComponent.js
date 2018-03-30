import React from 'react'
var Province=React.createClass({
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
        return (
            <select name="province" defaultValue={this.props.pname}>
            {
                allpca.map(function(pca){
                    return <option key={pca.name}  value={pca.name}>{pca.name}</option>;
                })
            }
          </select>
          )
    }
})