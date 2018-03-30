
export default {
    getProvince(name){
        for(var i =0;i<allpca.length;i++){
            if(allpca[i].name==name){
                return allpca[i];
            }
        }
      },
    getCity(province,cityname){
        for(var i =0;i<province.sub.length;i++){
            if(province.sub[i].name==cityname){
                return province.sub[i];
            }
        }
      }
}