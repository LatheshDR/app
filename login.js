let text = document.querySelectorAll(".input");
let operation = document.querySelector("#sub");
let result = document.querySelector("#p2");
let arr=[['Lathesh D R','6361734192'],['ajay','1267673'],['abc','123']]
console.log(arr)
console.log(text[0])
operation.addEventListener('click', function(event) {
    event.preventDefault(); 
    let value1=text[0].value
    let value2=text[1].value
    for(ar of arr)
        {
            console.log(ar[1])
            console.log(value2)

            if(ar[0]===value1&&ar[1]==value2)
                {
                    console.log(ar[0])
                    window.location.href = 'app.html';

                }
                else if(ar[0]!=value1&&value1!=""&&value2!="")
                    {
                        result.innerText="invalid user name"
                    }
                else if(ar[1]!=value2 &&value2!=""&&value1!=""){
                    result.innerText="invalid Password"
                }
                else if(value1==""){
                     result.innerText="enter user id"
                }
                else{
                    result.innerText="enter password"
                }
        } 

        
        });
    

