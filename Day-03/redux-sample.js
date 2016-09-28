var store = {
	list : []
}

function addBugAction(bugName){
	return {
		name : 'ADD_BUG',
		payload : {
			newBugName : bugName
		}
	}
}

function bugsReducer(store, action){
	switch (action.name){
		case 'ADD_BUG':
			var newBug = {
				id : store.list.reduce(function(result, bug){
					return result > bug.id ? result : bug.id
				}, 0) + 1,
				name : action.payload.newBugName,
				isClosed : false
			}
			return {
				list : store.list.concat([newBug])
			}
	}
}

function createDispatcher(bugsReducer, onStoreChange){
	return function(actionObj){
		store = bugsReducer(store, actionObj);
		if (typeof onStoreChange === 'function')
			onStoreChange();
	};
}

var dispatcher = createDispatcher(bugsReducer);

