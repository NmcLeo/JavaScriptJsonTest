var csv2json = require('csv2json');
var fs = require('fs');

test('Config 1', done => {
	fs.createReadStream('TestData/TestFiles/input1:^*(^%*$.csv')
	.pipe(csv2json({
		separator: ';',
		dynamicTyping: false
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output1:^*(^%*$.json'))
	.once('finish', function() {
		var output =  fs.readFileSync('TestOutput/Files/output1:^*(^%*$.json')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output1.json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 2', done => {
	fs.createReadStream('TestData/TestFiles/input2.csv')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output2.txt'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output2.txt')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output2.json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 3', done => {
	fs.createReadStream('TestData/TestFiles/input3.txt')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: false
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output3:^*(*(&^(_-))).json'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output3:^*(*(&^(_-))).json')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output3:^*(*(&^(_-))).json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});
test('Config 4', done => {
	fs.createReadStream('TestData/TestFiles/input4:^*(^%*$.txt')
	.pipe(csv2json({
		separator: ' ',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output4.txt'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output4.txt')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output4.txt')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 5', done => {
	fs.createReadStream('TestData/TestFiles/input5:^*(^%*$.txt')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output5.json'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output5.json')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output5.json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 6', done => {
	fs.createReadStream('TestData/TestFiles/input6.txt')
	.pipe(csv2json({
		separator: '	',
		dynamicTyping: false
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output6:^*(*(&^(_-))).txt'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output6:^*(*(&^(_-))).txt')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output6:^*(*(&^(_-))).txt')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 7', done => {
	fs.createReadStream('TestData/TestFiles/input7:^*(^%*$.txt')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output7:^*(^%*$.json'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output7:^*(^%*$.json')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output7:^*(^%*$.json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 8', done => {
	fs.createReadStream('TestData/TestFiles/input8.csv')
	.pipe(csv2json({
		separator: ' ',
		dynamicTyping: false
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output8.txt'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output8.txt')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output8.txt')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 9', done => {
	fs.createReadStream('TestData/TestFiles/input9:^*(^%*$.csv')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output9:^*(^%*$.json'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output9:^*(^%*$.json')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output9:^*(^%*$.json')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});

test('Config 10', done => {
	fs.createReadStream('TestData/TestFiles/input10:^*(^%*$.txt')
	.pipe(csv2json({
		separator: ',',
		dynamicTyping: true
	}))
	.pipe(fs.createWriteStream('TestOutput/Files/output10.txt'))
	.once('finish', function() {
		var output = fs.readFileSync('TestOutput/Files/output10.txt')
		var expectOutput = fs.readFileSync('TestData/ExpectOutput/output10.txt')
		expect(output.toString() === expectOutput.toString()).toBe(true)
		done();
	})
});
