var selectedId = null;

const FillTableWithData = async () => {
    let tableBody = document.getElementById("view")
                            .getElementsByTagName("table")[0]
                            .getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    let url = "https://jsonplaceholder.typicode.com/posts";
    await fetch( url )
        .then( ( response ) => response.json() )
        .then( result => {
            result.reverse().map( row => {
                let tr = document.createElement("tr");
                let userId = document.createElement("td");
                let id = document.createElement("td");
                let title = document.createElement("td");
                let body = document.createElement("td");
                let buttons = document.createElement("td");
                let buttons2 = document.createElement("td");
                let delButton = document.createElement("button");
                let editButton = document.createElement("button");
                delButton.className = "btn btn-sm btn-danger delete";
                editButton.className = "btn btn-sm btn-warning edit";
                delButton.innerHTML = "Delete";
                editButton.innerHTML = "Edit";
                buttons.append(editButton);
                buttons2.append(delButton);
                userId.innerHTML = row.userId;
                id.innerHTML = row.id;
                title.innerHTML = row.title;
                body.innerHTML = row.body;
                tr.append(userId);
                tr.append(id);
                tr.append(title);
                tr.append(body);
                tr.append(buttons);
                tr.append(buttons2);
                tableBody.append(tr);
                delButton.onclick = function() {
                    DeleteData(row.id);
                }
                editButton.onclick = function() {
                    let createNew_Button = document.getElementById("create-new");
                    let addForm = document.getElementById("add-form");
                    let userId = document.getElementById("user-id");
                    let title = document.getElementById("title");
                    let body = document.getElementById("body");
                    userId.value = row.userId;
                    title.value = row.title;
                    body.value = row.body;
                    selectedId = row.id;
                    addForm.style.display = "block";
                    createNew_Button.className = "btn btn-danger";
                    let create_Button = document.getElementById("create");
                    create_Button.onclick = function(event) {
                        event.preventDefault();
                        CreateNewData();
                    }
                }
            } );
        } ).catch( err => {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.setAttribute("colspan", "5" );
            let center = document.createElement("center");
            let h1 = document.createElement("h1");
            h1.innerHTML = "Could not load the Data !";
            center.append(h1);
            td.append(center);
            tr.append(td);
            tableBody.append(tr);
        } );
};

const DeleteData = async (id) => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await fetch(url, {
        method: 'DELETE',
      }).then(()=>{
          console.log(`Deleted: ${id}`);
          FillTableWithData();
      }).catch(err => {
          console.error( err );
      });
}

const UpdateData = async ({id,title,body,userId}) => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          title,
          body,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            console.log("Data Updated: ",json);
            FillTableWithData();
        }).catch(err=>{
            console.error( err );
        });
}

const AddNewData = async ({title,body,userId}) => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            console.log("New Data Created: ",json);
            FillTableWithData();
        });
}

const CreateNewData = async () => {
    let createNew_Button = document.getElementById("create-new");
    let addForm = document.getElementById("add-form");
    let userId = document.getElementById("user-id");
    let title = document.getElementById("title");
    let body = document.getElementById("body");
    
    if( Number(userId.value) > 0 && title != "" && body != "" ) {
        if( selectedId == null ) {
            await AddNewData({
                title: title.value,
                body: body.value,
                userId: Number(userId.value)
            });
        } else {
            await UpdateData({
                id: selectedId,
                title: title.value,
                body: body.value,
                userId: Number(userId.value)
            });
            selectedId = null;
        }
        userId.value = "";
        title.value = "";
        body.value = "";

        addForm.style.display = "none";
        createNew_Button.className = "btn btn-primary";
    } else {
        alert("Data is InComplete or InCorrect !");
    }
};

const Launch = () => {
    let refresh_Button = document.getElementById("refresh");
    refresh_Button.onclick = function () {
        FillTableWithData();
    }
    let createNew_Button = document.getElementById("create-new");
    let addForm = document.getElementById("add-form");
    addForm.style.display = "none";
    let create_Button = null;

    FillTableWithData();

    createNew_Button.onclick = () => {
        if( addForm.style.display == "block" || addForm.style.display == "" ) {
            addForm.style.display = "none";
            createNew_Button.className = "btn btn-primary";
        } else {
            addForm.style.display = "block";
            createNew_Button.className = "btn btn-danger";
            create_Button = document.getElementById("create");
            create_Button.onclick = function(event) {
                event.preventDefault();
                CreateNewData();
            }
        }
    }
}

window.onload = Launch;