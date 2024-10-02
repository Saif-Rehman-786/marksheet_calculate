function showDataInModal() {
    let total = 400;

    let fname = document.getElementById('sname').value;
    let insitute = document.getElementById('insit').value;
    let lname = document.getElementById('lname').value;
    let physics = parseFloat(document.getElementById('phyic').value);
    let chemistry = parseFloat(document.getElementById('chemis').value);
    let biology = parseFloat(document.getElementById('bio').value);
    let math = parseFloat(document.getElementById('mat').value);
    
    let obtaine = physics + chemistry + biology + math;
    let percent = (obtaine / total) * 100;

   
    document.getElementById('modalBody').innerHTML = `
        <ul class="list-unstyled text-start">
           <li><strong>Name:</strong>&nbsp; ${fname}</li>
            <li><strong>Last Name:</strong>&nbsp;${lname}</li>
            <li><strong>Institute:</strong>&nbsp;${insitute}</li>
            <li><strong>Physics:</strong>&nbsp;${physics}</li>
            <li><strong>Biology:</strong> &nbsp;${biology}</li>
            <li><strong>Chemistry:</strong>&nbsp;${chemistry}</li>
            <li><strong>Math:</strong>&nbsp; ${math}</li>
            <li><strong>Percentage:</strong>&nbsp; ${percent.toFixed(2)}%</li>
        </ul>
        <div id="wishMessage" class="text-center mt-3" style="font-size: 1.5rem;"></div> <!-- Center-aligned message -->
    `;

    // Switch cases to show message according to percentage
    let wishMessage = "";
    switch (true) {
        case (percent >= 90):
            wishMessage = "Excellent! Keep up the great work!";
            document.getElementById('wishMessage').style.color = "green";
            break;
        case (percent >= 80 && percent < 90):
            wishMessage = "Very Good! You did a great job!";
            document.getElementById('wishMessage').style.color = "blue";
            break;
        case (percent >= 70 && percent < 80):
            wishMessage = "Good! You performed well!";
            document.getElementById('wishMessage').style.color = "blue";
            break;
        case (percent >= 60 && percent < 70):
            wishMessage = "Fair! But there's room for improvement.";
            document.getElementById('wishMessage').style.color = "orange";
            break;
        case (percent >= 50 && percent < 60):
            wishMessage = "You passed, but try to work harder!";
            document.getElementById('wishMessage').style.color = "orange";
            break;
        case (percent >= 40 && percent < 50):
            wishMessage = "You're close, but more effort is needed!";
            document.getElementById('wishMessage').style.color = "orange";
            break;
        default:
            wishMessage = "Better Luck Next Time!";
            document.getElementById('wishMessage').style.color = "red";
    }

   
    document.getElementById('wishMessage').innerHTML = wishMessage;

   
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
}
