import React from 'react'

var Pca=React.createClass({
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
        getInitialState: function () {
          return { province: "山西省",city:"运城市",area:"盐湖区"};
        },
        getSel:function(event){
          var targetname= event.target.getAttribute("name");
          if(targetname=="province"){
          var province=getProvince(event.target.value);
          var str=event.target.value
          console.log(province)
            this.setState(function(state) {
                state.province=str;
                state.city=province.sub[0].name;
                state.area=province.sub[0].sub[0].name;
                return state;
            })
          }
          else if(targetname=="city"){
              console.log('city')
              var province=getProvince(this.state.province);
              var city=getCity(province,event.target.value);
              var str=event.target.value
              this.setState(function(state) {
                state.city=str;
                state.area=city.sub[0].name;
                return state;
              })
          }
          else if(targetname=="area"){
            var str=event.target.value
            this.setState(function(state) {
              state.area=str;
              return state;
            })
          }
        },
        render: function () {
            console.log(this.state)
          return (<div onChange={this.getSel}><Province pname={this.state.province}/><City pname={this.state.province} cname={this.state.city}/><Area pname={this.state.province} cname={this.state.city} aname={this.state.area}/></div>);
        }
    })