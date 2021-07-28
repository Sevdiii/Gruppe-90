function backlog() {
    for (let i = 0; i < test1.length; i++) {
        document.getElementById('test').innerHTML += `
        
        <div>${test1[i]}</div>
        
        
        
    `

    };
}

let test1 = ['uno', 'dos'];