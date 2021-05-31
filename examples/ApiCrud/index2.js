const Launch = () => {
	const Crud = {
		selectedId: null,
		refresh: document.getElementById('refresh'),
		createNew: document.getElementById('create-new'),
		create: document.getElementById('create').getElementsByTagName('button')[0],
		addForm: document.getElementById('add-form'),
		userId: document.getElementById('user-id'),
		title: document.getElementById('title'),
		body: document.getElementById('body'),
		tableBody: document.getElementById('view').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0],
		url: `https://jsonplaceholder.typicode.com/posts/`,
		empty: function() {
			this.userId.value = '';
			this.title.value = '';
			this.body.value = '';
		},
		closeAddForm: function() {
			this.addForm.style.display = 'none';
			this.createNew.className = 'btn btn-primary';
		},
		openAddForm: function() {
			let parent = this;
			this.addForm.style.display = 'block';
			this.createNew.className = 'btn btn-danger';
			this.create = document.getElementById('create');
			this.create.onclick = function(e) {
				e.preventDefault();
				parent.createData();
			};
		},
		initialStyles: function() {
			this.addForm.style.display = 'none';
		},
		initialLoadings: function() {
			this.readData();
		},
		configurations: function() {
			this.setupClickEvents();
		},
		setupClickEvents: function() {
			var parent = this;
			this.refresh.onclick = function() {
				parent.readData();
			};
			this.createNew.onclick = function() {
				if (parent.addForm.style.display == 'block' || parent.addForm.style.display == '') {
					parent.closeAddForm();
				} else {
					parent.openAddForm();
				}
			};
		},
		addData: function() {
			fetch(this.url, {
				method: 'POST',
				body: JSON.stringify({
					title: this.title.value,
					body: this.body.value,
					userId: Number(this.userId.value)
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			})
				.then((response) => response.json())
				.then((json) => {
					console.log('New Data Created: ', json);
					this.readData();
				});
		},
		updateData: function() {
			fetch(this.url, {
				method: 'PUT',
				body: JSON.stringify({
					id: this.selectedId,
					title: this.title.value,
					body: this.body.value,
					userId: Number(this.userId.value)
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			})
				.then((response) => response.json())
				.then((json) => {
					console.log('Data Updated: ', json);
					this.readData();
				})
				.catch((err) => {
					console.error(err);
				});
		},
		createData: function() {
			if (Number(this.userId.value) > 0 && this.title.value != '' && this.body.value != '') {
				if (this.selectedId == null) {
					this.addData();
				} else {
					this.updateData();
					this.selectedId = null;
				}
				this.empty();
				this.closeAddForm();
			} else {
				alert('Data is InComplete or InCorrect !');
			}
		},
		deleteData: function(id) {
			fetch(this.url + `${id}`, {
				method: 'DELETE'
			})
				.then(() => {
					console.log(`Deleted: ${id}`);
					this.readData();
				})
				.catch((err) => {
					console.error(err);
				});
		},
		readData: function() {
			console.log('Reading ...');
			this.tableBody.innerHTML = '';
			fetch(this.url)
				.then((response) => response.json())
				.then((result) => {
					result.reverse().map((row) => {
						let tr = document.createElement('tr');
						let tds = {
							userId: document.createElement('td'),
							id: document.createElement('td'),
							title: document.createElement('td'),
							body: document.createElement('td'),
							editButton: document.createElement('td'),
							delButton: document.createElement('td')
						};
						let btns = {
							edit: document.createElement('button'),
							delete: document.createElement('button')
						};
						tds.userId.innerHTML = row.userId;
						tr.append(tds.userId);
						tds.id.innerHTML = row.id;
						tr.append(tds.id);
						tds.title.innerHTML = row.title;
						tr.append(tds.title);
						tds.body.innerHTML = row.body;
						tr.append(tds.body);
						btns.edit.className = 'btn btn-sm btn-warning edit';
						btns.edit.innerHTML = 'Edit';
						tr.append(btns.edit);
						btns.delete.className = 'btn btn-sm btn-danger delete';
						btns.delete.innerHTML = 'Delete';
						tds.editButton.append(btns.edit);
						tds.delButton.append(btns.delete);
						tr.append(tds.editButton);
						tr.append(tds.delButton);
						this.tableBody.append(tr);
						let parent = this;
						btns.delete.onclick = function() {
							parent.deleteData(row.id);
						};
						btns.edit.onclick = function() {
							parent.userId.value = row.userId;
							parent.title.value = row.title;
							parent.body.value = row.body;
							parent.selectedId = row.id;
							parent.openAddForm();
						};
					});
				})
				.catch((err) => {
					console.error('Error: ', err);
				});
		},
		run: function() {
			this.initialStyles();
			this.configurations();
			this.initialLoadings();
		}
	};
	Crud.run();
};

window.onload = Launch;
