const formatNumber=(num)=>{
    if(num>1000000){
        return (num/100000).toFixed(2)+"M"
    }
    else {
        return (num/1000).toFixed(2)+"K"
    }
}
export default formatNumber;