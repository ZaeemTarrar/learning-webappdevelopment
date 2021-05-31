const Launch = () => {
	console.time('Total Time');

	// O (1)
	console.time('O (1)');
	const items = [ 1, 2, 5, 8, 9 ];
	const getLast = (item) => item[items.length - 1];
	console.log('Last Item: ', getLast(items));
	console.timeEnd('O (1)');

	// O (N)
	console.time('O (N)');
	const items2 = [ 1, 2, 5, 8, 9, 7, 3 ];
	const findIndex = (items, match) => {
		for (let i = 0, total = items.length; i < total; i++) if (items[i] == match) return i;
		return -1;
	};
	console.log('Index Found: ', findIndex(items2, 9));
	console.timeEnd('O (N)');

	// O (N^2)
	console.time('O (N^2)');
	const items3 = [ 1, 2, 5, 8, 9, 7, 3 ];
	const buildSquareMatrix = (items) => {
		let matrix = [];
		for (let i = 0, total = items.length; i < total; i++) {
			matrix[i] = [];
			for (let j = 0, total = items.length; j < total; j++) matrix[i].push(items[j]);
		}
		return matrix;
	};
	console.log('Matrix: ', buildSquareMatrix(items3));
	console.timeEnd('O (N^2)');

	// O (N log N)
	console.time('O (N log N)');
	const items4 = [ 'q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r' ];
	const quickSort = (list) => {
		if (list.length < 2) return list;
		let pivot = list[0];
		let left = [];
		let right = [];
		for (let i = 1, total = list.length; i < total; i++) {
			if (list[i] < pivot) left.push(list[i]);
			else right.push(list[i]);
		}
		return [ ...quickSort(left), pivot, ...quickSort(right) ];
	};
	console.log('Sorted: ', quickSort(items4));
	console.timeEnd('O (N log N)');

	console.timeEnd('Total Time');
};

window.onload = Launch;
