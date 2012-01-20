var vows = require('vows'),
dolce = require('../'),
assert = require('assert');


vows.describe('Implicit Routes').addBatch({
	
	'An explicit collection of routes': {
		
		topic: function() {
			var collection = dolce.collection();
			
			collection.add({
				
				'a': 1,
				'b': 1,
				'c': 1,
				'd': 1,
				'a/*': 1,
				'a -> b/*': 1,
				'b -> c/*': 1,
				'c -> d/*': 1,
				'a -> aa': 1,
				'a -> b -> bb': 1,
				'a -> b -> c -> cc': 1,
				'a -> b -> c -> d -> dd': 1,
				'aa/*': 1,
				'aa -> bb/*': 1,
				'aa -> bb -> cc/*': 1,
				'aa -> bb -> cc -> dd/*':1
			});

			return collection;
		},

		'a length = 2': function(topic) {
			assert.equal(topic.get('a').length, 2); 
		},

		'b length = 4': function(topic) {
			assert.equal(topic.get('b').length, 4); 
		},

		'c length = 6': function(topic) {
			assert.equal(topic.get('c').length, 6); 
		},

		'd length = 8': function(topic) {
			assert.equal(topic.get('d').length, 8); 
		},

		'aa length = 4': function(topic) {
			assert.equal(topic.get('aa').length, 4); 
		},

		'bb length = 12': function(topic) {
			assert.equal(topic.get('bb').length, 12); 
		},

		'cc length = 30': function(topic) {
			assert.equal(topic.get('cc').length, 30); 
		},

		'dd length = 68': function(topic) {
			assert.equal(topic.get('dd').length, 68); 
		}
	}
}).export(module);