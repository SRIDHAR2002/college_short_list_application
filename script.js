
var arr=[];
async function fetchdata(){
    arr=[]
    console.log("inside");
    document.getElementById('final').innerHTML = ""; 
    debugger
    await fetch("./content.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => arr=data);

    const fetchRes = arr
    const college = document.getElementById("college").value;
    const inc=document.getElementById("income").value;
    //const fe=item.Scholarship_Amount+inc;
    const cas = document.getElementById("caste").value;
    const mar=document.getElementById("inter_marks").value;
    const filterData = fetchRes.filter((item)=> (item.College_Name === college && item.Caste === cas && 
        item.Annual_Fee<=(item.Scholarship_Amount+parseInt(inc)) && item.Scholorship_Marks<=parseInt(mar)))
   //document.write(JSON.stringify(filterData));
    //const filterData1=filterData.filter((x)=>(x.Annual_Fee<(x.Scholarship_Amount+inc)) )
    console.log(filterData)
   if(filterData.length===0){
    var html="<h1 color='red'>"+"Sorry something eroor!!! or there is no colleges matching for you"+"</h1>";
    document.getElementById('final').innerHTML += html; 
   }else{
    var html = "<table border='2|1'>"+"<tr >"+"<th colspan='6'>"+"<h3 style=color:'red'>"+"FOLLOWING ARE THE LIST BRANCHES SUITABLE BASED ON YOUR INFORMATION"+"</h3>"+"</th>"+"</tr>";
        html+="<tr>"+"<th>"+"COLLEGE NAME"+"</th>"+"<th>"+"COURSES"+"<th>"+"Scholarship"+"<th>"+"CASTE"+"<th>"+"Annual Fee"+"<th>"+"Marks Should get"
        for (var i = 0; i < filterData.length; i++) {
            html+="<tr>";
            html+="<td>"+filterData[i].College_Name+"</td>";
            html+="<td>"+filterData[i].Courses+"</td>";
            html+="<td>"+filterData[i].Scholarship_Amount+"</td>";
            html+="<td>"+filterData[i].Caste+"</td>";
            html+="<td>"+filterData[i].Annual_Fee+"</td>";
            html+="<td>"+filterData[i].Scholorship_Marks+"</td>";
            html+="</tr>";
        
        }
        html+="</table>";
     
        
         document.getElementById('final').innerHTML += html; 
    
   }
}
    //console.log(arr)

//fetchdata()
//console.log(arr)

