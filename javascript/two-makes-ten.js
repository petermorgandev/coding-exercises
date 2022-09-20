const makesTen = (x, y) => {
	if (x === 10 || y === 10 || x + y === 10){
		return true;
	}

	return false;
};

makesTen(9, 10)
makesTen(9, 9)
makesTen(1, 9)
