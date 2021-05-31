const Launch = () => {
	const BitConvertor = {
		decimalNumber: document.getElementById('decimal-number'),
		binaryNumber: document.getElementById('binary-number'),
		octalNumber: document.getElementById('octal-number'),
		hexaDecimalNumber: document.getElementById('hexa-decimal-number'),
		convertDecimalToAll: function() {
			if (this.decimalNumber.value != '') {
				this.binaryNumber.value = Number(this.decimalNumber.value).toString(2);
				this.octalNumber.value = Number(this.decimalNumber.value).toString(8);
				this.hexaDecimalNumber.value = Number(this.decimalNumber.value).toString(16);
			}
		},
		convertBinaryToAll: function() {
			if (this.binaryNumber.value != '') {
				this.decimalNumber.value = parseInt(Number(this.binaryNumber.value), 2);
				this.octalNumber.value = Number(this.decimalNumber.value).toString(8);
				this.hexaDecimalNumber.value = Number(this.decimalNumber.value).toString(16);
			}
		},
		convertOctalToAll: function() {
			if (this.octalNumber.value != '') {
				this.decimalNumber.value = parseInt(Number(this.octalNumber.value), 8);
				this.binaryNumber.value = Number(this.decimalNumber.value).toString(2);
				this.hexaDecimalNumber.value = Number(this.decimalNumber.value).toString(16);
			}
		},
		convertHexaDecimalToAll: function() {
			if (this.hexaDecimalNumber.value != '') {
				this.decimalNumber.value = parseInt(this.hexaDecimalNumber.value, 16);
				this.binaryNumber.value = Number(this.decimalNumber.value).toString(2);
				this.octalNumber.value = Number(this.decimalNumber.value).toString(8);
			}
		},
		setKeyboardEvents: function() {
			let parent = this;
			this.decimalNumber.onkeyup = function(e) {
				parent.convertDecimalToAll();
			};
			this.binaryNumber.onkeyup = function(e) {
				parent.convertBinaryToAll();
			};
			this.octalNumber.onkeyup = function(e) {
				parent.convertOctalToAll();
			};
			this.hexaDecimalNumber.onkeyup = function(e) {
				parent.convertHexaDecimalToAll();
			};
		},
		configurations: function() {
			this.setKeyboardEvents();
		},
		run: function() {
			this.configurations();
		}
	};
	BitConvertor.run();
};

window.onload = Launch;
